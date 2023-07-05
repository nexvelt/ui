<script setup lang="ts">

</script>

<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-$c-muted bg-white/5 dark:bg-gray-950/5">
    <div class="container flex items-center justify-between mx-auto px-4 lg:px-6 py-1">
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
