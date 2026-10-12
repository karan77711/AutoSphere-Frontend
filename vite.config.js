
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : (process.env.GITHUB_PAGES ? '/AutoSphere-Frontend/' : './'),
})
