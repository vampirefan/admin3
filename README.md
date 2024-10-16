# Admin 3

## 简介

`admin3` 是一个基于 `Nuxt 3` 的后台管理模板，使用最新的`Nuxt 3`、`TypeScript`、`Vue 3`、`Pinia`、`Element-Plus`、`Unocss` 等主流技术。
**当前版本：** 2.0.2

**演示地址:** [https://admin3.netlify.app/](https://admin3.netlify.app/)
**文档地址:** [https://admin3-docs.netlify.app/doc/guide](https://admin3-docs.netlify.app/doc/guide)
**Github:** [https://github.com/vampirefan/admin3](https://github.com/vampirefan/admin3)

## 环境框架

- Nuxt 3， **`Node.js` 版本要 `>18.18.0`**, 集成 `Vue 3`
- TypeScript, 拥抱 `any`, 用起来再说。
- pinia, 状态管理
- vueuse, 可复用的函数式组件
- eslint, ["@antfu/eslint-config"], 不必再安装和配置 `prettier`
- czg, 交互式提交(commitizen)

## UI 框架

- Element-Plus
- PrimeVue
- unocss, ["@unocss/nuxt"]
  - tailwind preset
  - iconify, ["@iconify-json/carbon", "@iconify-json/ep", "@iconify-json/logos", "@iconify-json/twemoji"]

## 开发

```sh
# 下载源码
clone
# 如果没有开启 yarn，请使用管理员模式运行以下命令以开启使用 yarn
npm install -g yarn # 或者使用 corepack enable
# 对 yarn 和 npm 的仓库源进行设置
yarn config set registry http://10.102.81.50/nexus/repository/npm
npm config set registry http://10.102.81.50/nexus/repository/npm
# 安装依赖
yarn install
# 启动开发服务
yarn dev
```
