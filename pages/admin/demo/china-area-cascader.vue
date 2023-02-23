<script setup lang="ts">
import { match } from 'pinyin-pro'
definePageMeta({ layout: 'admin' })

const valueBasic = ref()
const valueFromLabel = ref()
const valueClearable = ref()
const valueOnlyShowLast = ref()
const valueCheckStrictly = ref()
const valueFilterable = ref()
const valuePinyinFilterable = ref()

const handleFilter = (node: any, keyword: string) => {
  if (keyword) {
    const matched = match(node.text, keyword)
    if (matched === null)
      return false
  }
  return true
}
</script>

<template>
  <AdminContainer>
    <el-alert type="info" show-icon :closable="false" class="mb-5">
      <p class="text-4">
        <span v-text="`<AdminChinaAreaCascader />`" />
        组件使用 element-plus 组件中的级联选择器 (Cascader) 进行封装，保留了除插槽外的所有属性、事件，选项数据取自
        "@province-city-china/level"，以下是一些用法示例：
      </p>
    </el-alert>
    <div class="demo-wrapper flex flex-wrap gap-15">
      <el-card>
        <h3>基础用法</h3>
        <AdminChinaAreaCascader v-model="valueBasic" />
        <p>{{ valueBasic }}</p>
      </el-card>
      <el-card>
        <h3>使用 label 作为值</h3>
        <AdminChinaAreaCascader v-model="valueFromLabel" :props="{ value: 'label' }" />
        <p>{{ valueFromLabel }}</p>
      </el-card>
      <el-card>
        <h3>可清空</h3>
        <AdminChinaAreaCascader v-model="valueClearable" clearable />
        <p>{{ valueClearable }}</p>
      </el-card>
      <el-card>
        <h3>仅显示最后一级</h3>
        <AdminChinaAreaCascader v-model="valueOnlyShowLast" :show-all-levels="false" />
        <p>{{ valueOnlyShowLast }}</p>
      </el-card>
      <el-card>
        <h3>选择任意一级选项</h3>
        <AdminChinaAreaCascader v-model="valueCheckStrictly" :props="{ checkStrictly: true }" />
        <p>{{ valueCheckStrictly }}</p>
      </el-card>
      <el-card>
        <h3>可搜索</h3>
        <AdminChinaAreaCascader v-model="valueFilterable" filterable />
        <p>{{ valueFilterable }}</p>
      </el-card>
      <el-card>
        <h3>拼音模糊搜索(使用了 'pinyin-pro' 库)</h3>
        <AdminChinaAreaCascader v-model="valuePinyinFilterable" filterable :filter-method="handleFilter" />
        <p>{{ valueFilterable }}</p>
      </el-card>
    </div>
  </AdminContainer>
</template>

<style scoped>
.demo-wrapper .el-card {
  width: 420px;
  height: 200px;
}

:deep(.el-cascader) {
  width: 85%;
}
</style>
