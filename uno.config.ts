import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetNexvelt from './packages/ui-preset/src/index'

export default defineConfig({
  shortcuts: [
    {
      'alert-base': 'text-sm rounded-md p-4',
      'alert-info': 'bg-blue-50 text-blue-700 dark:(text-blue-300 bg-blue-950)',

      'alert-success': 'alert-base bg-green-50 text-green-700',
      'alert-warning': 'alert-base bg-yellow-50 text-yellow-700',
      'alert-error': 'alert-base bg-red-50 text-red-700',
      'alert-close': 'inline-flex ml-auto -mr-1.5 h-5 w-5 text-blue-400',
      'alert-close-hover': 'hover:bg-bue-200',
      'alert-close-focus': 'focus:bg-blue-200',
      'alert-close-active': 'active:bg-blue-300',

      'alert-wrapper': 'relative rounded-md bg-blue-50 dark:bg-blue-950 alert-base',
      'alert-icon': 'mr-3 h-5 w-5 text-blue-400 dark:text-blue-300',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons(),
    presetNexvelt(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  configDeps: [
    './packages/ui-preset/src/_shortcuts/button.ts',
    './packages/ui-preset/src/_shortcuts/general.ts',
    './packages/ui-preset/src/_shortcuts/index.ts',
    './packages/ui-preset/src/_shortcuts/input.ts',
  ],
})
