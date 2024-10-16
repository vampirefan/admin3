<template>
  <div class="admin-container flex flex-col">
    <div v-if="$slots.header" class="container-header px-6 py-4 shadow-sm">
      <slot name="header" />
    </div>

    <ScrollPanel class="flex-1 overflow-hidden">
      <div class="p-6">
        <slot />
      </div>
    </ScrollPanel>

    <div v-if="$slots.footer" class="container-footer px-6 py-4">
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

.container-header :deep(.el-form-item) {
  margin-bottom: 0;
}

.container-footer {
  border-top: 1px solid var(--el-border-color);
}
</style>
