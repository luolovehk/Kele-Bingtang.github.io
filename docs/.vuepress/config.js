const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

const { penName, title } = require('./common/info')

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // 如果使用 locales 的 title 和 description，则下方的 title 和 description 失效
  title: penName + title,
  description: 'Young Kbt个人博客, VuePress搭建, 使用了 Vdoing 主题, 学习Java, Web, 框架, 微服务, 工具, 前端等相关知识, 记录生活和技术路程, 同时分享编程技巧。',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 显示代码块的行号
  },
  // 多语言支持
  // locales: {
  //   '/': {
  //     lang: '简体中文',
  //     title: penName + title,
  //     description: 'Young Kbt个人博客, VuePress搭建, 使用了 Vdoing 主题, 学习Java, Web, 框架, 微服务, 工具, 前端等相关知识, 记录生活和技术路程, 同时分享编程技巧。'
  //   },
  //   '/en/': {
  //     lang: 'English', // 将会被设置为 <html> 的 lang 属性
  //     title: penName + title,
  //     description: 'Young Kbt personal blog, built by vuepress, uses the vdoing theme to learn Java, web, framework, microservices, tools, front-end and other related knowledge, record life and technology journey, and share programming skills at the same time'
  //   }
  // },
  head,
  plugins,
  themeConfig,
}
