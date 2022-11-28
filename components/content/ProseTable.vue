<template>
  <div class="table-wrapper">
    <table>
      <slot />
    </table>
  </div>
</template>

<style  scoped>
.table-wrapper {
  margin: var(--prose-table-margin);
  max-width: 100%;
  overflow-x: auto
}

table {
  font-size: var(--prose-table-font-size);
  line-height: var(--prose-table-line-height);
  table-layout: auto;
  text-align: var(--prose-table-text-align);
  width: 100%
}
</style>
