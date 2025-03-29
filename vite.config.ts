import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5173,
    hmr: {
      protocol: 'ws',
    },
  },
  preview: {
    host: true,
    port: 4173,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
});
