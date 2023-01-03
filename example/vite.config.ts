import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import { vitePluginVitepress } from '../src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Inspect(), vitePluginVitepress()],
})
