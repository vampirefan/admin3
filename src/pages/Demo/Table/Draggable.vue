<script setup lang="ts">
import Sortable from 'sortablejs'

const tableRowDragRef = ref()
const tableColumnDragRef = ref()
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
  },
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '地址',
    prop: 'address',
  },
])
onMounted(() => {
  const rows = tableRowDragRef.value.$el.querySelector(
    '.row-drag .el-table__body tbody',
  )
  Sortable.create(rows as HTMLElement, {
    animation: 300,
    handle: '.drag-btn',
    onUpdate: ({ newIndex, oldIndex }) => {
      const currentRow = tableData.value.splice(oldIndex as number, 1)[0]
      tableData.value.splice(newIndex as number, 0, currentRow)
    },
  })

  const columns = tableColumnDragRef.value.$el.querySelector(
    '.column-drag .el-table__header tr',
  )
  Sortable.create(columns as HTMLElement, {
    animation: 300,
    handle: '.drag-header',
    onUpdate: ({ newIndex, oldIndex }) => {
      const currentColumn = columnData.value.splice(oldIndex as number, 1)[0]
      columnData.value.splice(newIndex as number, 0, currentColumn)
    },
  })
})
</script>

<template>
  <AdminContainer>
    <template #header>
      <el-alert type="info" show-icon :closable="false">
        <span class="text-4">使用 sortablejs 实现的可拖拽表格，因为两个表格用的同一套数据，所以能看到拖拽后数据一起变了。</span>
      </el-alert>
    </template>
    <el-card header="行拖拽">
      <div class="flex">
        <code>
          <pre class="w-[400px]"> {{ tableData }}</pre>
        </code>
        <el-table ref="tableRowDragRef" :data="tableData" row-key="id" class="row-drag">
          <el-table-column width="45">
            <Icon name="i-carbon-draggable" class="drag-btn cursor-grab vertical-sub" />
          </el-table-column>
          <el-table-column
            v-for="(column, index) in columnData" :key="`col_${index}`" :label="column.label"
            :prop="column.prop"
          />
        </el-table>
      </div>
    </el-card>
    <el-card header="列拖拽" class="mt-4">
      <div class="flex">
        <code>
          <pre class="w-[400px]"> {{ columnData }}</pre>
        </code>
        <el-table ref="tableColumnDragRef" :data="tableData" class="column-drag">
          <el-table-column v-for="(column, index) in columnData" :key="`col_${index}`" :prop="column.prop">
            <template #header>
              <span class="drag-header cursor-grab">{{ column.label }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </AdminContainer>
</template>
