import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";

const htmlAttributes = /\b(href|src)=(")(\/(?!\/|#)[^"]*)"/g;

const baseLinksIntegration = (base: string): AstroIntegration => {
  const prefix = base.replace(/\/$/, "");

  const withBase = (url: string) => {
    if (!prefix || prefix === "/" || url === prefix || url.startsWith(prefix + "/")) {
      return url;
    }

    return prefix + url;
  };

  const rewriteHtmlFile = async (filePath: string) => {
    const html = await readFile(filePath, "utf8");
    const rewritten = html.replace(
      htmlAttributes,
      (_match, attribute: string, quote: string, url: string) =>
        `${attribute}=${quote}${withBase(url)}${quote}`,
    );

    if (rewritten !== html) {
      await writeFile(filePath, rewritten);
    }
  };

  const rewriteHtmlDirectory = async (directory: string) => {
    const entries = await readdir(directory, { withFileTypes: true });

    await Promise.all(
      entries.map(async (entry) => {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) {
          await rewriteHtmlDirectory(path);
        } else if (entry.isFile() && extname(entry.name) === ".html") {
          await rewriteHtmlFile(path);
        }
      }),
    );
  };

  return {
    name: "base-links-integration",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        if (!prefix || prefix === "/") return;
        await rewriteHtmlDirectory(fileURLToPath(dir));
      },
    },
  };
};

export default baseLinksIntegration;
