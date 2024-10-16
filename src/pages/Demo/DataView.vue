<script setup lang="ts">
import dayjs from 'dayjs'

const screen = ref(null)

const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(screen)
const currentDateTime = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))

useIntervalFn(() => {
  currentDateTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}, 1000)
</script>

<template>
  <div id="screen" ref="screen" class="grid grid-rows-[auto_3fr_2fr]">
    <!-- 顶部行 -->
    <div class="screen-header">
      <span class="w[250px]">{{ currentDateTime }}</span>
      <h1 class="text-2xl font-bold">
        数据大屏展示
      </h1>
      <div class="w[250px]">
        <el-tooltip :content="isFullscreen ? '退出全屏' : '进入全屏'">
          <el-button class="fullscreen-btn" @click="toggleFullscreen">
            <Icon :name="isFullscreen ? 'i-carbon-minimize' : 'i-carbon-maximize'" />
          </el-button>
        </el-tooltip>
      </div>
    </div>

    <!-- 中间行 (60% 高度) -->
    <div class="grid grid-cols-4 m4 mb2 gap-4">
      <div class="data-card">
        <StatisticNumber class="m4" title="数字展示" unit="（个）" number="0012" />
      </div>
      <div class="data-card col-span-2">
        模块 2
      </div>
      <div class="data-card">
        模块 3
      </div>
    </div>

    <!-- 底部行 (40% 高度) -->
    <div class="grid grid-cols-4 m4 mt2 gap-4">
      <div class="data-card col-span-1">
        模块 4
      </div>
      <div class="data-card col-span-3">
        模块 5
      </div>
    </div>
  </div>
</template>

<style scoped>
#screen {
  background-image: url(/image/datav/bg.png);
  height: 100%;
  width: 100%;
  background-size: cover;
  --un-text-opacity: 1;
  color: rgb(255 255 255 / var(--un-text-opacity));
}

.screen-header {
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.fullscreen-btn {
  float: right;
  height: 40px;
  width: 40px;
  border: none;
  --un-bg-opacity: 0.2;
  background-color: rgb(156 163 175 / var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgb(255 255 255 / var(--un-text-opacity));
}

.fullscreen-btn:hover {
  --un-bg-opacity: 0.3;
  background-color: rgb(156 163 175 / var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgb(255 255 255 / var(--un-text-opacity));
}

.data-card {
  border-radius: 0.25rem;
  --un-bg-opacity: 0.3;
  background-color: rgb(55 65 81 / var(--un-bg-opacity));
  padding: 1rem;
}
</style>
