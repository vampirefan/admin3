<script setup lang="ts">
import { primeVuePresetOptions } from '@/utils/primevue'

const configStore = useConfigStore()
const { config } = storeToRefs(configStore)

const demoData = reactive({
  input: '',
  radioGroup: '',
  datepicker: null,
  switch: true,
  calendar: new Date(),
  textarea: '',
})

const docs = [
  { label: 'Nuxt3', icon: 'i-logos-nuxt-icon', url: 'http://10.102.81.15:30576/admin3/intro' },
  { label: 'Vue3', icon: 'i-logos-vue', url: 'http://10.102.81.15:32467' },
  { label: 'VueUse', icon: 'i-logos-vueuse', url: 'http://10.102.81.15:32050' },
  { label: 'Typescript', icon: 'i-logos-typescript-icon', url: 'http://10.102.81.15:30576/codes/typescript-basic' },
  { label: 'Eslint', icon: 'i-logos-eslint', url: 'http://10.102.81.15:30576/apps/vscode#eslint' },
  { label: 'Element-Plus', icon: 'i-logos-element', url: 'http://10.102.81.15:31488/zh-CN/' },
  { label: 'Unocss', icon: 'i-logos-unocss', url: 'http://10.102.81.15:30905' },
  { label: 'TailwindCSS', icon: 'i-logos-tailwindcss-icon', url: 'http://10.102.81.15:31883' },
  { label: 'Iconify', icon: 'i-carbon-face-satisfied', url: '/Demo/Icon' },
  { label: 'Wiki3', icon: 'i-twemoji-open-book', url: ' http://10.102.81.15:30576' },
]
</script>

<template>
  <AdminContainer>
    <template #header>
      <el-form inline @submit.prevent>
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
      </el-form>
    </template>
    <div class="grid grid-cols-2 gap-10">
      <Card>
        <template #title>
          按钮组件
        </template>
        <template #content>
          <div class="flex flex-wrap gap-2">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warn" severity="warn" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
            <Button label="Contrast" severity="contrast" />
          </div>
          <div class="mt flex flex-wrap gap-2">
            <Button label="Primary" text raised />
            <Button label="Secondary" severity="secondary" text raised />
            <Button label="Success" severity="success" text raised />
            <Button label="Info" severity="info" text raised />
            <Button label="Warn" severity="warn" text raised />
            <Button label="Help" severity="help" text raised />
            <Button label="Danger" severity="danger" text raised />
            <Button label="Plain" plain text raised />
          </div>
          <div class="mt flex flex-wrap gap-2">
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />
            <Button label="Success" severity="success" rounded />
            <Button label="Info" severity="info" rounded />
            <Button label="Warn" severity="warn" rounded />
            <Button label="Help" severity="help" rounded />
            <Button label="Danger" severity="danger" rounded />
            <Button label="Contrast" severity="contrast" rounded />
          </div>
          <div class="mt flex flex-wrap gap-2">
            <Button label="Primary" outlined />
            <Button label="Secondary" severity="secondary" outlined />
            <Button label="Success" severity="success" outlined />
            <Button label="Info" severity="info" outlined />
            <Button label="Warn" severity="warn" outlined />
            <Button label="Help" severity="help" outlined />
            <Button label="Danger" severity="danger" outlined />
            <Button label="Contrast" severity="contrast" outlined />
          </div>
          <div class="mt flex flex-wrap gap-2">
            <Button text raised rounded>
              <Icon name="i-prime-check" />
            </Button>
            <Button text raised rounded severity="secondary">
              <Icon name="i-prime-bookmark" />
            </Button>
            <Button text raised rounded severity="success">
              <Icon name="i-prime-search" />
            </Button>
            <Button text raised rounded severity="info">
              <Icon name="i-prime-user" />
            </Button>
            <Button text raised rounded severity="warning">
              <Icon name="i-prime-bell" />
            </Button>
            <Button text raised rounded severity="help">
              <Icon name="i-prime-heart" />
            </Button>
            <Button text raised rounded icon="times" severity="danger">
              <Icon name="i-prime-times" />
            </Button>
          </div>
        </template>
      </Card>
      <Card>
        <template #title>
          表单组件
        </template>
        <template #content>
          <div class="grid grid-cols-2 gap5">
            <div>
              <FloatLabel variant="on" class="my">
                <InputText v-model="demoData.input" class="w-full" />
                <label>姓名</label>
              </FloatLabel>
              <FloatLabel variant="on" class="my">
                <DatePicker v-model="demoData.datepicker" />
                <label>出生日期</label>
              </FloatLabel>
              <div class="my flex flex-wrap gap4">
                <div v-for="item in ['男', '女']" :key="item">
                  <RadioButton v-model="demoData.radioGroup" :input-id="`radio${item}`" :value="item" />
                  <label for="`radio${item}`" class="ml-2">{{ item }}</label>
                </div>
              </div>
            </div>
            <div>
              <FloatLabel variant="on" class="my">
                <Textarea v-model="demoData.textarea" rows="8" class="w-full" />
                <label>简历</label>
              </FloatLabel>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <Card class="mt">
      <template #title>
        走马灯组件
      </template>
      <template #content>
        <Carousel
          :value="docs" :num-visible="5" :num-scroll="1" circular :autoplay-interval="3000" :show-indicators="false"
          :show-navigators="false"
        >
          <template #item="slotProps">
            <div
              class="surface-border border-round m-2 cursor-pointer border-1 px-3 py-5 text-center"
              @click="openUrl(slotProps.data.url)"
            >
              <div class="mb-3">
                <Icon class="text-6xl" :name="slotProps.data.icon" />
              </div>
              <div>
                <h4 class="mb-1">
                  {{ slotProps.data.label }}
                </h4>
              </div>
            </div>
          </template>
        </Carousel>
      </template>
    </Card>
    <!-- <span class="p-float-label">
      <InputText id="input" v-model="input">
      </InputText>
      <label for="input">输入框</label>
    </span> -->
    <!-- <Calendar v-model="date"></Calendar> -->
  </AdminContainer>
</template>

<style scoped>
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
