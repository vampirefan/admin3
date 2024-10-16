#!/bin/bash

# 拉取最新代码
git fetch 
git pull

# 编译
rm -f yarn.lock
rm -rf node_modules/
yarn install
yarn build

# 重启应用
pm2 restart admin3

# 首次启动应用
# NUXT_PUBLIC_ICONIFY_PROVIDER=http://10.102.81.133:7001 PORT=8001 pm2 start .output/server/index.mjs --name admin3
