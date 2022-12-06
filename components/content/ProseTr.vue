<template>
  <tr>
    <slot />
  </tr>
</template>

<style scoped>
tr {
  border-top: 1px solid var(--doc-border-dark);
  transition: border-color var(--t-color)
}
</style>
