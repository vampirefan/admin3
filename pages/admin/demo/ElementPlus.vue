<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})
const demoData = reactive({
  input: '',
  radioGroup: '',
  datepicker: '',
  switch: true,
  calendar: new Date(),
  textarea: '',
})
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="pb-6">
            <template #header>
              按钮组件
            </template>
            <el-row class="mb-4">
              <el-button>Default</el-button>
              <el-button type="primary">
                Primary
              </el-button>
              <el-button type="success">
                Success
              </el-button>
              <el-button type="info">
                Info
              </el-button>
              <el-button type="warning">
                Warning
              </el-button>
              <el-button type="danger">
                Danger
              </el-button>
            </el-row>

            <el-row class="mb-4">
              <el-button plain>
                Plain
              </el-button>
              <el-button type="primary" plain>
                Primary
              </el-button>
              <el-button type="success" plain>
                Success
              </el-button>
              <el-button type="info" plain>
                Info
              </el-button>
              <el-button type="warning" plain>
                Warning
              </el-button>
              <el-button type="danger" plain>
                Danger
              </el-button>
            </el-row>

            <el-row class="mb-4">
              <el-button round>
                Round
              </el-button>
              <el-button type="primary" round>
                Primary
              </el-button>
              <el-button type="success" round>
                Success
              </el-button>
              <el-button type="info" round>
                Info
              </el-button>
              <el-button type="warning" round>
                Warning
              </el-button>
              <el-button type="danger" round>
                Danger
              </el-button>
            </el-row>

            <el-row>
              <el-button circle>
                <Icon name="i-ep-search" />
              </el-button>
              <el-button type="primary" circle>
                <Icon name="i-ep-edit" />
              </el-button>
              <el-button type="success" circle>
                <Icon name="i-ep-check" />
              </el-button>
              <el-button type="info" circle>
                <Icon name="i-ep-message" />
              </el-button>
              <el-button type="warning" circle>
                <Icon name="i-ep-star" />
              </el-button>
              <el-button type="danger" circle>
                <Icon name="i-ep-delete" />
              </el-button>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <template #header>
              表单组件
            </template>
            <el-form label-width="80">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="姓名">
                    <el-input v-model="demoData.input" />
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-radio-group v-model="demoData.radioGroup">
                      <el-radio label="男" />
                      <el-radio label="女" />
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="出生日期">
                    <el-date-picker v-model="demoData.datepicker" type="date" />
                  </el-form-item>
                  <el-form-item label="心情">
                    <el-switch v-model="demoData.switch"
                      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #409eff" inline-prompt
                      active-text="开心" inactive-text="难过" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="简历">
                    <el-input v-model="demoData.textarea" type="textarea" :rows="8" />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="pt-6">
        <el-card>
          <template #header>
            日历组件
          </template>
          <el-calendar v-model="demoData.calendar" />
        </el-card>
      </el-row>
    </AdminContainer>
  </NuxtLayout>
</template>

<style scoped>
:deep(.el-card) {
  box-shadow: var(-el-box-shadow-lighter);
}
</style>
