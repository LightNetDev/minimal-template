// @ts-check
import { defineConfig } from "astro/config";
import lightnet from "lightnet";

/**
 * @type {import('lightnet').Language[]}
 */
const languages = [
  {
    code: "en",
    label: "English",
    isDefaultSiteLanguage: true,
  },
];

export default defineConfig({
  // TODO: Set the site's domain.
  site: "https://your-site-domain.com",
  integrations: [
    lightnet({
      title: "x.site.title",
      languages,
      favicon: [{ href: "favicon.svg" }],
      mainMenu: [
        {
          href: "/",
          label: "ln.home.title",
        },
        {
          href: "/media",
          label: "ln.search.title",
        },
        {
          href: "/about",
          label: "x.navigation.about",
        },
      ],
    }),
  ],
});
