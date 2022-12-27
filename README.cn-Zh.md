<h1 align="center">
Admin 3
</h1>

**中文** | [English](./README.en-US.md)

## 简介
`admin3` 是一个基于 `Nuxt 3` 的后台管理模板，使用最新的`Nuxt 3`、`TypeScript`、`Vue 3`、`Pinia`、`Element-Plus`、`Unocss` 等主流技术。  
**演示地址：** [http://10.102.12.222:8086/](http://10.102.12.222:8086/)  
**项目文档：** [http://10.102.12.222:8086/doc/guide](http://10.102.12.222:8086/doc/guide)  

## 环境框架
- Nuxt 3， `Node.js` 版本要 `>16.11`, 集成 `Vue 3`  
- TypeScript, 拥抱 `any`, 用起来再说。  
- pinia, 状态管理
- vueuse, 可复用的函数式组件
- eslint, ["@antfu/eslint-config"], 不必再配置 `prettier`
- czg, 交互式提交(commitizen)

## UI 框架  
- Element-Plus  
- unocss, ["@unocss/nuxt"]  
  - tailwind preset  
  - iconify, ["@iconify-json/carbon", "@iconify-json/ep", "@iconify-json/logos", "@iconify-json/twemoji"]  

## 开发  
```sh
clone  
corepack enable  # 如果没有开启 yarn，请使用管理员模式运行该命令以开启使用 yarn
npm config -g set registry http://10.102.2.119:8081/repository/localNpm/
yarn config -g set registry http://10.102.2.119:8081/repository/localNpm/ # 这里需要同时对 yarn 和 npm 的仓库源进行设置
yarn install  
yarn dev  
```



