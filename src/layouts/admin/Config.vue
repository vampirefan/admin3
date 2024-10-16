<script setup lang="ts">
import { primeVuePresetOptions } from '@/utils/primevue'
import { storeToRefs } from 'pinia'

const drawerShow = ref(false)
const configStore = useConfigStore()
const { config } = storeToRefs(configStore)
const transitionOptions = [
  { title: '滑行', label: 'slide' },
  { title: '淡入', label: 'fade' },
  { title: '模糊', label: 'blur' },
  { title: '缩放', label: 'scale' },
]

const layoutOptions = [
  { title: '经典单栏', label: 'default' },
  { title: '混合双栏', label: 'mix' },
]
</script>

<template>
  <div>
    <el-link :underline="false" @click="drawerShow = true">
      <Icon name="i-twemoji-hammer-and-wrench" class="text-xl" />
    </el-link>
    <Drawer v-model:visible="drawerShow" position="right" class="!w-full lg:!w[30rem] md:!w[20rem]">
      <template #header>
        <span class="font-bold">布局配置</span>
      </template>
      <FloatLabel variant="on" class="mt2">
        <InputText
          id="title" v-model="config.title" class="w-full"
          @update:model-value="configStore.setTitle"
        />
        <label for="title">后台标题</label>
      </FloatLabel>
      <FloatLabel variant="on" class="mt">
        <InputNumber
          id="sidebarWidth" v-model="config.sidebarWidth" mode="decimal" show-buttons :min="0" class="w-full"
          @update:model-value="configStore.setSidebarWidth"
        />
        <label for="sidebarWidth">边栏宽度</label>
      </FloatLabel>
      <el-form class="mt" label-width="100" label-position="left" label-suffix="：" @submit.prevent>
        <el-form-item label="布局样式">
          <SelectButton
            v-model="config.layout" :options="layoutOptions" option-label="title" option-value="label"
            aria-labelledby="basic"
          />
        </el-form-item>
        <el-form-item label="主题样式">
          <SelectButton
            v-model="config.primePreset"
            :options="primeVuePresetOptions" option-label="label" option-value="value" :allow-empty="false"
            @update:model-value="configStore.setPrimePreset"
          />
        </el-form-item>
        <el-form-item label="主题配色">
          <div class="pt2">
            <button
              v-for="primaryColor of primaryColors"
              :key="primaryColor.name"
              v-tooltip.top="primaryColor.name" type="button"
              class="color-button mr"
              :class="{ 'active-color': config.primaryColor === primaryColor.name }"
              :style="{ backgroundColor: `${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette['500']}` }"
              @click="configStore.setPrimaryColor(primaryColor.name)"
            />
          </div>
        </el-form-item>
        <el-form-item label="背景配色">
          <div class="pt2">
            <button
              v-for="surfaceColor of primeVueSurfaceOptions"
              :key="surfaceColor.name"
              v-tooltip.top="surfaceColor.name" type="button"
              class="color-button mr"
              :class="{ 'active-color': config.surfaceColor ? config.surfaceColor === surfaceColor.name : surfaceColor.name === 'slate' }"
              :style="{ backgroundColor: `${surfaceColor.palette['400']}` }"
              @click="configStore.setSurfaceColor(surfaceColor.name)"
            />
          </div>
        </el-form-item>
        <el-form-item label="顶栏面包屑">
          <ToggleSwitch v-model="config.navBreadcrumb">
            <template #handle="{ checked }">
              <Icon :name="checked ? 'i-ep-check' : 'i-ep-close'" />
            </template>
          </ToggleSwitch>
        </el-form-item>
        <el-form-item label="标签导航">
          <ToggleSwitch
            v-model="config.tagbar"
            @update:model-value="configStore.setTagbar"
          >
            <template #handle="{ checked }">
              <Icon :name="checked ? 'i-ep-check' : 'i-ep-close'" />
            </template>
          </ToggleSwitch>
        </el-form-item>
        <el-form-item label="路由动画">
          <div v-for="item in transitionOptions" :key="item.label" class="mr flex items-center">
            <RadioButton v-model="config.transitionType" :input-id="item.label" name="dynamic" :value="item.label" />
            <label :for="item.label" class="cursor-pointer pl2">{{ item.title }}</label>
          </div>
        </el-form-item>
      </el-form>
      <Divider />
      <div class="w-full flex justify-center">
        <Button severity="danger" size="small" @click="configStore.resetConfig()">
          <Icon name="i-ep-delete" />
          清空缓存并重置
        </Button>
      </div>
    </Drawer>
  </div>
</template>

<style scoped>
:deep(.p-togglebutton-label) {
  font-size: 0.8rem !important;
}

.color-button {
  border: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  outline-color: transparent;
  outline-width: 2px;
  outline-style: solid;
  outline-offset: 1px;
}

.color-button.active-color {
  outline-color: var(--primary-color);
}
</style>
