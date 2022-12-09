<script setup lang="ts">
/** 使用 replace 实现 redirect */
await navigateTo('/admin/welcome', { replace: true })
</script>

<template>
  <div v-loading="true" class="w-full h-full" />
</template>
