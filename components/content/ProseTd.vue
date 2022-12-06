<template>
  <td>
    <slot />
  </td>
</template>

<style scoped>
td {
  padding: .6em 1em;
  border: 1px solid var(--doc-border-dark);
  transition: border-color var(--t-color)
}
</style>
