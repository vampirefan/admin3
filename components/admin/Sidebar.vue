<script setup lang="ts">
const route = useRoute()
const isCollapse = ref(false)
const permissionStore = usePermissionStore()
const menus = permissionStore.routes
</script>

<template>
  <!-- <ClientOnly> -->
  <AdminNavLogo />
  <div class="sidebar">
    <el-scrollbar>
      <el-menu class="sidebar-menu" router unique-opened mode="vertical" :collapse="isCollapse"
        :default-active="route.path">
        <AdminSidebarItem v-for="(route, index) in menus" :key="route.path + index" :item="route"
          :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
  <!-- </ClientOnly> -->
</template>

<style scoped>
.sidebar {
  overflow: hidden;
  width: var(--admin-sidebar-width);
  position: fixed;
  z-index: 1001;
  top: var(--admin-navbar-height);
  left: 0;
  bottom: 0;
  overflow-y: auto;
}

.sidebar-menu {
  min-height: calc(100vh - var(--admin-navbar-height));
  background-color: var(--admin-sidebar-bg-color);
}

.sidebar-menu :deep(.el-menu),
.sidebar-menu :deep(.el-sub-menu__title) {
  background-color: var(--admin-sidebar-bg-color);
}

.sidebar-menu :deep(.el-menu-item).is-active {
  background-color: var(--admin-sidebar-hover-bg-color);
}

.sidebar-menu :deep(.el-menu-item):not(.is-active),
.sidebar-menu :deep(.el-sub-menu__title):not(.is-active) {
  color: var(--admin-sidebar-text-color);
}

.sidebar-menu :deep(.el-menu-item):hover {
  background-color: var(--admin-sidebar-hover-bg-color);
}
</style>
