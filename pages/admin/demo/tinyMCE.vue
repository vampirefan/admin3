<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
definePageMeta({ layout: 'admin' })
const initOptions = {
  language: 'zh-Hans',
  promotion: false,
  plugins: 'preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap emoticons', // quickbars
}
const contentValue = ref()
</script>

<template>
  <AdminContainer>
    <template #header>
      <el-alert type="info" show-icon :closable="false">
        <span class="text-4">直接使用 tinymce 官方的 vue 组件，下载了 self-host 包，并放在了 /public 文件夹下，这样组件不会因为使用官方 cdn
          而产生付费告警了。需要更多自定义包括 menubar 、 toolbar 可以参考官方 api ，在 init 属性中酌情添加即可。</span>
      </el-alert>
    </template>

    <ClientOnly>
      <Editor v-model="contentValue" tinymce-script-src="/js/tinymce/tinymce.min.js" :init="initOptions" />
    </ClientOnly>
    <el-card class="mt-2">
      <h3>ModelValue: </h3>
      {{ contentValue }}
    </el-card>
  </AdminContainer>
</template>
