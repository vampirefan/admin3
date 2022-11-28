<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
  /**
   * `true` if `href` points to a static file
   */
  static: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <NuxtLink :to="href" :blank="blank" :static="static">
    <slot />
  </NuxtLink>
</template>

<style scoped>
a {
  color: var(--prose-a-color-light-default);
  font-weight: var(--prose-a-font-weight);
  border-bottom: var(--prose-a-border-bottom);
  border-style: var(--prose-a-border-style-default);
  padding-bottom: var(--prose-a-border-distance);
  text-decoration: var(--prose-a-text-decoration);
}

a:hover {
  color: var(--prose-a-color-light-hover);
  border-color: var(--prose-a-border-color-light-hover);
  border-style: var(--prose-a-border-style-hover);
}

html.dark a {
  border-color: var(--prose-a-border-color-dark-default);
  color: var(--prose-a-color-dark-default)
}

html.dark a:hover {
  border-color: var(--prose-a-border-color-dark-hover);
  color: var(--prose-a-color-dark-hover)
}

a:has(code) {
  border-bottom: var(--prose-a-has-code-border-bottom)
}

a:has(code) :deep(code) {
  border: var(--prose-a-code-border)
}

a:has(code) :deep(code):hover {
  text-decoration: none;
  background: var(--prose-a-code-background-light-hover);
  border-color: var(--prose-a-code-border-color-light-hover);
  color: var(--prose-a-code-color-light-hover)
}

html.dark a:has(code) :deep(code) {
  border-color: var(--prose-a-code-border-color-dark-default)
}

html.dark a:has(code) :deep(code):hover {
  background: var(--prose-a-code-background-dark-hover);
  border-color: var(--prose-a-code-border-color-dark-hover);
  color: var(--prose-a-code-color-dark-hover)
}
</style>
