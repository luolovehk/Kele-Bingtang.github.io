// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: 'Young Kbt个人博客,VuePress搭建,学习Java、Web、框架、微服务、工具、前端等相关知识,记录生活和技术路程',
    },
  ],
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

  ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  // 百度统计 js
  ['script', {}, 'var _hmt = _hmt || [];(function() {  var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?267c5680c2ffb468ca29c45ffe6801da"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();'],

  /*  [
     'script',
     {
       'data-ad-client': 'ca-pub-7828333725993554',
       async: 'async',
       src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
     },
   ], */ // 网站关联Google AdSense 与 html格式广告支持
]
