<script setup lang="ts">
const drawerShow = ref(false)
const configStore = useConfigStore()
const sidebarDark = ref(configStore.config.sidebarDark)
configStore.$subscribe((mutation, state) => {
  sidebarDark.value = state.config.sidebarDark
})
</script>

<template>
  <div>
    <el-link :underline="false" @click="drawerShow = true">
      <Icon name="i-twemoji-hammer-and-wrench" />
    </el-link>
    <el-drawer v-model="drawerShow" :append-to-body="true" title="布局配置" direction="rtl" size="320">
      <el-form>
        <el-divider class="mt-0">
          全局主题
        </el-divider>
        <el-form-item label="全局深色">
          <CommonDarkToggle />
        </el-form-item>
        <el-form-item label="边栏深色">
          <el-switch v-model="sidebarDark" active-text="深色" inactive-text="浅色" inline-prompt class="mr-2"
            @change="configStore.setSidebarDark" />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
