<script setup lang="ts">
import Navbar from './admin/Navbar.vue'
import Sidebar from './admin/Sidebar.vue'
import Tagbar from './admin/Tagbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <Sidebar />
    <Tagbar />

    <section class="main">
      <slot />
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
