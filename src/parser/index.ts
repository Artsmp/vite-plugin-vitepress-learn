import type { ResolvedConfig } from 'vite'
import { type MarkdownRenderer, createMarkdownRenderer } from 'vitepress'
import type { UserOptions } from '../typing'
import { md2vue } from './md2vue'

export class MdParser {
  public md: MarkdownRenderer | undefined
  constructor(public readonly config: ResolvedConfig, public readonly options: UserOptions) {}

  public async setupRenderer() {
    const srcDir = this.config.root
    this.md = await createMarkdownRenderer(srcDir, this.options.markdown, this.config.base)
  }

  public async transform(code: string, id: string) {
    if (id.endsWith('.md'))
      return await md2vue(this, code, id)
  }
}
