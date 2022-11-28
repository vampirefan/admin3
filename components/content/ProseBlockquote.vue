<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style  scoped>
blockquote {
  border-left: var(--prose-blockquote-border-left);
  color: var(--prose-blockquote-color-light);
  margin: var(--prose-blockquote-margin);
  padding: var(--prose-blockquote-padding);
  quotes: var(--prose-blockquote-quotes);
}

html.dark blockquote {
  border-color: var(--prose-blockquote-border-color-dark);
  color: var(--prose-blockquote-color-dark)
}

blockquote p:first-of-type:before,
blockquote p:last-of-type:after {
  content: "''"
}
</style>
