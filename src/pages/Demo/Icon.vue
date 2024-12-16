<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { ElMessage } from 'element-plus'
import { $fetch } from 'ofetch'

const iconifyProvider = useRuntimeConfig().public.iconifyProvider

const { copy } = useClipboard({ legacy: true })
const iconNameCopy = ref('')

const iconCollections = ref<{ name: string, prefix: string }[]>([])
const iconCollectionSelected = ref('ep')
const iconSearch = ref('')
const iconList = ref<string[]>([])
const iconListShow = ref<string[]>([])
const totalNum = ref(0)
const pageNum = ref(1)
const pageSize = ref(100)
const loading = ref(false)

function copyIconName(iconName: string) {
  iconNameCopy.value = `i-${iconName.replace(':', '-')}`
  copy(iconNameCopy.value).then(() => {
    ElMessage.success(`已复制：${iconNameCopy.value}`)
  })
}

watchEffect(() => {
  let result: string[] = []
  if (iconSearch.value)
    result = iconList.value.filter(item => item.includes(iconSearch.value))
  else
    result = iconList.value
  totalNum.value = result.length
  iconListShow.value = result.map((name: string) => `${iconCollectionSelected.value}:${name}`)
    .slice((pageNum.value - 1) * pageSize.value, pageNum.value * pageSize.value)
})

async function getIconCollections() {
  loading.value = true
  const collections = await $fetch(`${iconifyProvider}/collections`, { method: 'get' })
  if (collections)
    iconCollections.value = Object.entries(collections).map((item: any) => { return { name: item[1].name, prefix: item[0] } })
  loading.value = false
}
async function getIconList() {
  loading.value = true
  const list: any = await $fetch(`${iconifyProvider}/collection?prefix=${iconCollectionSelected.value}`, { method: 'get' })
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
onMounted(async () => {
  await getIconCollections()
  await getIconList()
})
</script>

<template>
  <AdminContainer>
    <template #header>
      <Message severity="secondary">
        <template #icon>
          <Icon name="i-carbon-information" class="mr2 text-2xl" />
        </template>
        <span>  这里的在线图标是通过使用 Iconify 官方提供的 API ( {{ iconifyProvider }} ) 获取图标集和名称后，利用 "@iconify/vue"
          组件实现的。项目中使用时请根据需要添加相应的 json 依赖，如："@iconify-json/carbon"(Carbon 图标), "@iconify-json/ep"(Element-Plus 图标),
          "@iconify-json/logos"(Logo 图标), "@iconify-json/twemoji"(Twitter Emoji 图标) 等。
        </span>
      </Message>

      <el-form class="mt" inline>
        <el-form-item label="选择 Iconify 在线图标集：" class="w[400px]">
          <el-select v-model="iconCollectionSelected" placeholder="选择图标集" filterable @change="getIconList">
            <el-option v-for="item in iconCollections" :key="item.prefix" :label="item.name" :value="item.prefix" />
          </el-select>
        </el-form-item>
        <el-form-item label="搜索图标：">
          <el-input v-model="iconSearch" @input="pageNum = 1" />
        </el-form-item>
        <el-form-item label="选中图标名称：">
          <span>{{ iconNameCopy || '/' }}</span>
        </el-form-item>
      </el-form>
    </template>
    <el-button-group v-loading="loading">
      <el-button
        v-for="iconName of iconListShow" :key="iconName" class="!h18"
        @click="copyIconName(iconName)"
      >
        <IconifyIcon :icon="iconName" class="m4 text-4xl" />
      </el-button>
    </el-button-group>
    <template #footer>
      <el-pagination
        v-show="totalNum > 0" v-model:page-size="pageSize" v-model:current-page="pageNum" :total="totalNum"
        layout="total, sizes, prev, pager, next, jumper" :page-sizes="[20, 50, 100, 200]" class="float-right"
      />
    </template>
  </AdminContainer>
</template>
