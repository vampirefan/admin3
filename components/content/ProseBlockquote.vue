<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style scoped>
blockquote {
  font-size: 1rem;
  color: var(--doc-text-quote);
  border-left: 0.2rem solid var(--doc-border-dark);
  margin: 1rem 0;
  padding: 0.25rem 0 0.25rem 1rem;
}

blockquote>p {
  margin: 0;
}
</style>
