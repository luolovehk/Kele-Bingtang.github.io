const dayjs = require('dayjs');
const readFileList = require("../../../utils/modules/readFileList.js");
let { blogCreate } = require("./info.js");

// 不需要检查哪个目录的 md 文档，多个目录逗号隔开
const files = readFileList(['00.目录页']);

// 获取博客创建日期，并去掉 hh:mm:ss（如果有），然后与当前对比，获取相差的天数，就是博客运行天数
blogCreate = blogCreate.toString().split(' ')[0];
const currentDate = dayjs(new Date()).format('YYYY-MM-DD');
blogCreate = dayjs(currentDate).diff(blogCreate, 'day');

const webInfo = `<div style="padding: 0.95rem; font-size: 0.875rem;">
            <div style="text-align: center; color: #888; font-weight: bold; padding: 0 0 10px 0;">
              <i class="iconfont icon-award" style="font-size: 0.875rem; font-weight: 900;width: 1.25em;"></i>
              <span>站点信息</span>
            </div>
            <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
              <div style="display: inline-block;">
                文章数目：
              </div>
              <div style="display: inline-block; float: right;">
                ${files.length} 篇
              </div>
            </div>

            <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
              <div style="display: inline-block;">
                已运行时间：
              </div>
              <div style="display: inline-block; float: right;">
                ${blogCreate} 天
              </div>
            </div>

            <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
              <div style="display: inline-block;">
                本站总字数：
              </div>
              <div style="display: inline-block; float: right;">
                45.5k 字
              </div>
            </div>

            <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
              <div style="display: inline-block;">
                本站被访问了：
              </div>
              <div style="display: inline-block; float: right;">
              <span id="busuanzi_container_site_uv">
                <span id="busuanzi_value_site_uv"></span> 次
              </span>
              </div>
            </div>

            <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
              <div style="display: inline-block;">
                最后活动时间：
              </div>
              <div style="display: inline-block; float: right;">
                2 天前
              </div>
            </div>
          </div>`

module.exports = webInfo;