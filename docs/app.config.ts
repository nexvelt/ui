export default defineAppConfig({
  docus: {
    title: 'NexveltUI',
    description: 'State-of-the-art UI/UX technology',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com',
      },
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true,
    },
    // aside: {
    //   level: 0,
    //   collapsed: false,
    //   exclude: [],
    // },
    // main: {
    //   padded: true,
    //   fluid: true,
    // },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      // fluid: true,
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Released under the MIT License. ',
        href: 'https://docus.dev',
      },
      textLinks: [
        {
          text: 'Copyright © 2023-present Phojie Rengel',
          href: 'https://nuxt.com',
          target: '_blank',
          rel: 'noopener',
        },
      ],
    },

  },
})
