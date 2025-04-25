<script setup lang="ts">
import type { VueUiCarouselTableConfig, VueUiCarouselTableDataset, VueUiDonutConfig, VueUiDonutDatasetItem, VueUiDumbbellConfig, VueUiDumbbellDataset, VueUiXyConfig, VueUiXyDatasetItem } from 'vue-data-ui'
import dayjs from 'dayjs'
import { VueUiCarouselTable, VueUiDonut, VueUiDumbbell } from 'vue-data-ui'

const screen = ref(null)

const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(screen)
const currentDateTime = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))

useIntervalFn(() => {
  currentDateTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}, 1000)

const configXy: VueUiXyConfig = {
  showTable: false,
  chart: {
    userOptions: { show: false },
    padding: { bottom: 0 },
    backgroundColor: 'transparent',
    legend: { color: 'white' },
    grid: { labels: { color: 'white', xAxisLabels: { show: false } } },
  },
}
const datasetXy: VueUiXyDatasetItem[] = [
  {
    name: '数据1',
    series: Array.from({ length: 50 }, () => (Math.random() * 100)),
    type: 'bar',
  },
  {
    name: '数据2',
    series: Array.from({ length: 50 }, () => (Math.random() * -100)),
    type: 'line',
    color: 'rgb(66,211,146)',

    dataLabels: false,
    useArea: true,
    scaleSteps: 10,
  },
  {
    name: '数据3',
    series: Array.from({ length: 50 }, (_, i) => (-50 + 10 * Math.E ** (i / 18))),
    type: 'line',
    useProgression: true,
  },
]

const configTable: VueUiCarouselTableConfig | any = {
  showTable: false,
  responsiveBreakpoint: 200,
  style: { backgroundColor: 'transparent' },
  userOptions: { show: false },
  thead: { tr: { height: 50, style: { color: 'white', backgroundColor: 'transparent' } } },
  tbody: {
    backgroundColor: 'transparent',
    tr: {
      visible: 8,
      height: 40,
      style: { color: 'white', backgroundColor: 'transparent' },
      td: { alternateColor: true, alternateOpacity: 0.1, style: { backgroundColor: '#000A2A' } },
    },

  },
  scrollbar: { hide: true },
}
const datasetTable: VueUiCarouselTableDataset = {
  head: ['字段1', '字段2', '字段3'],
  body: Array.from({ length: 20 }, (_, i) => [String(i + 1), `${String(i + 1)}-1`, `${String(i + 1)}-2`]),
}

const configDonut: VueUiDonutConfig = {
  userOptions: { show: false },
  table: { show: false },
  style: { chart: {
    color: 'white',
    backgroundColor: 'transparent',
    legend: { show: false },
    layout: {
      labels: {
        name: { color: 'white' },
        percentage: { color: 'white' },
        hollow: { total: { color: 'white', value: { color: 'white' } }, average: { show: false } },
      },
    },
  } },
}
const datasetDonut: VueUiDonutDatasetItem[] = [
  { name: '数据1', values: [100] },
  { name: '数据2', values: [200] },
  { name: '数据3', values: [300, 1] },
]

const configDumbbell: VueUiDumbbellConfig = {
  userOptions: { show: false },
  table: { show: false },
  style: {
    chart: {
      backgroundColor: 'transparent',
      labels: { xAxisLabels: { color: '#cccccc', fontSize: 10 }, yAxisLabels: { color: '#cccccc', fontSize: 10 } },
      legend: { backgroundColor: 'transparent', color: '#cccccc', labelStart: '2014', labelEnd: '2024' },
    },
  },
}
const datasetDumbbell: VueUiDumbbellDataset[] = [
  { name: '数据1', start: 5000, end: 9100 },
  { name: '数据2', start: 3000, end: 4200 },
  { name: '数据3', start: 1000, end: 2000 },
]
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
        <StatisticNumber class="m4" title="数字展示1" unit="（个）" number="0003" />
        <StatisticNumber class="m4" title="数字展示2" unit="（个）" number="2025" />
        <StatisticNumber class="m4" title="数字展示3" unit="（个）" number="2077" />
      </div>
      <div class="data-card col-span-2">
        <ClientOnly>
          <VueUiXy :dataset="datasetXy" :config="configXy" />
        </ClientOnly>
      </div>
      <div class="data-card">
        <ClientOnly>
          <VueUiCarouselTable :dataset="datasetTable" :config="configTable" />
        </ClientOnly>
      </div>
    </div>

    <!-- 底部行 (40% 高度) -->
    <div class="grid grid-cols-4 m4 mt2 gap-4">
      <div class="data-card col-span-1">
        <ClientOnly>
          <VueUiDonut :dataset="datasetDonut" :config="configDonut" />
        </ClientOnly>
      </div>
      <div class="data-card col-span-3">
        <ClientOnly>
          <VueUiDumbbell :dataset="datasetDumbbell" :config="configDumbbell" />
        </ClientOnly>
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
