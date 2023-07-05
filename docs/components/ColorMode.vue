<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NVButton
    btn="ghost-gray"
    @click="toggleDark()"
  >
    <NVIcon
      text="xl"
      name="text-xl i-carbon-sun dark:i-carbon-moon"
    />
  </NVButton>
</template>
