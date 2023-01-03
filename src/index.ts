import type { PluginOption } from 'vite'

export const vitePluginVitepress = (): PluginOption => {
  return {
    name: 'vite-plugin-vitepress',
    configResolved(config) {
      console.log('走了我的插件钩子了')
    },
  }
}
