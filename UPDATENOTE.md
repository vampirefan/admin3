# 开发日志

## 2024.10.16
- :tada: **Admin3 2.0.0 更新！！**
- 更新支持 primevue
- 利用 primevue 实现自定义动态主题、自定义主题色、自定义背景色
- 添加 primevue 示例页面
- 修复侧边栏动画不同步
- 将文档摘除，删除`@nuxt/content`模块，单独建立 admin3-docs 文档项目，让本项目更“干净”
- 优化图标组件,组件名 `<AdminIcon>` 改为 `<Icon>`，本地 svg 文件引入作为 plugins 只引入一次
- 更新所有依赖：nuxt->3.13.2, element-plus->2.8.4, primevue->4.1.0


## 2023.11.27
- 更新 layout 配置功能
- 更新 colorTheme 配置功能
- 优化后台首页
- 优化富文本编辑器演示页面

## 2023.11.24
- 更新至 nuxt@3.8.2
- 调整项目文件夹结构，源码放入 `/src` 文件夹，模拟后端从 `/server` 移至 `/server-mock` 文件夹。
- 优化请求的封装，见 `/src/utils/request.ts`。
- 去除 content 模块，将文档内容移除本项目，本项目仅作为前端模板使用，使项目初始化更加干净。

## 2022.2.23  
- 更新至 nuxt@3.2.2
- 修复一些 pdf 在线预览、表格拖拽的 bug

## 2022.12.21  
- 新增 tinymce 富文本编辑器的 demo，像之前说的，决定项目中不做无新功能性的组件封装，这里直接引用了 tinymce 官方的组件，需要封装的话建议开发者自行封装。富文本编辑器我也是在网上找了好些，主要想实现从 word 中粘贴文本过来时保留样式，像 quill 、 wangeditor 等好些都不行。最后还是选取了最火的 tinymce 作为示例。
- 新增可拖拽表格的 demo

## 2022.12.20  
- 封装了省市区选择器，并新增了各种场景 demo。  
- 新增了一些 demo 注解。  

## 2022.12.19  
- 还是想把项目文档结构层次清晰标准一些，把 layout 中的一次性组件移至 layout 文件夹下，并对 component 文件夹下的组件进行了统一命名。  
- 新增省市区选择器 demo  
- 删除了针对 el-pagination 的封装。决定该项目中不做无新功能性的组件封装，这样会产生新的 api 而影响二次开发。尽量以 demo 的形式丰富组件。  

## 2022.12.16  
- 做了些文档的更新，搬运了 Nuxt3 的项目结构文档、Vue3 代码风格文档、更新了路由文档、配置文档。  
- 新增数字动画 demo（直接使用了 `vueuse` 的 `useTransition()` 函数。  

