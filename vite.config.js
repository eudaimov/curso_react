import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Cambia 'output' por la carpeta que desees
    emptyOutDir: true, // Limpia la carpeta de salida antes de construir
  },
})
