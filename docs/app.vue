<script setup lang="ts">
const route = useRoute()

const classValue = computed(() => {
  if (route.fullPath === '/')
    return 'container mx-auto'
})
</script>

<template>
  <div class="relative">
    <AppHeader />

    <div :class="classValue">
      <NuxtPage />
    </div>

    <AppFooter />
    <AppBanner />
  </div>
</template>
