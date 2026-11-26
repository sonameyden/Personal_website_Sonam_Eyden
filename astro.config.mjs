import { defineConfig } from 'astro/config';

// Static site for GitHub Pages: https://sonameyden.github.io/Personal_website_Sonam_Eyden/
export default defineConfig({
  site: 'https://sonameyden.github.io',
  base: '/Personal_website_Sonam_Eyden',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
