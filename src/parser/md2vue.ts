import { relative } from 'path'
import type { MarkdownEnv, MarkdownRenderer } from 'vitepress'

export const md2vue = (md: MarkdownRenderer, srcDir: string, code: string, id: string) => {
  const relativePath = relative(srcDir, id)
  const env: MarkdownEnv = {
    cleanUrls: 'without-subfolders',
    path: id,
    relativePath,
  }

  const html = md.render(code, env)
  console.log('html', html)
}
