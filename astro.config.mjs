import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://giopan.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    fallback: {
      it: "en",
    },
  }
});