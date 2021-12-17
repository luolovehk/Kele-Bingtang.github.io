const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

const { penName, title } = require('./common/info')

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: penName + '\'s ' + title,
  description: 'Young Kbt个人博客,VuePress搭建,学习Java、Web,框架,微服务,工具,前端等相关知识,记录生活和技术路程,同时分析IT经验。',
  base: '/notes-blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 显示代码块的行号
  },
  head,
  plugins,
  themeConfig,
}
