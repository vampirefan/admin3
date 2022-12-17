<script setup lang="ts">
import { storeToRefs } from 'pinia'

const drawerShow = ref(false)
const configStore = useConfigStore()
const { config } = storeToRefs(configStore)
const transitionTypes = [
  { title: '滑行', label: 'slide' },
  { title: '淡入', label: 'fade' },
  { title: '模糊', label: 'blur' },
  { title: '缩放', label: 'scale' }]
</script>

<template>
  <div>
    <el-link :underline="false" @click="drawerShow = true">
      <AdminIcon name="i-twemoji-hammer-and-wrench" />
    </el-link>
    <el-drawer v-model="drawerShow" class="config-drawer" :append-to-body="true" direction="rtl" size="320">
      <template #header>
        <span>布局配置</span>
      </template>
      <el-form label-width="100" label-position="left" @submit.prevent>
        <el-form-item label="全局主题">
          <admin-dark-toggle />
        </el-form-item>
        <el-form-item label="边栏主题">
          <el-switch v-model="config.sidebarDark" active-text="深色" inactive-text="浅色" inline-prompt
            @change="configStore.setSidebarDark" />
        </el-form-item>
        <el-form-item label="边栏宽度">
          <el-input-number v-model="config.sidebarWidth" :min="0" :max="660" controls-position="right"
            @change="configStore.setSidebarWidth" />
        </el-form-item>
        <el-form-item label="顶栏面包屑">
          <el-switch v-model="config.navBreadcrumb" active-text="显示" inactive-text="隐藏" inline-prompt
            @change="configStore.setNavBreadcrumb" />
        </el-form-item>
        <el-form-item label="标签导航">
          <el-switch v-model="config.tagbar" active-text="显示" inactive-text="隐藏" inline-prompt
            @change="configStore.setTagbar" />
        </el-form-item>
        <el-form-item label="路由动画">
          <el-radio-group v-model="config.transitionType">
            <el-radio v-for="item in transitionTypes" :key="item.label" :label="item.label">
              {{ item.title }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <el-divider />
      <div class="w-full flex justify-center">
        <el-button type="danger" @click="configStore.resetConfig()">
          <AdminIcon name="i-ep-delete" class="pr-2" />
          清空缓存并重置
        </el-button>
      </div>
    </el-drawer>
  </div>
</template>

<style>
.config-drawer .el-drawer__header {
  margin-bottom: unset;
  padding-bottom: var(--el-drawer-padding-primary);
}

.config-drawer .el-drawer__body {
  border-top: 1px solid var(--el-border-color);
}
</style>
