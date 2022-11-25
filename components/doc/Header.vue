<template>
  <header class="fixed z-20 top-0 left-0 right-0 box-border">
    <el-menu class="px-12" mode="horizontal" :ellipsis="false">
      <el-link class="mx-4 text-xl" :underline="false" type="success">
        Admin 3
      </el-link>
      <div class="flex-grow" />
      <el-menu-item index="2">
        指南
      </el-menu-item>
      <el-menu-item index="3">
        工具链
      </el-menu-item>
      <el-menu-item index="4">
        问题
      </el-menu-item>
      <BaseHomeLink class="ml-4" />
      <BaseDarkToggle class="ml-4" />
    </el-menu>
  </header>
</template>

