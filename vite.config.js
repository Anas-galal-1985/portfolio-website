import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // تقسيم الحزم لأحجام أصغر
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['react-icons'],
        }
      }
    },
    // توليد sourcemap للتحليل
    sourcemap: false, // اضبطه على true للتطوير، false للإنتاج
  }
})
