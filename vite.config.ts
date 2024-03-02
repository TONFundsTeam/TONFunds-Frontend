import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'

export default defineConfig({
  plugins: [react(),nodePolyfills()],
  resolve: {
    alias: [{ find: '@app', replacement: path.resolve(process.cwd(), 'src/app') }],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
