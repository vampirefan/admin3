export const routers_data = [
  {
    name: 'Demo', /* 路由名称（唯一） */
    path: '/Demo', /* 路由地址（必填） */
    meta: {
      title: '演示 DEMO', /* 菜单标题 */
      icon: 'i-carbon-tool-box', /* 菜单图标（iconify 使用 'i-'，svg 使用 'svg-'） */
    },
    children: [{
      name: 'Demo-Table',
      path: '/Demo/Table',
      meta: {
        title: '表格用法',
        icon: 'i-carbon-cross-tab',
      },
      children: [{
        name: 'Demo-Table-Draggable',
        path: '/Demo/Table/Draggable',
        meta: {
          title: '可拖拽表格',
          icon: 'i-carbon-move',
        },
      }, {
        name: 'Demo-Table-InlineEdit',
        path: '/Demo/Table/InlineEdit',
        meta: {
          title: '行内编辑',
          icon: 'i-ep-edit-pen',
        },
      }, {
        name: 'Demo-Table-DynamicRow',
        path: '/Demo/Table/DynamicRow',
        meta: {
          title: '动态增减行',
          icon: 'i-carbon-row-insert',
        },
      }],
    }, {
      name: 'Demo-DataView',
      path: '/Demo/DataView',
      meta: {
        title: '展示大屏',
        icon: 'i-carbon-screen',
      },
    }, {
      name: 'Demo-ElementPlus',
      path: '/Demo/ElementPlus',
      meta: {
        title: 'Element 组件',
        icon: 'i-ep-element-plus',
      },
    }, {
      name: 'Demo-PrimeVue',
      path: '/Demo/PrimeVue',
      meta: {
        title: 'PrimeVue 组件',
        icon: 'i-prime-prime',
      },
    }, {
      name: 'Demo-ChinaAreaCascader',
      path: '/Demo/ChinaAreaCascader',
      meta: {
        title: '省市区选择器',
        icon: 'i-carbon-map',
      },
    }, {
      name: 'Demo-CountUp',
      path: '/Demo/CountUp',
      meta: {
        title: '数字动画',
        icon: 'i-carbon-character-whole-number',
        // noCache: true,
      },
    }, {
      name: 'Demo-ScrollNotice',
      path: '/Demo/ScrollNotice',
      meta: {
        title: '滚动通知',
        icon: 'i-carbon-star-review',
      },
    }, {
      name: 'Demo-Pdf',
      path: '/Demo/Pdf',
      meta: {
        title: 'PDF 预览',
        icon: 'i-carbon-document-pdf',
      },
    }, {
      name: 'Demo-TinyMCE',
      path: '/Demo/TinyMCE',
      meta: {
        title: '富文本编辑器',
        icon: 'i-carbon-language',
      },
    }, {
      name: 'Demo-Print',
      path: '/Demo/Print',
      meta: {
        title: '区域打印',
        icon: 'i-carbon-printer',
      },
    }, {
      name: 'Demo-Icon',
      path: '/Demo/Icon',
      meta: {
        title: 'Iconify 在线图标',
        icon: 'i-carbon-face-satisfied',
      },
    }],
  },
]
export const users_data = [
  {
    username: '模拟用户', // 模拟登录用户
    roles: ['admin'], // 模拟角色
    accessToken: 'mocked-access-token', // 模拟访问 token
    maxAge: 60, // 过期时间, 单位: 秒, 默认 1 分钟过期，
    refreshToken: 'mockedRefreshedToken.adminRefresh', // 模拟刷新 token
  },
]
