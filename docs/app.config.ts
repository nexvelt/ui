export default defineAppConfig({
  docus: {
    title: 'NexveltUI',
    description: 'State-of-the-art UI/UX technology',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'phojiee',
      github: 'nexvelt/ui',
      nexvelt: {
        label: 'Nexvelt LLC',
        icon: 'simple-icons:conventionalcommits',
        href: 'https://nuxt.com',
      },
    },
    github: {
      dir: 'docs/content',
      branch: 'docus',
      repo: 'ui',
      owner: 'nexvelt',
      edit: true,
    },
    // aside: {
    //   level: 0,
    //   collapsed: true,
    //   exclude: [],
    // },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Released under the MIT License. ',
        href: 'https://github.com/nexvelt/ui/blob/main/LICENSE',
      },
      textLinks: [
        {
          text: 'Copyright © 2023-present Phojie Rengel',
          href: 'https://github.com/phojie',
          target: '_blank',
          rel: 'noopener',
        },
      ],
    },

  },
})
