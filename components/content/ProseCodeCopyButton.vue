<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  show: {
    type: Boolean,
    default: false,
  },
})

const { copy: copyToClipboard } = useClipboard()
const { prose } = useAppConfig()

const state = ref('init')

const copy = (e: MouseEvent) => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = 'copied'
      setTimeout(() => {
        state.value = 'init'
      }, 1000)
    })
    .catch(() => {
      console.warn('Couldn\'t copy to clipboard!')
    })
}
</script>

<template>
  <el-button text :class="[(show || state === 'copied') && 'show']" @click="copy">
    <span class="sr-only">Copy to clipboard</span>
    <span class="icon-wrapper">
      <Transition name="fade">
        <i v-if="state === 'copied'" :class="`icon ${prose.copyButton?.iconCopied}`" size="18" />
        <i v-else :class="`icon ${prose.copyButton?.iconCopy}`" size="18" />
      </Transition>
    </span>
  </el-button>
</template>

<style scoped>
button {
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border-radius: .375rem;
  margin: 8px;
  opacity: 0;
  padding: 8px;
  transform: scale(.8);
  transition: all .1s
}

button.show {
  opacity: 1;
  transform: scale(1)
}

button .icon-wrapper {
  display: block;
  height: 18px;
  position: relative;
  width: 18px
}

button .icon-wrapper .icon {
  display: block;
  position: absolute
}

button .icon-wrapper .fade-enter-active,
button .icon-wrapper .fade-leave-active {
  transition: opacity .2s
}

button .icon-wrapper .fade-enter-from,
button .icon-wrapper .fade-leave-to {
  opacity: 0
}
</style>
