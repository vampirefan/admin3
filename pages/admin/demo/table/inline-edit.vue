<script setup lang="ts">
definePageMeta({ layout: 'admin' })
const tableData = ref([
  {
    id: '1',
    name: 'Arno',
    address: '武汉',
  },
  {
    id: '2',
    name: 'Bob',
    address: '北京',
  },
  {
    id: '3',
    name: 'Candy',
    address: '上海',
  },
  {
    id: '4',
    name: 'Dick',
    address: '台湾',
  },
])
const columnData = ref([
  {
    label: 'Id',
    prop: 'id',
  }, {
    label: '姓名',
    prop: 'name',
  }, {
    label: '地址',
    prop: 'address',
  },
])
const editRow = ref()
const editColumn = ref()
function handleCellClick(row: any, column: any) {
  editRow.value = row
  editColumn.value = column.property
}
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <template #header>
        <el-alert type="info" show-icon :closable="false">
          <span class="text-4">主要通过 el-table 的 cell-click 事件方法把点击的行、列属性存起来，然后使用条件渲染即可。使用了大量 el-input
            的表格出现渲染迟钝的话，使用此方法很管用。</span>
        </el-alert>
      </template>
      <el-card header="行拖拽">
        <div class="flex">
          <code>
            <pre class="w-[400px]"> {{ tableData }}</pre>
          </code>
          <el-table :data="tableData" :row-style="{ height: `${40}px` }" :cell-style="{ padding: `${0}px` }"
            @cell-click="handleCellClick">
            <el-table-column v-for="(column, index) in columnData" :key="`col_${index}`" :label="column.label"
              :prop="column.prop">
              <template #default="scope">
                <el-input v-if="scope.row === editRow && scope.column.property === editColumn"
                  v-model="scope.row[column.prop]" />
                <span v-else>{{ scope.row[column.prop] }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </AdminContainer>
  </NuxtLayout>
</template>

<style scoped>

</style>
