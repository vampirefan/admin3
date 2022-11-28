<template>
  <tr>
    <slot />
  </tr>
</template>

<style scoped>
tbody tr {
  border-bottom: var(--prose-tbody-tr-border-bottom)
}

html.dark tbody tr {
  border-color: var(--prose-tbody-tr-border-color-dark)
}
</style>
