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
        }
      ],
      '/': ['' /* / */]
    },
    sidebarDepth: 3,
    smoothScroll: true
  },
  base: '/web-road-map/'
}
