<template>
  <aside class="w-xs fixed top-20 bottom-0 left-0 z-13 box-border border-r border-r-emerald">
    <el-scrollbar>
      <div class="pl-15">
        <p v-for="index in 50" :key="index">
          <el-link> title {{ index }} </el-link>
        </p>
      </div>
    </el-scrollbar>
  </aside>
</template>
