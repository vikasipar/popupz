import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: '.',
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
});