## 2022.12.15  
- `nuxt` 使用的 `nitro` 服务器自带 `storage layer`([unstorage](https://github.com/unjs/unstorage))，可以先不纠结使用轻量级数据库了，可以直接使用 `unstorage` 的 `fs driver` 就实现了我梦寐以求的利用文本建立可增删改查的轻量数据库存储功能。:grinning:
- 可惜 netlify 不支持 fs 文件写入功能，不过利用 `unstorage` 默认的 `in memory driver` 可以在 netlify 上使用。:thumbsup:

## 2022.12.14  
- 完成页面的 `transition` 动画，本来想用 `nuxt` 自带的 transition 功能，但感觉还是 keepalive 的 bug 导致实现不了，所以直接用的 Vue 的 `<transition />` 组件，通过给页面主内容加了一个 `v-show` 判断，然后包裹在 `<transition />` 组件中顺利实现。并添加了不同的动画选项放在布局设置中自定义切换。
- 下步该做后端 `mock` 和轻量级数据库的集成了，还在纠结要不要用 `mongodb`。

## 2022.12.13  
- 完成 tagsView 功能，开启了全局 keepalive，等 nuxt3 修复了 keepalive 的 bug 后再加入路由的选择性缓存功能。
- 修复了前面的一些 bug：`configStore` 中要优先读取 localstorage 中的数据时要用 `??` 而不是 `||`，否则不能正确获得 `false` 值。

## 2022.12.12  
- 今天本来想把 tagsView 功能做了的，结果捣鼓了一天的 keep-alive， 最后发现是 nuxt3 的一个 bug：[https://github.com/nuxt/framework/issues/8367](https://github.com/nuxt/framework/issues/8367)，希望赶紧能修复。  

## 2022.12.11  
- :tada: 将 App.config 写进 Localstorage，实现边栏颜色、主体深色、边栏宽度的页面布局自定义并缓存。黑边栏配白主体还是挺好看的。
- 发现 `useToggle()` 返回的是一个 `function`，使用 `call()` 才能执行，也不知道用的对不对，不过总算实现流畅的切换了。
- 更新 `pinia` 使用方法，用 `storeToRefs()` 方法来获得 State 的 ref ，比 `$subscribe` 方法更简洁。
- 实现侧边菜单折叠。
- 实现顶栏面包屑导航显示/隐藏。

## 2022.12.10  
- `Icon` 演示页面中新增根据图表名称搜索功能。

## 2022.12.09  
- 使用 NavigateTo() 并设置 `{ replace,true }` 可以实现重定向（不记录 router 历史）
- 新增 Element-Plus 的演示页
- 新增布局组件 `<AdminContainer />`，实现固定 `header`, `footer`, 内容填满主区域，页面有较多内容时会在侧面产生滚动条。
## 2022.12.08  
- 实现图标演示页面，新增了 `IconifyOnline` 组件，实现在线图标引入。搞了好久图标引入，离线的只能按需引入，否则打包过大会出问题。  
- 新增 `AdminContainer` 组件，实现主体内容的 flex 布局，使`header` 和 `footer` 插槽能够固定，中间使用 element-plus 的 `scroll`组件。

## 2022.12.07  
- 将 `SvgIcon` 组件改写成通用的 `Icon` 组件，即可以使用 `i-` 引入 `iconify` 图标，又可以使用 `svg-` 引入 `svg` 图标
- 实现了后端接口传路由：`@/server/api/routers.get.ts`
- 添加路由守卫：`@/middleware/auth.global.ts`
- 实现边栏菜单、顶栏导航面包屑

## 2022.12.06  
- 感觉每天都在学习 `css`，更新了后台管理导航的 `layout`，把使用指南的所有样式变量加上了 `doc` 前缀予以区分，并 `markdown` 渲染的样式单独组件中。
- 准备开始撸后台管理的路由

## 2022.12.05  
- 今天遇到一个大坑：`localStorage` 只存在于客户端中，基于 `ssr` 的 `nuxt` 要使用的话，要注意两点：
  1. 页面中要使用 `<ClientOnly>`  
  2. `pinia` 中要用到 `skipHydrate()` 的辅助函数

## 2022.12.04  
- 放弃 `gh-pages` 了，改用 `netlify` 零配置成功！！而且开启了 `ssr`。
- 添加 `Dockerfile`

## 2022.12.03  
- 调研了 `token` 无感刷新，参照别人代码把 `login`, `logout` 功能实现了，在 `pinia` 中使用 `useCookie` 和 `useSessionStorage`，感觉还是一知半解，后面发现问题再改吧。  
- 试了好久使用 `github actions` 来将代码演示跑在 `gh-pages` 分支，甚至改了项目的 `baseurl` 和 `ssr`，想让项目生成纯静态页面，感觉还是 `baseurl` 的问题，最后没成功。

## 2022.12.02  
- 一直在排查 `npm` 包管理问题，安装 `pinia` 之后各种报错，按照网上的 `npm i pinia -f` 也不管用。最后放弃 `npm`，使用 `yarn` 后流畅无比，我以后是 `yarn` 粉了。

## 2022.12.01  
- 实现文档的 `toc` 和 `navigation` 功能。

## 2022.11.30  
- 进一步优化 `content` 中 `markdown` 的 `css` 渲染。参考 `@nuxt-themes/docus`，结合`vuepress` 漂亮了不少，新增组件：`Alert.vue`(对应`vuepress`中的`'tip', 'warning', 'danger', 'details'`), `Badge.vue`，`List.vue`。  
- 自己搞了个 `logo`，好丑，以后再改吧。  

## 2022.11.29  
- 完成 `content` 中 `markdown` 的 `css` 渲染。参考 `@nuxt-themes/typography`，它用了一个 `pinceau` 的插件，可以在 `<style>` 中使用 `ts`，为了不让项目引入更多复杂的功能，我把它所有的 `components/content/Prose组件` 全部改写了一遍。

## 2022.11.24  
- 删除所有 `commitlint` 相关内容，仅留下 `czg` 交互式提交，以最简单的方式实现项目提交规范化即可。

## 2022.11.23  
- 在 `doc Layout` 中使用 `vitepress` 的 `css` 样式。
- 完善 `guide Layout`
- 使用 `VueUse` 激活 `Element-Plus` 自带的 `Dark Mode`

## 2022.11.22  
- 规范化 `conventional-changelog` 规范化 `commit`  
- 集成 `content` 模块。
  
## 2022.11.21  
前些天找了好多目前开源的 `vue 3` admin 框架，发现了几个特别好的，比如：  
- [vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin): 文档特别详细，组件特别丰富。  
- [vue-next-admin](https://github.com/lyt-Top/vue-next-admin): 组件比较丰富，界面非常干净。  

最后还是决定通过造轮子来学习新技术，原因是`Nuxt 3.0` 刚刚发布，想学习和实现更自由的定制化，就从这里开始吧。  
- 使用 `Nuxt 3` 初始化项目
- 集成 `Element UI`
- 比较 `tailwindCSS` 和 `UnoCSS` ，决定尝试使用后者
- 通过 `UnoCSS` 集成 `iconify` 图标
