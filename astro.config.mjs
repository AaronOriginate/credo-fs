import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aaronoriginate.github.io',
  base: '/credo-fs',
  vite: {
    plugins: [tailwindcss()],
  },
});
