module.exports = {
  title: '前端学习路线',
  description: '持续学习，不断学习',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '笔记', link: '/node/' },
      { text: 'GitHub', link: 'https://github.com/leglegend/web-road-map' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '前言',
          sidebarDepth: 0,
          collapsable: false,
          children: ['/guide/']
        },
        {
          title: '前端入门',
          path: '/guide/primary/',
          collapsable: false,
          children: [
            '/guide/primary/html',
            '/guide/primary/css',
            '/guide/primary/js'
          ]
        },
        {
          title: '前端工程化',
          path: '/guide/project/',
          collapsable: false,
          children: ['/guide/project/vue', '/guide/project/git']
        }
      ],
      '/node/': [
        {
          title: '笔记',
          path: '/node/',
          sidebarDepth: 0,
          collapsable: false
        },
        {
          title: 'JavaScript高级程序设计',
          path: '/node/js-advanced'
        },
        {
          title: '深入浅出Node.js',
          path: '/node/nodejs'
        },
        {
          title: 'MDN HTML教学',
          path: '/node/html'
        },
        {
          title: 'Vue.js设计与实现',
          path: '/node/vue3'
        },
        {
          title: 'Vue.js设计与实现',
          path: '/node/vue3'
        }
      ],
      '/': ['' /* / */]
    },
    sidebarDepth: 3,
    smoothScroll: true
  },
  base: '/web-road-map/'
}
