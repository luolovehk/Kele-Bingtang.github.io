// nav
const javaNav = require("../nav/javaNav");
const databaseNav = require("../nav/databaseNav");
const frameNav = require("../nav/frameNav");
const cloudNav = require("../nav/cloudNav");
const toolNav = require("../nav/toolNav");
const frontEnd = require("../nav/frontEnd");
const indexNav = require("../nav/indexNav");
module.exports = [
  {
    text: '首页', link: '/'
  },
  javaNav,   //Java导航
  databaseNav,  // 数据库导航
  frameNav,   // 框架导航
  cloudNav,  // 微服务导航
  toolNav,  // 工具导航
  frontEnd,  // 前端导航
  indexNav   //索引导航
]
