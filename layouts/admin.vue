<template>
  <div class="app-container">
    <AdminNavbar />
    <AdminSidebar />
    <section class="main-container">
      <el-scrollbar>
        <slot />
      </el-scrollbar>
    </section>
  </div>
</template>

<style scoped>
.main-container {
  overflow: hidden;
  width: calc(100vw - var(--admin-sidebar-width));
  position: fixed;
  z-index: 1001;
  top: var(--admin-navbar-height);
  left: var(--admin-sidebar-width);
  bottom: 0;
  overflow-y: auto;
}
</style>
