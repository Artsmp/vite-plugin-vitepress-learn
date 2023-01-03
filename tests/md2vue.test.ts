import path from 'path'
import { fileURLToPath } from 'url'
import { createMarkdownRenderer } from 'vitepress'
import { describe, it } from 'vitest'
import { md2vue } from '../src/parser/md2vue'
import testCode from './fixtures/test.md?raw'
const srcDir = fileURLToPath(new URL('./fixtures', import.meta.url))
describe('md 2 vue', async () => {
  const md = await createMarkdownRenderer(srcDir)
  it('test md to vue result', () => {
    md2vue(md, srcDir, testCode, path.resolve(srcDir, 'test.md'))
  })
})
