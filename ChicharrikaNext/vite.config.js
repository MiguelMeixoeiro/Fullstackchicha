
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'


// Asegúrate de tener instaladas las dependencias necesarias:
// yarn add vite vitest

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  
});