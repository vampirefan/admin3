<script setup lang="ts">
import { ElMessage } from 'element-plus'
definePageMeta({
  title: '图标',
  layout: 'admin',
})
const { copy } = useClipboard()
const iconCollections = ref<{ name: string; prefix: string }[]>([])
const iconCollectionSelected = ref('ep')
const iconList = ref<string[]>([])
const totalNum = ref(100)
const pageNum = ref(1)
const pageSize = ref(100)
const loading = ref(false)

async function getIconCollections() {
  const collections = await $fetch('https://api.iconify.design/collections', { method: 'get' })
  if (collections)
    iconCollections.value = Object.entries(collections).map((item) => { return { name: item[1].name, prefix: item[0] } })
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
    iconList.value = allIcons
      .map((name: string) => `${iconCollectionSelected.value}:${name}`)
      .slice((pageNum.value - 1) * pageSize.value, pageNum.value * pageSize.value)
  }
  loading.value = false
}

function copyIconName(iconName: string) {
  copy(iconName).then(() => {
    ElMessage.success(`已复制：${iconName}`)
  })
}
await getIconCollections()
await getIconList()
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <template #header>
        <el-row class="py-2 items-center font-500">
          Iconify 在线图标集：
          <el-select v-model="iconCollectionSelected" placeholder="选择图标集" filterable @change="getIconList">
            <el-option v-for="item in iconCollections" :key="item.prefix" :label="item.name" :value="item.prefix" />
          </el-select>
        </el-row>
      </template>
      <el-button-group v-loading="loading">
        <el-button v-for="iconName of iconList" :key="iconName" class="text-4xl p-8" @click="copyIconName(iconName)">
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
