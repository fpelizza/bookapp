import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
     usePolling: true,
    },
  host: true, // Here
  strictPort: true,
  port: 3000
  }, 
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',  // Utiliza index.html como punto de entrada
      },
    },
  },
})
