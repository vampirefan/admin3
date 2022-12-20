<script setup lang="ts">
import { ElMessage } from 'element-plus'
definePageMeta({ layout: 'admin' })
const { copy } = useClipboard()
const iconCollections = ref<{ name: string; prefix: string }[]>([])
const iconCollectionSelected = ref('ep')
const iconSearch = ref('')
const iconList = ref<string[]>([])
const totalNum = ref(0)
const pageNum = ref(1)
const pageSize = ref(100)
const loading = ref(false)

function copyIconName(iconName: string) {
  copy(iconName).then(() => {
    ElMessage.success(`已复制：${iconName}`)
  })
}

const iconListShow = computed(() => {
  let result = []
  if (iconSearch.value)
    result = iconList.value.filter(item => item.includes(iconSearch.value))
  else result = iconList.value
  totalNum.value = result.length
  return result.map((name: string) => `${iconCollectionSelected.value}:${name}`)
    .slice((pageNum.value - 1) * pageSize.value, pageNum.value * pageSize.value)
})

async function getIconCollections() {
  loading.value = true
  const collections = await $fetch('https://api.iconify.design/collections', { method: 'get' })
  if (collections)
    iconCollections.value = Object.entries(collections).map((item) => { return { name: item[1].name, prefix: item[0] } })
  loading.value = false
}
async function getIconList() {
  loading.value = true
  const list: any = await $fetch(`https://api.iconify.design/collection?prefix=${iconCollectionSelected.value}`, { method: 'get' })
  if (list) {
    let allIcons: any[] = []
    if (list.uncategorized)
      allIcons = allIcons.concat(list.uncategorized)
    if (list.categories)
      allIcons = allIcons.concat(...Object.values(list.categories))
    totalNum.value = allIcons.length
    pageNum.value = 1
    iconList.value = allIcons
  }
  loading.value = false
}

await getIconCollections()
await getIconList()
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <template #header>
        <el-alert type="info" show-icon :closable="false">
          <span class="text-4">这里的在线图标是通过使用 Iconify 官方提供的 API ( https://api.iconify.design ) 获取图标集和名称后，利用 "@iconify/vue"
            组件实现的。只有连接了互联网才能用哦！</span>
        </el-alert>
        <div class="my-1">
          <el-row class="items-center font-500 inline">
            <span>选择 Iconify 在线图标集：</span>
            <el-select v-model="iconCollectionSelected" placeholder="选择图标集" filterable @change="getIconList">
              <el-option v-for="item in iconCollections" :key="item.prefix" :label="item.name" :value="item.prefix" />
            </el-select>
            <span class="pl-12">搜索图标：</span>
            <el-input v-model="iconSearch" class="inline" @input="pageNum = 1" />
          </el-row>
        </div>
      </template>
      <el-button-group v-loading="loading">
        <el-button v-for="iconName of iconListShow" :key="iconName" class="text-4xl h-20 p-8"
          @click="copyIconName(iconName)">
          <AdminIconOnline :name="iconName" />
        </el-button>
      </el-button-group>
      <template #footer>
        <el-pagination v-show="totalNum > 0" v-model:page-size="pageSize" v-model:current-page="pageNum"
          :total="totalNum" layout="total, sizes, prev, pager, next, jumper" :page-sizes="[20, 50, 100, 200]"
          class="float-right" />
      </template>
    </AdminContainer>
  </NuxtLayout>
</template>
