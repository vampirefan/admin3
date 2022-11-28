<template>
  <th>
    <slot />
  </th>
</template>

<style  scoped>
th {
  color: var(--prose-th-color-light);
  font-weight: var(--prose-th-font-weight);
  padding: var(--prose-th-padding)
}

th:first-child {
  padding-left: 0
}

th:last-child {
  padding-right: 0
}

html.dark th {
  color: var(--prose-th-color-dark)
}
</style>
