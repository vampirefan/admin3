<script setup lang="ts">
import type { PropType } from 'vue'
import type { Lang } from 'shiki-es'

defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String as PropType<Lang>,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
})

const hovered = ref(false)
</script>

<template>
  <div :class="[`highlight-${language}`]" class="prose-code" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>

    <slot />

    <ProseCodeCopyButton :show="hovered" :content="code" class="copy-button" />
  </div>
</template>

<style  scoped>
.prose-code {
  background-color: var(--prose-code-block-background-color-light);
  border: 1px solid var(--prose-code-block-border-color-light);
  border-radius: .5rem;
  color: var(--prose-code-block-color-light);
  font-size: var(--prose-code-block-font-size);
  margin: var(--prose-code-block-margin);
  overflow: hidden;
  position: relative;
  width: 100%
}

html.dark .prose-code {
  background-color: var(--prose-code-block-background-color-dark);
  border-color: var(--prose-code-block-border-color-dark);
  color: var(--prose-code-block-color-dark)
}

.prose-code.highlight-bash :deep(code) .line,
.prose-code.highlight-sh :deep(code) .line,
.prose-code.highlight-shell :deep(code) .line,
.prose-code.highlight-shellscript :deep(code) .line,
.prose-code.highlight-zsh :deep(code) .line {
  padding-left: 1rem;
  position: relative
}

.prose-code.highlight-bash :deep(code) .line:before,
.prose-code.highlight-sh :deep(code) .line:before,
.prose-code.highlight-shell :deep(code) .line:before,
.prose-code.highlight-shellscript :deep(code) .line:before,
.prose-code.highlight-zsh :deep(code) .line:before {
  content: ">";
  display: block;
  font-weight: 700;
  left: -.1rem;
  position: absolute;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none
}

.copy-button {
  bottom: 0;
  position: absolute;
  right: 0
}

:deep(code) {
  display: flex;
  flex-direction: column
}

:deep(.line) {
  display: inline-table;
  min-height: 1rem
}

.filename {
  border-radius: .75rem;
  color: var(--prose-code-block-color-light);
  font-size: .75rem;
  line-height: 1.5;
  position: absolute;
  right: 1rem;
  top: .5rem
}

html.dark .filename {
  color: var(--prose-code-block-color-dark)
}

:deep(pre) {
  display: flex;
  flex: 1;
  line-height: 1.625;
  margin: 0;
  overflow-x: auto;
  padding: var(--prose-code-block-pre-padding)
}

:deep(.line.highlight) {
  background-color: var(--prose-code-block-border-color-light)
}
</style>
