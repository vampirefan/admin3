<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<template>
  <img v-bind="$attrs" :src="src" :alt="alt" :width="width" :height="height">
</template>

<style scoped>
img {
  margin: 0.25rem
}
</style>
