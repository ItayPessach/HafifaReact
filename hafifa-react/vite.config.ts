import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@config': '/src/config',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@types': '/src/types',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@api': '/src/api/hafifa-server',
    },
  },
});
