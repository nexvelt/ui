<script setup>
const value = ref('')
</script>

<template>
  <NVFormGroup
    label="Name"
    required
    hint="Enter your full name"
  >
    <NVInput
      v-model="value"
      input="outline"
      placeholder="Enter your name"
    />
  </NVFormGroup>
</template>
