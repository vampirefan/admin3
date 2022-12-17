<script setup lang="ts">
import Navbar from './doc/Navbar.vue'
import Sidebar from './doc/Sidebar.vue'
import Toc from './doc/Toc.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <Sidebar />
    <Toc />
    <section class="content mx-10">
      <slot />
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
.content {
  padding-top: var(--doc-navbar-height);
  padding-left: var(--doc-sidebar-width);
  padding-right: var(--doc-sidebar-width);
  padding-bottom: 2rem;
  display: block;
}

.content :deep(a):hover {
  text-decoration: underline;
}

.content :deep(img) {
  max-width: 100%;
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(h5),
.content :deep(h6) {
  margin-top: calc(0.5rem - var(--doc-navbar-height));
  padding-top: calc(1rem + var(--doc-navbar-height));
  margin-bottom: 0;
}

.content :deep(h1):first-child,
.content :deep(h2):first-child,
.content :deep(h3):first-child,
.content :deep(h4):first-child,
.content :deep(h5):first-child,
.content :deep(h6):first-child {
  margin-bottom: 1rem
}

.content :deep(h1):first-child+p,
.content :deep(h1):first-child+pre,
.content :deep(h1):first-child+.custom-container,
.content :deep(h2):first-child+p,
.content :deep(h2):first-child+pre,
.content :deep(h2):first-child+.custom-container,
.content :deep(h3):first-child+p,
.content :deep(h3):first-child+pre,
.content :deep(h3):first-child+.custom-container,
.content :deep(h4):first-child+p,
.content :deep(h4):first-child+pre,
.content :deep(h4):first-child+.custom-container,
.content :deep(h5):first-child+p,
.content :deep(h5):first-child+pre,
.content :deep(h5):first-child+.custom-container,
.content :deep(h6):first-child+p,
.content :deep(h6):first-child+pre,
.content :deep(h6):first-child+.custom-container {
  margin-top: 2rem
}
</style>
