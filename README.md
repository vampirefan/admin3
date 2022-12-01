<h1 align="center">
Admin 3
</h1>

<pre align="center">
⚗️ 正在开发中
</pre>

## 简介
`admin3` 是一个基于 `Nuxt 3` 的后台管理模板，使用最新的`Nuxt 3`、`TypeScript`、`Vue 3`、`Pinia`、`Element-Plus`、`Unocss` 等主流技术。

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
2022.12.01
- 实现文档的 `toc` 和 `navigation` 功能。

2022.11.30
- 进一步优化 `content` 中 `markdown` 的 `css` 渲染。参考 `@nuxt-themes/docus`，结合`vuepress` 漂亮了不少，新增组件：`Alert.vue`(对应`vuepress`中的`'tip', 'warning', 'danger', 'details'`), `Badge.vue`，`List.vue`。

2022.11.29
- 完成 `content` 中 `markdown` 的 `css` 渲染。参考 `@nuxt-themes/typography`，它用了一个 `pinceau` 的插件，可以在 `<style>` 中使用 `ts`，为了不让项目引入更多复杂的功能，我把它所有的 `components/content/Prose组件` 全部改写了一遍。

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
