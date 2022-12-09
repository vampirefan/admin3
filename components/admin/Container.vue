<script setup lang="ts">
const props = defineProps({
  /* 容器样式: full(default), card */
  type: {
    type: String,
    required: false,
    default: 'full',
  },
})
</script>

<template>
  <div class="container-main flex flex-col">
    <div v-if="$slots.header" class="container-header px-6 py-2">
      <slot name="header" />
    </div>
    <el-scrollbar class="overflow-hidden flex-1">
      <!-- type='card'  -->
      <div v-if="type === 'card'" class="card p-6">
        <slot />
      </div>
      <!-- type='full'  -->
      <div v-else class="p-6">
        <slot />
      </div>
    </el-scrollbar>

    <div v-if="$slots.footer" class="container-footer px-6 py-2">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.container-main {
  height: calc(100vh - var(--admin-navbar-height));
}

.card {
  margin: 1.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--el-border-color);
}

.container-header {
  border-bottom: 1px solid var(--el-border-color);
}

.container-footer {
  border-top: 1px solid var(--el-border-color);
}
</style>
