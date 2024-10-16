<script setup lang="ts">
import { addAPIProvider, disableCache } from '@iconify/vue'
import { storeToRefs } from 'pinia'

const configStore = useConfigStore()
const { config } = storeToRefs(configStore)

// 让用户保留对界面配置
configStore.initConfig()

// 强制使用 app.config.ts 的界面配置
// configStore.resetConfig()

const route = useRoute()
const layoutName = computed<any>(() => {
  if (route.path.startsWith('/Home'))
    return 'home'
  else return config.value.layout || 'default'
})

/* 初始化在线图标的供应地址 */
const iconifyProvider = useRuntimeConfig().public.iconifyProvider
addAPIProvider('', {
  resources: [iconifyProvider],
})
disableCache('all')
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout :name="layoutName">
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
