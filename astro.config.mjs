// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopicsPlugin from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Community@",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/FujoWebDev/community-at",
        },
      ],
      plugins: [
        starlightSidebarTopicsPlugin([
          {
            label: "Sociocracy",
            link: '/sociacracy/',
            items: [
              // Each item here is one entry in the navigation menu.
              { label: "Example Guide", slug: "sociocracy/example" },
            ],
          },
        ])
      ],
      sidebar: [
        {
          label: "FujoWeb.dev & FujoGuide",
          autogenerate: { directory: "fujowebdev" },
        },
        {
          label: "GitHub",
          autogenerate: { directory: "github" },
        },
      ]
    }),
  ],
});
