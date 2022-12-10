<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

// const toggleDark = useToggle(isDark)
function toggleDark() {
  useToggle(isDark).call(isDark)
  useConfigStore().setSidebarDark(isDark.value)
}
</script>

<template>
  <el-link :underline="false" @click="toggleDark()">
    <Icon v-if="isDark" name="i-twemoji-last-quarter-moon-face" />
    <Icon v-else name="i-twemoji-sun" />
  </el-link>
</template>
