import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  safelist: [
    'i-twemoji-blue-book',
    'i-twemoji-books',
    'i-twemoji-rocket',
    'i-logos-markdown',
    'i-ep-menu',
    'i-carbon-tool-box',
    'i-carbon-character-whole-number',
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
