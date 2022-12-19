export const initData = {
  routers: [
    {
      name: 'demo', /** 路由名称（唯一） */
      path: '/admin/demo', /** 路由地址（必填） */
      meta: {
        title: '演示demo', /** 菜单标题 */
        icon: 'i-carbon-tool-box', /** 菜单图标（iconify 使用 'i-'，svg 使用 'svg-'） */
      },
      children: [{
        name: 'demo-element-plus',
        path: '/admin/demo/element-plus',
        meta: {
          title: 'Element 组件',
          icon: 'i-ep-element-plus',
          showParent: true,
        },
      }, {
        name: 'demo-china-area-cascader',
        path: '/admin/demo/china-area-cascader',
        meta: {
          title: '省市区选择器',
          icon: 'i-carbon-map',
          showParent: true,
        },
      }, {
        name: 'demo-count-up',
        path: '/admin/demo/count-up',
        meta: {
          title: '数字动画',
          icon: 'i-carbon-character-whole-number',
          showParent: true,
          // noCache: true,
        },
      }, {
        name: 'demo-icon',
        path: '/admin/demo/icon',
        meta: {
          title: 'Iconify 在线图标',
          icon: 'i-carbon-face-satisfied',
          showParent: true,
        },
      }],
    },
  ],
  users: [
    {
      username: 'mock', // 模拟登录用户
      roles: ['admin'], // 模拟角色
      accessToken: 'mocked-access-token', // 模拟访问 token
      maxAge: 60, // 过期时间, 单位: 秒, 默认 1 分钟过期，
      refreshToken: 'mockedRefreshedToken.adminRefresh', // 模拟刷新 token
    },
  ],
}
