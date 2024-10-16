<script setup lang="ts">
import Navbar from './admin/Navbar.vue'
import Sidebar from './admin/Sidebar.vue'
import Tagbar from './admin/Tagbar.vue'

// 检测窗口宽度，如果小于768px，设置侧边栏隐藏
const configStore = useConfigStore()
const { width } = useWindowSize()
watch(width, (newWidth) => {
  if (newWidth < 768)
    useCssVar('--admin-sidebar-width').value = `${0}px`
  else
    useCssVar('--admin-sidebar-width').value = `${configStore.config.sidebarWidth}px`
})
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
  transition: all var(--t-transform);
}
</style>
