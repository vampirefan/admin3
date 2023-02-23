<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

definePageMeta({ layout: 'admin' })

const count = ref(0)
const max = ref(100)

const output = useTransition(count, {
  duration: 1000,
  transition: TransitionPresets.easeOutCubic,
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
    <el-alert type="info" show-icon :closable="false" class="mb-5 w-2/3">
      <p class="text-4">
        数字动画主要使用的是 VueUse 中的 useTransition() 方法，具体更多的示例可以参考官方文档。
      </p>
    </el-alert>
    <el-button type="success" plain class="inline mr-8" @click="handleToggle()">
      Toggle
    </el-button>
    <span class="mx-2">最大值：</span><el-input-number v-model="max" controls-position="right" />
    <h1 class="text-6xl">
      {{ Math.round(output) }}
    </h1>
    <div class="track number">
      <div class="relative">
        <div class="sled" :style="{ left: `${progress}%` }" />
      </div>
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
