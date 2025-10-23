// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

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
      customCss: ["./src/index.css"],
      plugins: [
        starlightSidebarTopics([
          {
            label: "Sociocracy & Community",
            icon: "puzzle",
            link: "/sociocracy",
            items: [
              {
                label: "Example Guide",
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
            link: "/fujowebdev",
            items: [
              {
                label: "Writing for FujoGuide",
                autogenerate: { directory: "fujowebdev" },
              },
              {
                label: "GitHub Resources",
                autogenerate: { directory: "github" },
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
