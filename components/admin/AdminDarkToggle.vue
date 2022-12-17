<script setup lang="ts">
import { storeToRefs } from 'pinia'

const configStore = useConfigStore()
const { config } = storeToRefs(configStore)

function toggleDark() {
  const isDark = config.value.themeDark
  /* 设定主题色 */
  configStore.setThemeDark(!isDark)
  /* 同步设定菜单主题色 */
  configStore.setSidebarDark(!isDark)
}
</script>

<template>
  <el-link :underline="false" @click="toggleDark()">
    <AdminIcon v-if="config.themeDark" name="i-twemoji-last-quarter-moon-face" />
    <AdminIcon v-else name="i-twemoji-sun" />
  </el-link>
</template>
