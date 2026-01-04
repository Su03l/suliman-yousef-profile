import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      
      // Force watch for changes
      watch: {
        usePolling: true,
      },
    },
    plugins: [react()],

    // Disable caching
    cacheDir: 'node_modules/.vite-temp',



    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
