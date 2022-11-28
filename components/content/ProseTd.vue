<template>
  <td>
    <slot />
  </td>
</template>

<style scoped>
tbody td {
  padding: var(--prose-tbody-td-padding)
}

tbody td:first-child {
  padding-left: 0
}

tbody td:last-child {
  padding-right: 0
}
</style>
