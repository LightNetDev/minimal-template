// @ts-check
import lightnetDecapAdmin from "@lightnet/decap-admin";
import { defineConfig } from "astro/config";
import lightnet from "lightnet";

/**
 * @type {import('lightnet').Language[]}
 */
const languages = [
  // TODO: Add site and content languages.
  // TODO: For site languages, add translations to /src/translations/
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
      // TODO: Set your favicon
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
    lightnetDecapAdmin({ languages }),
  ],
});
