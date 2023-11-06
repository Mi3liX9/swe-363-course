import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    // mode: "standalone"
    mode: "middleware" // This mode allow to use Express or any other framework.
  })
});