<script setup lang="ts">
definePageMeta({ layout: 'admin' })
const tableData = ref([
  {
    id: 1,
    name: 'Arno',
    address: '武汉',
  }, {
    id: 2,
    name: 'Bob',
    address: '北京',
  }, {
    id: 3,
    name: 'Candy',
    address: '上海',
  }, {
    id: 4,
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
  <AdminContainer>
    <div class="flex">
      <code>
          <pre class="w-[400px]"> {{ tableData }}</pre>
        </code>
      <el-table default-expand-all row-key="id" :data="tableData" border :row-style="{ height: `${40}px` }"
        :cell-style="{ padding: `${0}px` }" @cell-click="handleCellClick">
        <el-table-column v-for="(column, index) in columnData" :key="`col_${index}`" :label="column.label"
          :prop="column.prop">
          <template #default="scope">
            <el-input v-if="scope.row === editRow && scope.column.property === editColumn"
              v-model="scope.row[column.prop]" class="inline" />
            <span v-else>{{ scope.row[column.prop] }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center">
          <template #header>
            <el-button size="small"
              @click="tableData.push({ id: tableData[tableData.length - 1].id + 1, name: '', address: '' })">
              点击新增
            </el-button>
          </template>
          <template #default="scope">
            <el-button size="small" @click="tableData.splice(scope.$index, 1)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </AdminContainer>
</template>
