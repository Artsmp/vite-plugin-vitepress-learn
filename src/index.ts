import { type PluginOption, normalizePath } from 'vite'

export const vitePluginVitepress = (): PluginOption => {
  return {
    name: 'vite-plugin-vitepress',
    configResolved(config) {
      console.log('执行路径：', normalizePath('\\Users\\artsmp\\Documents\\studyspace\\vite-plugin-vitepress'))
    },
    transform(code, id) {
      console.log(id, 'id')
    },
  }
}
