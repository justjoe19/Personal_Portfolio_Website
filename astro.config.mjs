import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://michiana.dev',
  // Inline CSS into each page: removes a render-blocking request, which is the main LCP cost on mobile.
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
