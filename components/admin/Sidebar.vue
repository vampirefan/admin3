<script setup lang="ts">
const route = useRoute()
const isCollapse = ref(false)
const permissionStore = usePermissionStore()
const menus = permissionStore.routes
</script>

<template>
  <ClientOnly>
    <div class="sidebar">
      <el-scrollbar>
        <el-menu router unique-opened mode="vertical" :collapse="isCollapse" :default-active="route.path">
          <AdminSidebarItem v-for="(route, index) in menus" :key="route.path + index" :item="route"
            :base-path="route.path" />
        </el-menu>
      </el-scrollbar>
    </div>
  </ClientOnly>
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

.el-menu {
  min-height: calc(100vh - var(--admin-navbar-height));
}
</style>
