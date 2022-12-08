<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { getIconSet, getIcons } from '@/utils/iconSet'
definePageMeta({
  title: '图标',
  layout: 'admin',
})
const { copy } = useClipboard()
const iconSetOptions = ref<string[]>([])
const iconSet = ref('')
const iconList = ref<string[]>([])
const totalNum = ref(100)
const pageNum = ref(1)
const pageSize = ref(100)
const loading = ref(false)

async function getIconList() {
  loading.value = true
  if (!iconSet.value) {
    iconSetOptions.value = await getIconSet()
    iconSet.value = iconSetOptions.value[0]
  }
  getIcons(iconSet.value, pageNum.value, pageSize.value).then((res: any) => {
    totalNum.value = res.total
    iconList.value = res.data
    loading.value = false
  })
}
function copyIconName(iconName: string) {
  copy(iconName).then(() => {
    ElMessage.success(`已复制：${iconName}`)
  })
}

getIconList()

// const pageSize = ref(100)
// console.log(Object.keys(epIcons.icons))
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <template #header>
        图标集：<el-select v-model="iconSet" placeholder="选择图标集" @change="getIconList">
          <el-option v-for="item in iconSetOptions" :key="item" :label="item" :value="item" />
        </el-select>
      </template>
      <el-button-group v-loading="loading">
        <el-button v-for="iconName of iconList" :key="iconName" class="text-4xl p-8" @click="copyIconName(iconName)">
          <Icon :name="iconName" />
        </el-button>
      </el-button-group>
      <template #footer>
        <CommonPagination v-show="totalNum > 0" v-model:page="pageNum" v-model:limit="pageSize" class="float-right"
          :total="totalNum" @pagination="getIconList" />
      </template>
    </AdminContainer>
  </NuxtLayout>
</template>
