export const initData = {
  routers: [
    {
      name: 'demo', /* 路由名称（唯一） */
      path: '/admin/demo', /* 路由地址（必填） */
      meta: {
        title: '演示demo', /* 菜单标题 */
        icon: 'i-carbon-tool-box', /* 菜单图标（iconify 使用 'i-'，svg 使用 'svg-'） */
      },
      children: [{
        name: 'demo-table',
        path: '/admin/demo/table',
        meta: {
          title: '表格用法',
          icon: 'i-carbon-cross-tab',
        },
        children: [{
          name: 'demo-table-draggable',
          path: '/admin/demo/table/draggable',
          meta: {
            title: '可拖拽表格',
            icon: 'i-carbon-move',
          },
        }, {
          name: 'demo-table-inline-edit',
          path: '/admin/demo/table/inline-edit',
          meta: {
            title: '行内编辑',
            icon: 'i-ep-edit-pen',
          },
        }, {
          name: 'demo-table-dynamic-row',
          path: '/admin/demo/table/dynamic-row',
          meta: {
            title: '动态增减行',
            icon: 'i-carbon-row-insert',
          },
        }],
      }, {
        name: 'demo-element-plus',
        path: '/admin/demo/element-plus',
        meta: {
          title: 'Element 组件',
          icon: 'i-ep-element-plus',
        },
      }, {
        name: 'demo-china-area-cascader',
        path: '/admin/demo/china-area-cascader',
        meta: {
          title: '省市区选择器',
          icon: 'i-carbon-map',
        },
      }, {
        name: 'demo-count-up',
        path: '/admin/demo/count-up',
        meta: {
          title: '数字动画',
          icon: 'i-carbon-character-whole-number',
          // noCache: true,
        },
      }, {
        name: 'demo-scroll-notice',
        path: '/admin/demo/scroll-notice',
        meta: {
          title: '滚动通知',
          icon: 'i-carbon-star-review',
        },
      }, {
        name: 'demo-animate-background',
        path: '/admin/demo/animate-background',
        meta: {
          title: '动画页面背景',
          icon: 'i-ep-magic-stick',
        },
      }, {
        name: 'demo-pdf',
        path: '/admin/demo/pdf',
        meta: {
          title: 'PDF 预览',
          icon: 'i-carbon-document-pdf',
        },
      }, {
        name: 'demo-tinyMCE',
        path: '/admin/demo/tinyMCE',
        meta: {
          title: '富文本编辑器',
          icon: 'i-carbon-language',
        },
      }, {
        name: 'demo-icon',
        path: '/admin/demo/icon',
        meta: {
          title: 'Iconify 在线图标',
          icon: 'i-carbon-face-satisfied',
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
