<script setup lang="ts">
const done = [
  '使用 content 模块渲染 markdown 文档。',
  '集成 element-plus, unocss, pinia 等基本模块。',
  'logo',
  '图标集成: svg、iconify',
  'docker, netlify 部署演示',
  '登陆/登出，用户信息存入 localstorage/cookie',
  '后台布局',
  'sidebar, navbar',
  '路由',
  '顶栏面包屑',
  '布局组件: 固定 header、footer, content auto scroll',
  '侧边栏折叠',
  'iconify 在线图标演示、elementplus 演示',
  '页面缓存, tagsView',
  '页面切换动画',
  '富文本编辑',
  'pdf在线预览',
  '布局切换',
  '后端mock',
]

const todo = [
  '各种演示demo: icon、表单、树状选择、系统管理',
  '权限管理',
  '全局搜索',
  '集成 E-chart',
  '优化和封装 table',
  '文件上传',
  '水印',
  '二维码、条形码',
  '虚拟列表',
  '引导页面',
  '在线表格',
]
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

      <el-card shadow="never">
        <template #header>
          <Icon name="i-twemoji-check-mark-button" class="mr text-xl" />
          <span class="font-bold">开发进度</span>
        </template>
        <ul>
          <li v-for="item in done" :key="item" class="mb-3 flex items-center">
            <Icon name="i-carbon-checkmark-outline" class="mr-2 w-5 flex-shrink-0 color-green-500" />{{ item
            }}
          </li>
        </ul>
      </el-card>
      <el-card shadow="never">
        <template #header>
          <Icon name="i-twemoji-information" class="mr text-xl" />
          <span class="font-bold">待完成</span>
        </template>
        <ul>
          <li v-for="item in todo" :key="item" class="mb-3 flex items-center">
            <Icon name="i-carbon-information" class="mr-2 w-5 flex-shrink-0 color-blue-500" />{{ item }}
          </li>
        </ul>
      </el-card>
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
