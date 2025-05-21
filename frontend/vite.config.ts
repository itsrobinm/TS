import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  server: {
    proxy:{
      '/api/get-products' : {
        target: 'http://localhost:5173',
        rewrite: (path) => '/products.json',
      }
    }
  }
})
