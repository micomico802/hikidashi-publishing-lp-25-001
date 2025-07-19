import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  css: {
    postcss: './postcss.config.js',
  },
  optimizeDeps: {
    include: ['tailwindcss'],
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
