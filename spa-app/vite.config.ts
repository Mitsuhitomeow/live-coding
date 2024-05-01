import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: 'assets',
  build: {
    outDir: '../dist',
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    host: true,
  },
  base: '/spa-app/',
});
