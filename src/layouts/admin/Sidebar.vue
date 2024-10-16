<script setup lang="ts">
import Logo from './Logo.vue'
import SidebarMenus from './SidebarMenus.vue'
</script>

<template>
  <Logo />
  <div class="sidebar">
    <SidebarMenus />
  </div>
</template>

<style scoped>
.sidebar {
  overflow: hidden;
  width: var(--admin-sidebar-width);
  position: fixed;
  z-index: 21;
  top: var(--admin-navbar-height);
  left: 0;
  bottom: 0;
  overflow-y: auto;
  transition: all var(--t-transform);
  background-color: var(--admin-sidebar-bg-color);
  box-sizing: border-box;
}
</style>
