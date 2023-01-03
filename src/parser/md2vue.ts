import { relative } from 'path'
import type { MarkdownEnv } from 'vitepress'
import type { MdParser } from '.'

export const md2vue = (parser: MdParser, code: string, id: string) => {
  const relativePath = relative(parser.config.root, id)
  const env: MarkdownEnv = {
    cleanUrls: 'without-subfolders',
    path: id,
    relativePath,
  }

  const html = parser.md?.render(code, env)
  const { sfcBlocks } = env
  const res = [
    `<template><div>${html}</div></template>`,
    sfcBlocks?.scriptSetup?.content ?? '',
    ...sfcBlocks?.styles.map(v => v.content) ?? [],
  ].join('\n')

  return res
}
