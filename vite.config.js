import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'apis': path.resolve(__dirname, 'src/apis'),
      'views': path.resolve(__dirname, 'src/views'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  plugins: [vue()]
})
