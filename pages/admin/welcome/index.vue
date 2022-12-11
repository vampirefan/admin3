<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
const done = [
  '使用 content 模块渲染 markdown 文档。',
  '暗黑主题',
  '集成 element-plus, unocss, pinia 等基本模块。',
  'logo',
  '图标集成: svg、iconify',
  'docker, netlify 部署演示',
  '登陆/登出，用户信息存入 localstorage/cookie。',
  '后台布局',
  'sidebar, navbar',
  '路由',
  '顶栏面包屑',
  '布局组件: 固定 header、footer, content auto scroll',
  '侧边栏折叠',
  'iconify 在线图标演示、elementplus 演示',
]

const todo = [
  '页面缓存, tagsView',
  '各种演示demo: icon、表单、树状选择、系统管理',
  '布局切换',
  '页面切换动画',
  '权限管理',
  '主题、颜色切换',
  '全局搜索',
  '后端mock',
  '集成 E-chart',
  '优化和封装 table',
  '富文本编辑',
  '文件上传',
  'pdf在线预览',
  '水印',
  '二维码、条形码',
  '虚拟列表',
  '引导页面',
  '在线表格',
  '文档',
]
const devNoteContent = ref<any>({
  _source: 'content',
  _type: 'markdown',
  body: {
    type: 'root',
    children: [],
  },
})
queryContent('doc').where({ title: '开发日志' }).findOne().then((data) => {
  devNoteContent.value = data
})
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <template #header>
              <span>开发进度</span>
            </template>
            <ul>
              <li v-for="item in done" :key="item" class="mb-3 flex items-center">
                <Icon name="i-carbon-checkmark-outline" class="w-5 mr-2 flex-shrink-0 color-green-500" />{{ item }}
              </li>
            </ul>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <template #header>
              待完成
            </template>
            <ul>
              <li v-for="item in todo" :key="item" class="mb-3 flex items-center">
                <Icon name="i-carbon-information" class="w-5 mr-2 flex-shrink-0 color-blue-500" />{{ item }}
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="mt-8">
        <el-col :span="24">
          <el-card class="p-24">
            <ContentRendererMarkdown :value="devNoteContent" />
          </el-card>
        </el-col>
      </el-row>
    </AdminContainer>
  </NuxtLayout>
</template>
