<script setup lang="ts">
const configStore = useConfigStore()
useHead({
  title: configStore.config.title,
})
configStore.initConfig()
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
