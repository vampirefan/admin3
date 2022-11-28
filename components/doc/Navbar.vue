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
    <el-menu
      class="px-12 border-t border-transparent backdrop-blur-md bg-white/70 dark:bg-black/70 shadow shadow-gray-200 dark:shadow-gray-900"
      mode="horizontal" :ellipsis="false">
      <el-link class="mx-4 text-xl" :underline="false" type="success">
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

</style>
