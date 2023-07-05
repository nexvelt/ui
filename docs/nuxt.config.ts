export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  app: {
    // baseURL: '/docs',
  },

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    // '@nexvelt/ui-nuxt',
    '../packages/ui-nuxt/src/module.ts',
  ],

  devtools: {
    enabled: false,
  },

  css: [
    '~/styles/main.css',
  ],
})
