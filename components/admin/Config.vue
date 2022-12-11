<script setup lang="ts">
const drawerShow = ref(false)
const configStore = useConfigStore()
const sidebarDark = ref(configStore.config.sidebarDark)
const sidebarWidth = ref(configStore.config.sidebarWidth)
configStore.$subscribe((mutation, state) => {
  sidebarDark.value = state.config.sidebarDark
  sidebarWidth.value = state.config.sidebarWidth
})
</script>

<template>
  <div>
    <el-link :underline="false" @click="drawerShow = true">
      <Icon name="i-twemoji-hammer-and-wrench" />
    </el-link>
    <el-drawer v-model="drawerShow" :append-to-body="true" title="布局配置" direction="rtl" size="320">
      <el-form @submit.prevent>
        <el-divider class="mt-0">
          全局主题
        </el-divider>
        <el-form-item label="全局主题">
          <CommonDarkToggle />
        </el-form-item>
        <el-form-item label="菜单主题">
          <el-switch v-model="sidebarDark" active-text="深色" inactive-text="浅色" inline-prompt class="mr-2"
            @change="configStore.setSidebarDark" />
        </el-form-item>
        <el-form-item label="菜单宽度">
          <el-input-number v-model="sidebarWidth" :min="0" :max="660" controls-position="right"
            @change="configStore.setSidebarWidth" />
        </el-form-item>
      </el-form>
      <el-divider />
      <div class="w-full flex justify-center">
        <el-button type="danger" @click="configStore.resetConfig()">
          <Icon name="i-ep-delete" class="pr-2" />
          清空缓存并重置
        </el-button>
      </div>
    </el-drawer>
  </div>
</template>
