<script setup lang="ts">
interface Link {
  name: string
  href: string
  target?: string | null
}

const links: Link[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Guide',
    href: '/introduction/getting-started',
  },
  {
    name: 'Merchandise',
    href: 'https://github.com/nexvelt/ui',
    target: '_blank',
  },
]
</script>

<template>
  <div class="flex items-center">
    <div>
      <NVButton
        v-for="link in links"
        :key="link.name"
        :to="link.href"
        :target="link.target"
        class="font-medium text-md"
      >
        {{ link.name }}
      </NVButton>
    </div>

    <div class="flex justify-end items-center">
      <ColorMode />

      <NVButton
        to="https://github.com/nexvelt/ui"
        btn="ghost-gray"
      >
        <NVIcon
          text="xl"
          name="i-simple-icons-github"
        />
      </NVButton>
    </div>
  </div>
</template>
