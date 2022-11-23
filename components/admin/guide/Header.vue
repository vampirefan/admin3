<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const router = useRouter()

function routerHome() {
  router.push({ path: '/' })
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="fixed z-20 top-0 left-0 right-0 box-border">
    <el-menu class="px-12" mode="horizontal" :ellipsis="false">
      <el-link class="mx-4 text-xl" :underline="false" type="success">
        Admin 3
      </el-link>
      <div class="flex-grow" />
      <el-menu-item index="2">
        指南
      </el-menu-item>
      <el-menu-item index="3">
        工具链
      </el-menu-item>
      <el-menu-item index="4">
        问题
      </el-menu-item>
      <el-link :underline="false" class="mx-4" @click="routerHome()">
        <i class="i-twemoji-house" />
      </el-link>
      <el-link :underline="false" class="mx-4" @click="toggleDark()">
        <i class="dark:i-twemoji-last-quarter-moon-face i-twemoji-sun" />
      </el-link>
    </el-menu>
  </header>
</template>

