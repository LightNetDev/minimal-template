// @ts-check
import { defineConfig } from "astro/config";
import lightnet from "lightnet";

export default defineConfig({
  // TODO: Set the site's domain.
  site: "https://your-site-domain.com",
  integrations: [
    lightnet({
      title: {
        en: "Media Library",
      },
      languages: [
        {
          code: "en",
          label: {
            en: "English",
          },
          isDefaultSiteLanguage: true,
        },
      ],
      favicon: [{ href: "favicon.svg" }],
      credits: true,
      mainMenu: [
        {
          href: "/",
          label: {
            en: "Home",
          },
        },
        {
          href: "/media",
          label: {
            en: "Media",
          },
        },
        {
          href: "/about",
          label: {
            en: "About",
          },
        },
      ],
    }),
  ],
});
