import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetNexvelt from '../ui-preset/src/index'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetNexvelt(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  configDeps: [
    '../ui-preset/src/_shortcuts/button.ts',
    '../ui-preset/src/_shortcuts/general.ts',
    '../ui-preset/src/_shortcuts/index.ts',
    '../ui-preset/src/_shortcuts/input.ts',
  ],
})