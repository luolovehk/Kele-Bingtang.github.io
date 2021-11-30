const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

const { penName, title } = require('./common/info')

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: penName + '\'s ' + title,
  description: '故事由我书写，旅程由你见证，传奇由她聆听。',
  base: '/notes-blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 显示代码块的行号
  },
  head,
  plugins,
  themeConfig,
}
