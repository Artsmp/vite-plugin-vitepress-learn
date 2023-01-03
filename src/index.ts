import type { PluginOption } from 'vite'
import { MdParser } from './parser'
import type { UserOptions } from './typing'

export const vitePluginVitepress = (options?: UserOptions): PluginOption => {
  const opts = options ?? {}
  let parser: MdParser
  return {
    name: 'vite-plugin-vitepress',
    enforce: 'pre',
    async configResolved(config) {
      parser = new MdParser(config, opts)
      await parser.setupRenderer()
    },
    transform(code, id) {
      return parser.transform(code, id)
    },
  }
}
