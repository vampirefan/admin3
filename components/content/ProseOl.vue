<template>
  <ol>
    <slot />
  </ol>
</template>

<style  scoped>
ol {
  list-style-type: var(--prose-ol-list-style-type);
  margin: var(--prose-ol-margin)
}

ol>li::marker {
  color: var(--prose-ol-li-marker-color-light)
}

html.dark ol>li::marker {
  color: var(--prose-ol-li-marker-color-dark)
}
</style>
