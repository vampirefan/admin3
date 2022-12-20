<script setup lang="ts">
import pdf from 'pdfobject'
definePageMeta({ layout: 'admin' })
const fileUrlOptions = [{
  label: '本地 /static/Nuxtjs-Cheat-Sheet.pdf',
  value: '/static/Nuxtjs-Cheat-Sheet.pdf',
}, {
  label: '在线 https://education.github.com/git-cheat-sheet-education.pdf',
  value: 'https://education.github.com/git-cheat-sheet-education.pdf',
}]
const fileUrl = ref(fileUrlOptions[0].value)

function loadPdf() {
  pdf.embed(fileUrl.value, '#pdfContainer', {
    pdfOpenParams: { view: 'FitV' },
  })
}

onMounted(() => {
  loadPdf()
})
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <template #header>
        <span>文件地址:</span>
        <el-select v-model="fileUrl" class="m-2 w[500px]" @change="loadPdf">
          <el-option v-for="option in fileUrlOptions" :key="option.value" :label="option.label" :value="option.value" />
        </el-select>
      </template>
      <div id="pdfContainer" class="w[880px] h[700px]" />
    </AdminContainer>
  </NuxtLayout>
</template>
