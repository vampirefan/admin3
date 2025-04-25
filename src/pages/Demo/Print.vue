<script setup lang="ts">
import printJS from 'print-js'
import { computed, ref } from 'vue'

interface Employee {
  id: number
  name: string
}

interface AbsentRecord {
  employeeId: number
  day: number
}

const currentDate = new Date()
const currentYear = ref<number>(currentDate.getFullYear())
const currentMonth = ref<number>(currentDate.getMonth() + 1)

const employees = ref<Employee[]>([
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' },
  { id: 4, name: '赵六' },
])

const absentRecords = ref<AbsentRecord[]>([
  { employeeId: 1, day: 5 },
  { employeeId: 2, day: 10 },
  { employeeId: 2, day: 11 },
  { employeeId: 3, day: 20 },
])

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 0).getDate()
})

function isAbsent(employeeId: number, day: number): boolean {
  return absentRecords.value.some(
    record => record.employeeId === employeeId && record.day === day,
  )
}

function printTable() {
  printJS({
    printable: 'printArea',
    type: 'html',
    targetStyles: ['*'],
    style: `
      @page {
        size: A4 landscape;
        margin: 5mm;
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th, td {
        border: 1px solid black;
        text-align: center;
        padding: 4px;
      }
    `,
  })
}
</script>

<template>
  <AdminContainer>
    <h1>员工考勤表 - {{ currentYear }}年{{ currentMonth }}月</h1>
    <div>
      <button @click="printTable">
        打印考勤表
      </button>
      <select v-model="currentMonth" class="ml">
        <option v-for="month in 12" :key="month" :value="month">
          {{ month }}月
        </option>
      </select>
    </div>
    <div id="printArea">
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th v-for="day in daysInMonth" :key="day">
              {{ day }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td
              v-for="day in daysInMonth"
              :key="day"
              :style="{ color: isAbsent(employee.id, day) ? 'red' : 'black' }"
            >
              {{ isAbsent(employee.id, day) ? '缺' : '√' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </AdminContainer>
</template>

<style scoped>
button {
  margin: 10px 0;
  padding: 6px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  table-layout: fixed; /* 均匀分布列宽 */
}

th, td {
  border: 1px solid black;
  text-align: center;
  padding: 4px;
}

th:first-child, td:first-child {
  width: 120px; /* 固定名字列宽度 */
  white-space: nowrap; /* 防止名字换行 */
}
</style>
