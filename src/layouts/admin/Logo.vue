<script setup lang="ts">
import { storeToRefs } from 'pinia'

const configStore = useConfigStore()
const { config } = storeToRefs(configStore)
</script>

<template>
  <div class="logo cursor-text" :underline="false" type="success">
    <img src="/image/logo/admin3.png" class="w-8">
    <span v-if="!config.sidebarCollapse" class="ml-2 truncate text-xl font-bold">
      {{ config.title }}
    </span>
  </div>
</template>

<style scoped>
.logo {
  z-index: 22;
  width: var(--admin-sidebar-width);
  height: var(--admin-navbar-height);
  color: var(--admin-sidebar-text-color);
  background-color: var(--admin-navbar-bg-color);
  transition: all var(--t-transform);
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
</style>
