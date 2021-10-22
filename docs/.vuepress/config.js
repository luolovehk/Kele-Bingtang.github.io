const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

const { penName, title } = require('./common/info')

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: penName + '\'s ' + title,
  description: '这个舞台将会被你的才华踩在脚下，同时你也会将它带到新的高度！',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  base: '/blog/',
  head,
  plugins,
  themeConfig,
}
