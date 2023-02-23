<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { addAPIProvider, disableCache } from '@iconify/vue'
const configStore = useConfigStore()
const { config } = storeToRefs(configStore)

configStore.initConfig()
useHead({
  title: configStore.config.title,
})

const iconifyProvider = useRuntimeConfig().public.iconifyProvider
addAPIProvider('', {
  resources: [iconifyProvider],
})
disableCache('all')
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage :transition="{ name: config.transitionType, mode: 'out-in', appear: true }" />
    </NuxtLayout>
  </div>
</template>

<style>
.slide-enter-active,
.fade-enter-active,
.blur-enter-active,
.scale-enter-active {
  transition: all var(--t-transform);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-enter-from {
  opacity: 0;
}

.blur-enter-from {
  opacity: 0;
  filter: blur(0.5rem);
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
</style>
