import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 🔹 Especifica el puerto
    open: true  // 🔹 Abre automáticamente en el navegador
  }
})
 