import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.travesia21.es',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  adapter: vercel(),
});
