import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Especifica la carpeta de salida
    emptyOutDir: true, // Vacía la carpeta de salida antes de la compilación
  },
  base: 'interactiveGift',
})
