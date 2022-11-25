<script setup lang="ts">
// change primary color to vue-green
import { useCssVar } from '@vueuse/core'
const el = ref(null)
useCssVar('--el-color-primary', el).value = '#42b883'
useCssVar('--el-color-primary-light-9', el).value = '#f0f9eb'
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>

</style>
