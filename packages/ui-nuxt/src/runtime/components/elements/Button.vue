<script setup lang="ts">
import Icon from '../elements/Icon.vue'
import type { ButtonProps } from '../types'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { NuxtLink } from '#components'

withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
})
</script>

<template>
  <Component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? undefined : type"
    v-bind="$attrs"
    class="btn-base"
  >
    <slot name="icon">
      <Icon v-if="icon" :name="icon" class="btn-icon" />
    </slot>
    <slot>
      {{ label }}
    </slot>
  </Component>
</template>
