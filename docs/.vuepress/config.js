module.exports = {
  title: '前端学习路线',
  description: '持续学习，不断学习',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '笔记', link: '/node/' },
      { text: 'GitHub', link: 'https://github.com/ni5328109/web-road-map' }
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
          path: '/primary/',
          collapsable: false,
          children: ['/primary/html', '/primary/css', '/primary/js']
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
        }
      ],
      '/': ['' /* / */]
    },
    sidebarDepth: 3,
    smoothScroll: true
  },
  base: '/web-road-map/'
}
