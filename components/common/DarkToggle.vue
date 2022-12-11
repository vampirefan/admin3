<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const configStore = useConfigStore()
const isDark = ref(configStore.config.themeDark)
configStore.$subscribe((mutation, state) => {
  isDark.value = state.config.themeDark
})

function toggleDark() {
  useToggle(isDark).call(isDark) // 不知道 Function.call() 这样用对不对
  configStore.setThemeDark(isDark.value)
  configStore.setSidebarDark(isDark.value) // 设定主题色的同时设定菜单主题色
}
</script>

<template>
  <el-link :underline="false" @click="toggleDark()">
    <Icon v-if="isDark" name="i-twemoji-last-quarter-moon-face" />
    <Icon v-else name="i-twemoji-sun" />
  </el-link>
</template>
