<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const router = useRouter()
const { y } = useWindowScroll()

const headerClass = computed(() => {
  const classValue = 'border-b border-$c-border bg-gray-white/50 dark:bg-gray-950/50'
  if (router.currentRoute.value.path !== '/' || y.value > 10)
    return classValue

  return ''
})
</script>

<template>
  <header
    :class="headerClass"
    class="sticky top-0 z-50 w-full backdrop-blur flex-none"
  >
    <div class="container flex items-center justify-between mx-auto px-4 lg:px-6">
      <NVButton
        class="font-black px-0"
        to="/"
      >
        <AppLogo class="h-13 -mt-1 w-auto" />
        NexveltUI
      </NVButton>

      <AppHeaderLinks />
    </div>
  </header>
</template>
