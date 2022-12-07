<script setup lang="ts">
// change primary color to vue-green
// import { useCssVar } from '@vueuse/core'
// const el = ref(null)
// useCssVar('--el-color-primary', el).value = '#42b883'
// useCssVar('--el-color-primary-light-9', el).value = '#f0f9eb'
useHead({
  title: 'Admin3 后台管理模板',
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

<style>

</style>
