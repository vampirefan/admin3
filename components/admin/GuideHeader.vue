<template>
  <header class="navbar">
    <el-link text-xl color-green-6>
      admin3
    </el-link>
    <CommonDarkToggle float-right />
  </header>
</template>

<style>
.navbar {
  padding: .7rem 1.5rem;
  line-height: 2.2rem;
  transition: transform .3s;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 3.6rem;
  background-color: hsla(0, 0%, 100%, 0.9);
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgb(0 0 0 / 6%);
}
</style>
