import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Marion County Septic. Static site built by Cloudflare Pages from the
// connected GitHub repo. No local build step is required for deployment.
// Portfolio standards: trailing slashes always, directory build format,
// self-referencing canonical (implemented in BaseLayout via Astro.site + Astro.url).
export default defineConfig({
  site: 'https://marioncountyseptic.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
