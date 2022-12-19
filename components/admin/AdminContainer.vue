<template>
  <div class="admin-container flex flex-col">
    <div v-if="$slots.header" class="container-header px-6 py-2">
      <slot name="header" />
    </div>

    <el-scrollbar class="overflow-hidden flex-1">
      <div class="p-6">
        <slot />
      </div>
    </el-scrollbar>

    <div v-if="$slots.footer" class="container-footer px-6 py-2">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  height: calc(100vh - var(--admin-navbar-height) - var(--admin-tagbar-height));
}

.container-header {
  border-bottom: 1px solid var(--el-border-color);
}

.container-footer {
  border-top: 1px solid var(--el-border-color);
}
</style>
