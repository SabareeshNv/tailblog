import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://thelonevoice.in",
  build: {
    assets: "_assets"
  },
  integrations: [icon(), pagefind()]
});