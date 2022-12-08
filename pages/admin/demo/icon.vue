<script setup lang="ts">
import { ElMessage } from 'element-plus'
// import { getIconSet, getIcons } from '@/utils/iconSet'
import { icons as ep } from '@iconify-json/ep'
import { icons as carbon } from '@iconify-json/carbon'
import { icons as logos } from '@iconify-json/logos'
import { icons as twemoji } from '@iconify-json/twemoji'

definePageMeta({
  title: '图标',
  layout: 'admin',
})

const { copy } = useClipboard()
const iconSetOptions = ref<string[]>(['ep', 'carbon', 'logos', 'twemoji'])
const iconSetData: any = { ep: ep.icons, carbon: carbon.icons, logos: logos.icons, twemoji: twemoji.icons }
const iconSet = ref('ep')
const iconList = ref<string[]>([])
const totalNum = ref(100)
const pageNum = ref(1)
const pageSize = ref(100)
const loading = ref(false)

async function getIconList() {
  const list = Object.keys(iconSetData[iconSet.value]).map((name: string) => `${iconSet.value}:${name}`)
  totalNum.value = list.length
  iconList.value = list.slice((pageNum.value - 1) * pageSize.value, pageNum.value * pageSize.value)
}
function copyIconName(iconName: string) {
  copy(iconName).then(() => {
    ElMessage.success(`已复制：${iconName}`)
  })
}

getIconList()
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <template #header>
        Iconify 在线图标集：<el-select v-model="iconSet" placeholder="选择图标集" @change="getIconList">
          <el-option v-for="item in iconSetOptions" :key="item" :label="item" :value="item" />
        </el-select>
      </template>
      <el-button-group v-loading="loading">
        <el-button v-for="iconName of iconList" :key="iconName" class="text-4xl p-8" @click="copyIconName(iconName)">
          <!-- <Icon :name="iconName" /> -->
          <IconifyOnline :name="iconName" />
        </el-button>
      </el-button-group>
      <template #footer>
        <CommonPagination v-show="totalNum > 0" v-model:page="pageNum" v-model:limit="pageSize" class="float-right"
          :total="totalNum" @pagination="getIconList" />
      </template>
    </AdminContainer>
  </NuxtLayout>
</template>
