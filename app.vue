<script setup lang="ts">
import { addAPIProvider, disableCache } from '@iconify/vue'
const configStore = useConfigStore()
const iconifyProvider = useRuntimeConfig().public.iconifyProvider
useHead({
  title: configStore.config.title,
})
configStore.initConfig()

addAPIProvider('', {
  resources: [iconifyProvider],
})
disableCache('all')
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
