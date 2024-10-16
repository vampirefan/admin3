<script setup lang="ts">
import pdf from 'pdfobject'
import { pdfFileUrlOptions } from '~/utils/docs'

const fileUrl = ref(pdfFileUrlOptions[0].value)
const pdfContainer = ref()
function loadPdf() {
  pdf.embed(fileUrl.value, pdfContainer.value, {
    pdfOpenParams: { view: 'FitV' },
  })
}

onMounted(async () => {
  loadPdf()
})
</script>

<template>
  <AdminContainer>
    <template #header>
      <span>文件地址:</span>
      <el-select v-model="fileUrl" class="m-2 w[500px]" @change="loadPdf">
        <el-option v-for="option in pdfFileUrlOptions" :key="option.value" :label="option.label" :value="option.value" />
      </el-select>
    </template>
    <div ref="pdfContainer" class="w[880px] h[700px]" />
  </AdminContainer>
</template>
