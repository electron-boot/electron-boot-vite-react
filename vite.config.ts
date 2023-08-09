import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import electron from "@electron-boot/vite-plugin-electron";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),electron()],
})
