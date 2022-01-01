<template>
  <!-- Young Kbt -->
  <div class="web-info card-box">
    <div class="webinfo-title">
      <i
        class="iconfont icon-award"
        style="font-size: 0.875rem; font-weight: 900; width: 1.25em"
      ></i>
      <span>站点信息</span>
    </div>
    <div class="webinfo-item">
      <div class="webinfo-item-title">文章数目：</div>
      <div class="webinfo-content">{{ mdFileCount }} 篇</div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">已运行时间：</div>
      <div class="webinfo-content">{{ createToNowDay }} 天</div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">本站总字数：</div>
      <div class="webinfo-content">{{ totalWords }} 字</div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">最后活动时间：</div>
      <div class="webinfo-content">
        {{ lastActiveDate > 1 ? lastActiveDate + " 天前" : "今天" }}
      </div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">本站被访问了：</div>
      <div class="webinfo-content">
        <span id="busuanzi_container_site_pv">
          <span id="busuanzi_value_site_pv"></span> 次
        </span>
      </div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">您的访问排名：</div>
      <div class="webinfo-content busuanzi">
        <span id="busuanzi_container_site_uv">
          <span id="busuanzi_value_site_uv"></span>
          名
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getDay } from "../webSiteInfo/utils";
const busuanzi = require("busuanzi.pure.js");
export default {
  data() {
    return {
      // Young Kbt
      mdFileCount: 0, // markdown 文档总数
      createToNowDay: 0, // 博客创建时间距今多少天
      lastActiveDate: 0, // 最后活动时间
      totalWords: 0, // 本站总字数
    };
  },
  mounted() {
    // Young Kbt
    if (Object.keys(this.$themeConfig.blogInfo).length > 0) {
      let { blogCreate, mdFileCountType, totalWords, moutedEvent } =
        this.$themeConfig.blogInfo;
      if(!blogCreate){
        blogCreate = new Date();
      }
      if(!mdFileCountType){
        mdFileCountType = 'archives';
      }
      // 已运行时间
      this.createToNowDay = getDay(blogCreate);
      // 文章数目
      if (mdFileCountType != "archives") {
        this.mdFileCount = mdFileCountType.length || 0;
      } else {
        this.mdFileCount = this.$filterPosts.length || 0;
      }
      // 本站总字数
      this.totalWords = totalWords || 0;
      // 最后一次活动时间
      this.lastActiveDate = getDay(this.$sortPosts[0].lastUpdated) || '1s 前';
      
      mountedWebInfo(moutedEvent || ".tags-wrapper");
      getViewCouter();
    }
  },
};

function mountedWebInfo(moutedEvent = ".tags-wrapper") {
  let interval = setInterval(() => {
    const tagsWrapper = document.querySelector(moutedEvent);
    const webInfo = document.querySelector(".web-info");
    if (tagsWrapper && webInfo) {
      if (!isSiblilngNode(tagsWrapper, webInfo)) {
        tagsWrapper.parentNode.insertBefore(webInfo, tagsWrapper.nextSibling);
        clearInterval(interval);
      }
    }
  }, 200);
}

function isSiblilngNode(element, siblingNode) {
  if (element.parentNode == siblingNode.parentNode) {
    return true;
  } else {
    return false;
  }
}

function getViewCouter() {
  var i = 0;
  let interval = setInterval(() => {
    i++;
    const pv = document.querySelector("#busuanzi_value_site_pv");
    const uv = document.querySelector("#busuanzi_value_site_uv");
    if (pv.innerText == "" && uv.innerText == "") {
      // 获取访问量
      busuanzi.fetch();
      if (i > 10 * 30) {
        clearInterval(interval); // 半分钟无法获取，则取消获取
      }
    } else {
      clearInterval(interval);
    }
  }, 100);
}
</script>

<style>
.web-info {
  font-size: 0.875rem;
  padding: 0.95rem;
}
.webinfo-title {
  text-align: center;
  color: #888;
  font-weight: bold;
  padding: 0 0 10px 0;
}
.webinfo-item {
  padding: 8px 0 0;
  margin: 0;
}
.webinfo-item-title {
  display: inline-block;
}
.webinfo-content {
  display: inline-block;
  float: right;
}
</style>