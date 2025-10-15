// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
      customCss: ['./src/index.css'],
      sidebar: [
        {
          label: "Sociocracy",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "sociocracy/example" },
          ],
        },
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
