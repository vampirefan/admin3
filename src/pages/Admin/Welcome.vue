<script setup lang="ts">
import { VueUiBullet, type VueUiBulletDataset, VueUiHeatmap, type VueUiHeatmapConfig, type VueUiHeatmapDatasetItem } from 'vue-data-ui'
import 'vue-data-ui/style.css'

const configBullet = ref({
  style: {
    chart: {
      valueBar: { color: '#1d7318' },
      title: {
        text: 'Vue Data UI 示例 1',
        color: '#0c4a6e',
        subtitle: { text: 'Bullet' },
      },
    },
  },
})

const datasetBullet = ref<VueUiBulletDataset>({
  value: 80,
  target: 75,
  segments: [
    { name: 'Low', from: 0, to: 50, color: '#3178C6' },
    { name: 'Medium', from: 50, to: 70, color: '#cc9433' },
    { name: 'High', from: 70, to: 100, color: '#cde0cc' },
  ],
})

const configHeatmap = ref<VueUiHeatmapConfig>({
  style: {
    layout: {
      cells: { colors: { hot: '#1d7318', cold: '#cde0cc' } },
      dataLabels: {
        xAxis: {
          values: ['W0', 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14', 'W15', 'W16', 'W17', 'W18', 'W19', 'W20', 'W21', 'W22', 'W23'],
        },
      },
    },
    title: {
      text: 'Vue Data UI 示例 2',
      color: '#0c4a6e',
      textAlign: 'left',
      subtitle: { text: 'Heatmap Demo' },
    },
  },
})

function generateRandomValues(count: number) {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1)
}

const datasetHeatMap = ref<VueUiHeatmapDatasetItem[]>(
  ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => ({
    name: day,
    values: generateRandomValues(24), // 24小时的数据
  })),
)
</script>

<template>
  <AdminContainer>
    <div class="grid grid-cols-2 gap-8">
      <el-card shadow="never">
        <template #header>
          <Icon name="i-twemoji-books" class="mr text-xl" />
          <span class="font-bold">相关文档</span>
        </template>
        <div class="flex flex-row flex-wrap">
          <el-card
            v-for="item in docList" :key="item.url"
            class="m2 w[125px] cursor-pointer whitespace-nowrap text-center hover:transform hover:-translate-y-3"
            shadow="never" @click="openUrl(item.url)"
          >
            <Icon v-if="item.icon" :name="item.icon" class="text-xl" />
            <img v-else-if="item.image" class="h6 w6" :src="item.image">
            <p class="m-0">
              {{ item.label }}
            </p>
          </el-card>
        </div>
      </el-card>
      <el-card shadow="never">
        <template #header>
          <Icon name="i-twemoji-desktop-computer" class="mr text-xl" />
          <span class="font-bold">{{ showcase.label }}</span>
        </template>

        <div class="flex flex-row flex-wrap">
          <el-card
            v-for="item in showcase.list" :key="item.url"
            class="m-2 w[220px] cursor-pointer hover:transform hover:-translate-y-3" shadow="never"
            @click="openUrl(item.url)"
          >
            <div class="flex items-center justify-center">
              <Icon v-if="item.icon" :name="item.icon" class="h12 w12" />
              <img v-else-if="item.image" class="h12 w12" :src="item.image">
              <div class="ml font-800">
                {{ item.label }}
              </div>
            </div>
          </el-card>
        </div>
      </el-card>
      <div class="p8">
        <ClientOnly>
          <VueUiBullet :dataset="datasetBullet" :config="configBullet" />
        </ClientOnly>
      </div>
      <div class="p8">
        <ClientOnly>
          <VueUiHeatmap :dataset="datasetHeatMap" :config="configHeatmap" />
        </ClientOnly>
      </div>
    </div>
  </AdminContainer>
</template>

<style scoped>
:deep(.el-card__header) {
  background-image: linear-gradient(to right, var(--admin-navbar-bg-color), var(--admin-sidebar-bg-color));
  padding: 12px 15px;
  color: var(--admin-sidebar-text-color);
}
</style>
