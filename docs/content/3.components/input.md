---
github: true
description: Display an input field.
---

## Usage

Use a `v-model` to make the Input reactive.

::component-example
#default
:input-example

#code
```vue
<script setup>
const value = ref('')
</script>

<template>
  <NVInput v-model="value" />
</template>
```
::
