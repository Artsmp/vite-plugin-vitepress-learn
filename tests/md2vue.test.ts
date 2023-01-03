import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'
import { MdParser } from '../src/parser'
import testCode from './fixtures/test.md?raw'

const srcDir = fileURLToPath(new URL('./fixtures', import.meta.url))
const testPath = resolve(srcDir, 'test.md')
describe('md 2 vue', async () => {
  const parser = new MdParser({ root: srcDir, base: '/' } as any, {})
  await parser.setupRenderer()
  it('test md to vue result', async () => {
    const source = await parser.transform(testCode, testPath)
    expect(source).toMatchInlineSnapshot(`
      "<template><h1 id=\\"h1\\" tabindex=\\"-1\\">h1 <a class=\\"header-anchor\\" href=\\"#h1\\" aria-hidden=\\"true\\">#</a></h1>
      <h2 id=\\"h2\\" tabindex=\\"-1\\">h2 <a class=\\"header-anchor\\" href=\\"#h2\\" aria-hidden=\\"true\\">#</a></h2>
      <h3 id=\\"h3\\" tabindex=\\"-1\\">h3 <a class=\\"header-anchor\\" href=\\"#h3\\" aria-hidden=\\"true\\">#</a></h3>
      <h4 id=\\"h4\\" tabindex=\\"-1\\">h4 <a class=\\"header-anchor\\" href=\\"#h4\\" aria-hidden=\\"true\\">#</a></h4>
      <h5 id=\\"h5\\" tabindex=\\"-1\\">h5 <a class=\\"header-anchor\\" href=\\"#h5\\" aria-hidden=\\"true\\">#</a></h5>
      <div class=\\"tip custom-block\\"><p class=\\"custom-block-title\\">温馨提示</p>
      <p>测试</p>
      </div>
      </template>
      "
    `)
  })
})
