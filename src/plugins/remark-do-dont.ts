import GithubSlugger from "github-slugger";
import { toString as nodeText } from "mdast-util-to-string";
import type { Heading, Root } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";
import type { Plugin } from "unified";
import type {} from "mdast-util-to-hast";

type ColumnKind = "do" | "dont";

const COLUMN: Record<ColumnKind, { className: string; label: string }> = {
  do: { className: "do-column", label: "Do" },
  dont: { className: "dont-column", label: "Do not" },
};

const isColumnKind = (name: string): name is ColumnKind =>
  name === "do" || name === "dont";

// Typed as `heading` (not `paragraph`) so starlight-links-validator sees the
// id and doesn't flag the self-link as invalid. `hName: "div"` keeps the
// rendered HTML still a div.
const makeLabel = ({ text, id }: { text: string; id: string }): Heading => ({
  type: "heading",
  depth: 6,
  data: { hName: "div", hProperties: { id, className: "do-dont-label" } },
  children: [
    {
      type: "link",
      url: `#${id}`,
      title: null,
      data: { hProperties: { className: "do-dont-label-anchor" } },
      children: [{ type: "text", value: text }],
    },
  ],
});

const makeContainer = ({
  name,
  className,
  children,
}: {
  name: string;
  className: string;
  children: ContainerDirective["children"];
}): ContainerDirective => ({
  type: "containerDirective",
  name,
  attributes: {},
  children,
  data: { hName: "div", hProperties: { className } },
});

/**
 * Mutates a `:::do` / `:::dont` directive into a labeled column div.
 * `sectionSlug` is the slug of the nearest preceding heading, used to
 * scope the anchor id (`#${slug}-do` / `#${slug}-dont`).
 */
const makeColumn = ({
  node,
  kind,
  sectionSlug,
}: {
  node: ContainerDirective;
  kind: ColumnKind;
  sectionSlug: string;
}): void => {
  const { className, label } = COLUMN[kind];
  const id = sectionSlug ? `${sectionSlug}-${kind}` : kind;
  node.data = { ...node.data, hName: "div", hProperties: { className } };
  node.children = [makeLabel({ text: label, id }), ...node.children];
};

/**
 * Transforms `:::do` + `:::dont` container directives into paired columns.
 *
 *   :::do        :::do-dont
 *   - item       :::do
 *   :::          - item
 *   :::dont      :::
 *   - item       :::dont
 *   :::          - item
 *                :::
 *                :::
 *
 * Adjacent siblings get wrapped automatically; an explicit `:::do-dont`
 * wrapper is also honored. Each column gets a labeled div with a
 * self-anchor link whose id derives from the nearest preceding heading slug.
 */
const remarkDoDont: Plugin<[], Root> = () => {
  return (tree) => {
    const slugger = new GithubSlugger();
    let sectionSlug = "";

    const children = tree.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      // Track the nearest preceding heading so column ids can hang off it.
      if (child.type === "heading") {
        sectionSlug = slugger.slug(nodeText(child));
        continue;
      }
      if (child.type !== "containerDirective") continue;

      switch (child.name) {
        // Explicit `:::do-dont` wrapper: add properties, build inner columns.
        case "do-dont": {
          child.data = {
            ...child.data,
            hName: "div",
            hProperties: { className: "do-dont" },
          };
          for (const inner of child.children) {
            if (
              inner.type !== "containerDirective" ||
              !isColumnKind(inner.name)
            ) {
              continue;
            }
            makeColumn({ node: inner, kind: inner.name, sectionSlug });
          }
          break;
        }

        // Bare `:::do`: wrap with adjacent `:::dont` if present.
        case "do": {
          const next = children[i + 1];
          makeColumn({ node: child, kind: "do", sectionSlug });
          if (next?.type !== "containerDirective" || next.name !== "dont") {
            break;
          }
          makeColumn({ node: next, kind: "dont", sectionSlug });
          // Remove its sibling (the "dont"), wrapping each other tight in the do-dont
          // This means the next pass won't find the ":::dont" and won't reprocess it
          children.splice(
            i,
            2,
            makeContainer({
              name: "do-dont",
              className: "do-dont",
              children: [child, next],
            }),
          );
          break;
        }

        // Standalone `:::dont` (no preceding `:::do`): make column only, no wrapper.
        case "dont": {
          makeColumn({ node: child, kind: "dont", sectionSlug });
          break;
        }
      }
    }
  };
};

export default remarkDoDont;
