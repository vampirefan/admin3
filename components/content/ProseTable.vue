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
  table-layout: auto;
  font-size: var(--prose-table-font-size);
  line-height: var(--prose-table-line-height);
  text-align: var(--prose-table-text-align);
  border-collapse: collapse;
  /* width: 100% */
}
</style>
