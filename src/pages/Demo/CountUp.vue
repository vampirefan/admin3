<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

const count = ref(0)
const max = ref(100)

const output = useTransition(count, {
  duration: 1000,
  transition: TransitionPresets.linear,
})
const progress = computed(() => {
  return Math.round(100 * output.value / max.value)
})
function handleToggle() {
  count.value = count.value > 0 ? 0 : max.value
}

useTimeoutFn(() => {
  count.value = max.value
}, 500)
</script>

<template>
  <AdminContainer>
    <Message severity="secondary">
      <template #icon>
        <Icon name="i-carbon-information" />
      </template>
      数字动画主要使用的是 VueUse 中的 useTransition() 方法，具体更多的示例可以 VueUse 的参考官方文档。
    </Message>
    <div class="mt">
      <el-button type="success" plain class="mr-8 inline" @click="handleToggle()">
        Toggle
      </el-button>
      <span class="mx-2">最大值：</span><el-input-number v-model="max" controls-position="right" />
      <h1 class="text-6xl">
        {{ Math.round(output) }}
      </h1>
      <ProgressBar
        :value="progress" class="w[600px]"
        :pt:root:style="{ '--p-progressbar-label-font-size': '1.2rem', 'height': '40px' }"
      />
    </div>
  </AdminContainer>
</template>

<style scoped>
.track {
  background: rgba(125, 125, 125, 0.3);
  border-radius: 1rem;
  width: 60%;
}

.sled {
  background: var(--doc-brand);
  border-radius: 50%;
  height: 2rem;
  position: absolute;
  width: 2rem;
}

.track.number {
  height: 2rem;
  margin: 0.5rem 0;
  padding-right: 2rem;
}
</style>
