<h1 align="center">
Admin 3
</h1>

<pre align="center">
⚗️ 正在开发中
</pre>

## 简介
一个基于 `Nuxt 3` 的后台管理模板，只想要一个干净且开箱即用的模板。参考自 `vitesse`。使用最新的`Nuxt 3`、`TypeScript`、`Vue 3`、`Pinia`、`Element-Plus`、`Unocss` 等主流技术。

### 环境框架
- Nuxt 3， `Node.js` 版本要 `>16.1`, 集成 `Vue 3`  
- TypeScript, 拥抱 `any`, 用起来再说。  
- eslint, ["@antfu/eslint-config"]  
- czg, 交互式提交(commitizen)

### UI 框架
- Element-Plus
- unocss, ["@unocss/nuxt"]
  - tailwind preset
  - iconify
    - "@iconify-json/ep", element-plus icon
    - "@iconify-json/carbon",
    - "@iconify-json/logos", 
    - "@iconify-json/twemoji"


## 开发日志
2022.11.24
- 删除所有 `commitlint` 相关内容，仅留下 `czg` 交互式提交，以最简单的方式实现项目提交规范化即可。

2022.11.23
- 在 `doc Layout` 中使用 `vitepress` 的 `css` 样式。
- 完善 `guide Layout`
- 使用 `VueUse` 激活 `Element-Plus` 自带的 `Dark Mode`

2022.11.22  
- 规范化 `conventional-changelog` 规范化 `commit`  
- 集成 `content` 模块。
  
2022.11.21  
前些天找了好多目前开源的 `vue 3` admin 框架，发现了几个特别好的，比如：  
- [vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin): 文档特别详细，组件特别丰富。  
- [vue-next-admin](https://github.com/lyt-Top/vue-next-admin): 组件比较丰富，界面非常干净。  

最后还是决定通过造轮子来学习新技术，原因是`Nuxt 3.0` 刚刚发布，想学习和实现更自由的定制化，就从这里开始吧。  
- 使用 `Nuxt 3` 初始化项目
- 集成 `Element UI`
- 比较 `tailwindCSS` 和 `UnoCSS` ，决定尝试使用后者
- 通过 `UnoCSS` 集成 `iconify` 图标
