<script setup lang="ts">
import { storeToRefs } from 'pinia'
const configStore = useConfigStore()
const { config } = storeToRefs(configStore)
</script>

<template>
  <div class="logo cursor-text" :underline="false" type="success">
    <img src="/image/admin3-logo.png" class="w-8">
    <h1 v-if="!config.sidebarCollapse" class="text-lg ml-2">
      Admin3 管理后台
    </h1>
  </div>
</template>

<style scoped>
.logo {
  z-index: 22;
  width: var(--admin-sidebar-width);
  height: var(--admin-navbar-height);
  color: var(--doc-text-accent);
  background-color: var(--admin-sidebar-bg-color);
  border-right: solid 1px var(--el-menu-border-color);
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
</style>
