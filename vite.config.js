import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function getCurrentDir(metaUrl) {
  return path.dirname(new URL(metaUrl).pathname)
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'styled-components': path.resolve(getCurrentDir(import.meta.url), 'node_modules', 'styled-components'),
    },
    dedupe: ['styled-components']
  },
})