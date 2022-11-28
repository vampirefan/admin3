<template>
  <ul>
    <slot />
  </ul>
</template>

<style scoped>
ul {
  list-style-type: var(--prose-ul-list-style-type);
  margin: var(--prose-ul-margin)
}

ul>:deep(li)::marker {
  color: var(--prose-ul-li-marker-color-light)
}

html.dark ul>:deep(li)::marker {
  color: var(--prose-ul-li-marker-color-dark)
}
</style>
