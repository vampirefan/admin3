<template>
  <aside class="sidebar">
    <div class="pl-15">
      <p v-for="index in 50" :key="index">
        <el-link> title {{ index }} </el-link>
      </p>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  font-size: 16px;
  width: var(--sidebar-width);
  position: fixed;
  z-index: 10;
  margin: 0;
  top: var(--navbar-height);
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid var(--c-border);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--c-brand) var(--c-border);
  background-color: var(--c-bg-sidebar);
  transition: transform var(--t-transform), background-color var(--t-color),
    border-color var(--t-color);
}

.sidebar::-webkit-scrollbar {
  width: 7px;
}

.sidebar::-webkit-scrollbar-track {
  background-color: var(--c-border);
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: var(--c-brand);
}
</style>
