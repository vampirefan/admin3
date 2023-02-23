<script setup lang="ts">
import CanvasNest from 'canvas-nest.js'

definePageMeta({ layout: 'admin' })
const configStore = useConfigStore()

const bgStyle = ref('mouseLight')

const mouseLight = ref<any>(null)
const { x: mouseX, y: mouseY } = useMouseInElement()
watchEffect(() => {
  const size = 1
  if (mouseLight.value) {
    mouseLight.value.style.top = `${mouseY.value - mouseLight.value.clientHeight / 2}px`
    mouseLight.value.style.left = `${mouseX.value - mouseLight.value.clientWidth / 2 - configStore.config.sidebarWidth}px`
    mouseLight.value.style.width = mouseLight.value.style.height = `${Math.max(Math.round(size * 100), 300)}px`
    mouseLight.value.style.filter = `blur(${Math.min(Math.max(size * 50, 100), 160)}px)`
    mouseLight.value.style.opacity = Math.min(Math.max(size / 4, 0.6), 1)
  }
})

const mainContainer = ref<any>(null)
const cn = ref()

function handleChangeBg() {
  if (bgStyle.value === 'nestLine' && mainContainer.value)
    cn.value = new CanvasNest(mainContainer.value.$el, { count: 399 })
  else
    cn.value.destroy()
}
</script>

<template>
  <AdminContainer ref="mainContainer">
    <div v-show="bgStyle === 'mouseLight'" ref="mouseLight"
      class="mouse-gradient absolute top-0 transition-opacity h-[100px] w-[100px]" />
    <el-radio-group v-model="bgStyle" class="mx-2" @change="handleChangeBg">
      <el-radio label="mouseLight">
        发光的鼠标
      </el-radio>
      <el-radio label="nestLine">
        聚合的线条
      </el-radio>
    </el-radio-group>
  </AdminContainer>
</template>

<style scoped>
.mouse-gradient {
  background: repeating-linear-gradient(to right, #00DC82 0%, #1DE0B1 50%, #36E4DA 100%);
  filter: blur(100px);
  opacity: 0.8
}
</style>
