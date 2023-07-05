import pkg from '../package.json'

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    // '@nexvelt/ui-nuxt',
    '../packages/ui-nuxt/src/module.ts',
  ],

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  devtools: {
    enabled: false,
  },

  css: [
    '~/styles/main.css',
  ],

  content: {
    highlight: {
      theme: {
        light: 'material-lighter',
        default: 'material-default',
        dark: 'material-palenight',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
  },
})
