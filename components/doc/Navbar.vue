<script setup lang="ts">
const route = useRoute()

const isOpen = ref(false)

function isActive(link: any) {
  // Workaround for /docs
  return link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link.path || link._path)
}
</script>

<template>
  <el-affix class="fixed top-0 left-0 z-40 w-full">
    <el-menu class=" navbar px-12" mode="horizontal" :ellipsis="false">
      <el-link class="mx-4 text-xl" :underline="false" type="success">
        <img src="/admin3-logo.png" alt="Admin3" height="30" class="mr-2">
        Admin 3
      </el-link>
      <div class="flex-grow" />
      <el-menu-item index="2">
        使用指南
      </el-menu-item>
      <el-menu-item index="3">
        工具链
      </el-menu-item>
      <el-menu-item index="4">
        问题
      </el-menu-item>
      <BaseHomeLink class="ml-4" />
      <BaseDarkToggle class="ml-4" />
    </el-menu>
  </el-affix>
</template>

<style scoped>
.navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  box-sizing: border-box;
  border-bottom: 1px solid var(--c-border);
  background-color: var(--c-bg-navbar);
  transition: background-color var(--t-color), border-color var(--t-color);
}
</style>
