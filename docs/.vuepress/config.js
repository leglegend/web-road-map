module.exports = {
  title: '前端学习路线',
  description: '持续学习，不断学习',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/ni5328109/web-road-map' }
    ],
    sidebar: [
      {
        title: '前言',
        sidebarDepth: 0,
        collapsable: false,
        children: ['/guide/']
      },
      {
        title: '前端入门',
        collapsable: false,
        children: ['/primary/html', '/primary/css', '/primary/js']
      }
    ],
    sidebarDepth: 3,
    smoothScroll: true
  }
}
