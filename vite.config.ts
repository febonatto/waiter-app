import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '10.0.0.107',
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@views': path.resolve(__dirname, './src', 'views'),
    },
  },
});
