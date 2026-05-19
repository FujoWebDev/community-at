// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightLinksValidator from "starlight-links-validator";
import remarkDirective from "remark-directive";
import remarkDoDont from "./src/plugins/remark-do-dont.ts";
import baseLinksIntegration from "./src/plugins/base-links-integration.ts";

const base = process.env.BASE_PATH;

// https://astro.build/config
export default defineConfig({
  base,
  markdown: {
    remarkPlugins: [remarkDirective, remarkDoDont],
  },
  integrations: [
    ...(base ? [baseLinksIntegration(base)] : []),
    starlight({
      title: "Community@",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/FujoWebDev/community-at",
        },
      ],
      customCss: ["./src/index.css", "./src/styles/do-dont.css"],
      plugins: [
        starlightSidebarTopics([
          {
            label: "Sociocracy & Community",
            icon: "puzzle",
            link: "/sociocracy",
            items: [
              {
                label: "About Sociocracy",
                autogenerate: { directory: "sociocracy" },
              },
            ],
          },
          {
            label: " Software & Other Projects",
            icon: "seti:powershell",
            link: "/libraries",
            items: [
              {
                label: "Our Libraries",
                autogenerate: { directory: "libraries" },
              },
            ],
          },
          {
            label: "FujoCoded Resources",
            icon: "seti:db",
            link: "/fujowebdev/style-guide",
            items: [
              {
                label: "FujoGuide Style Guide",
                autogenerate: { directory: "fujowebdev/style-guide" },
              },
              {
                label: "Extra Bits",
                autogenerate: { directory: "fujowebdev/extras" },
              },
              {
                label: "GitHub Resources",
                autogenerate: { directory: "github" },
              },
            ],
          },
        ]),
        ...(base ? [] : [starlightLinksValidator()]),
      ],
    }),
  ],
});
