// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: 'Young Kbt个人博客，VuePress搭建，学习Java、web、框架、微服务、工具、前端等相关知识',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  
  ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],

 /*  [
    'script',
    {
      'data-ad-client': 'ca-pub-7828333725993554',
      async: 'async',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    },
  ], */ // 网站关联Google AdSense 与 html格式广告支持
]
