<template>
  <p>
    <slot />
  </p>
</template>

<style  scoped>
p {
  font-size: var(--prose-p-font-size);
  line-height: var(--prose-p-line-height);
  margin: var(--prose-p-margin)
}

p :deep(br) {
  content: "";
  display: block;
  margin: var(--prose-p-br-margin)
}
</style>
