<template>
  <div class="table-wrapper">
    <table>
      <slot />
    </table>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  margin: 1rem 0;
  display: block;
  overflow-x: auto;
  transition: border-color var(--t-color)
}
</style>
