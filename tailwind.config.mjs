import { lightnetStyles } from "lightnet/tailwind.config.ts";
/**
 * @type {import('tailwindcss').Config}
 */
export default {
  presets: [
    lightnetStyles({
      // TODO: Set primary color. It should have good contrast against white background.
      primaryColor: "#1F2035",
    }),
  ],
};
