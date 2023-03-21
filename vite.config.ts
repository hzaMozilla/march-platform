import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/*.ts', 'src/**/*.ts', 'src/**/*.vue']
    })
  ],
  resolve: {
    extensions: ['.vue'],
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './app')
    }
  },
  server: {
    port: 8099,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
