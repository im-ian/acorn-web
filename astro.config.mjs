// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Base path is configurable for GitHub Pages project sites.
// For user.github.io/<repo> deploys set BASE_PATH=/<repo>/ at build time.
const base = process.env.BASE_PATH ?? "/";
const site = process.env.SITE_URL ?? "https://im-ian.github.io";

// https://astro.build
export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
