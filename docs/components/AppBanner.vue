<script setup>
import { useStorage } from '@vueuse/core'

const showBanner = useStorage('nv-app-banner', false)
</script>

<template>
  <div
    v-if="showBanner"
    class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8"
  >
    <div
      class="border-$c-muted border pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-950/70 backdrop-blur px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5"
    >
      <p class="text-sm leading-6 text-white">
        <strong
          class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-$nv-c-brand-next to-$color-primary-600"
        >NexveltUI BETA</strong>
        <svg
          viewBox="0 0 2 2"
          class="mx-2 inline h-0.5 w-0.5 fill-current"
          aria-hidden="true"
        >
          <circle cx="1" cy="1" r="1" />
        </svg>
        It is not recommended to use it in production yet.
        <NVButton target="_blank" class="font-normal" to="https://github.com/nexvelt/ui/issues">
          Please report any bugs or issues you find.
          &nbsp;<span
            aria-hidden="true"
            class="animate-pulse"
          >&rarr;</span>
        </NVButton>
      </p>
      <NVButton class="-m-1.5 flex-none p-1.5" @click="showBanner = false">
        <NVIcon name="i-carbon-close" class="h-5 w-5 text-white" aria-hidden="true" />
      </NVButton>
    </div>
  </div>
</template>
