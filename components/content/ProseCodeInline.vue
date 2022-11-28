<template>
  <code>
    <slot />
  </code>
</template>

<style scoped>
code {
  background-color: var(--prose-code-inline-background-color-light);
  border-radius: var(--prose-code-inline-border-radius);
  color: var(--prose-code-inline-color-light);
  font-size: var(--prose-code-inline-font-size);
  font-weight: var(--prose-code-inline-font-weight);
  padding: var(--prose-code-inline-padding);
  white-space: pre-wrap;
  word-break: break-all
}

html.dark code {
  background-color: var(--prose-code-inline-background-color-dark);
  color: var(--prose-code-inline-color-dark)
}

tbody code {
  font-size: var(--prose-tbody-code-inline-font-size)
}

h1 a code,
h2 a code,
h3 a code,
h4 a code,
h5 a code,
h6 a code {
  background-color: var(#f4f4f5);
  border-radius: .333333em;
  color: inherit;
  font-size: .777777em;
  padding: .15em .5em
}

html.dark h1 a code,
html.dark h2 a code,
html.dark h3 a code,
html.dark h4 a code,
html.dark h5 a code,
html.dark h6 a code {
  background-color: #27272a;
  color: #e4e4e7;
}
</style>
