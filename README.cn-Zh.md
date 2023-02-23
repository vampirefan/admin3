<h1 align="center">
Admin 3
</h1>

**中文** | [English](./README.en-US.md)

## 简介
`admin3` 是一个基于 `Nuxt 3` 的后台管理模板，使用最新的`Nuxt 3`、`TypeScript`、`Vue 3`、`Pinia`、`Element-Plus`、`Unocss` 等主流技术。  
**演示地址：:** [https://admin3.netlify.app/](https://admin3.netlify.app/)  
**项目文档：:** [https://admin3.netlify.app/doc/guide](https://admin3.netlify.app/doc/guide)  
**Github：** [https://github.com/vampirefan/admin3](https://github.com/vampirefan/admin3)  
**Gitee：** [https://gitee.com/vampirefan/admin3](https://gitee.com/vampirefan/admin3)  

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
# 下载源码
clone  
# 如果没有开启 yarn，请使用管理员模式运行以下命令以开启使用 yarn
corepack enable  
# 安装依赖
yarn install  
# 启动开发服务
yarn dev  
```

## Docker
```sh
yarn build:docker
docker run --name admin3 -d -p 8086:8086 admin3
```


