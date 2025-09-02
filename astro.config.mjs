// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
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
      ],
    }),
  ],
});
