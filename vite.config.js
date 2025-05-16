import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { conf } from './src/conf/conf.js'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': "https://backend.authmate.xyz/",  // Replace with your backend server URL
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Resolves @ to the 'src' folder
      '@shadcn': path.resolve(__dirname, 'node_modules/shadcn')  // Resolves @shadcn to 'node_modules/shadcn'
    }
  },
})
