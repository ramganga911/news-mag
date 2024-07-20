
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // This makes the server accessible externally
    port: 3000,      // You can choose a specific port
  },
})
