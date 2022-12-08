<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
const props = defineProps({
  name: {
    type: String,
    default: 'ep:element-plus',
  },
})
</script>

<template>
  <IconifyIcon :icon="name" />
</template>
