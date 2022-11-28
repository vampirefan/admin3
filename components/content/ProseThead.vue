<template>
  <thead>
    <slot />
  </thead>
</template>

<style  scoped>
thead {
  border: var(--prose-thead-border);
  border-bottom: var(--prose-thead-border-bottom)
}

html.dark thead {
  border-color: var(--prose-thead-border-color-dark)
}
</style>
