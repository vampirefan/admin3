<template>
  <div>
    <AdminNavbar />
    <AdminSidebar />
    <AdminTagbar />
    <section class="main">
      <el-scrollbar>
        <slot />
      </el-scrollbar>
    </section>
  </div>
</template>

<style scoped>
.main {
  overflow: hidden;
  overflow-y: auto;
  width: calc(100vw - var(--admin-sidebar-width));
  position: absolute;
  z-index: 1001;
  top: calc(var(--admin-navbar-height) + var(--admin-tagbar-height));
  left: var(--admin-sidebar-width);
  bottom: 0;
}
</style>
