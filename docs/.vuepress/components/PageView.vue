<template>
  <!-- Young Kbt -->
  <!-- 将这段 div 复制到 node_modules 目录下的 vuepress-theme-voding 目录下的 components 目录下的 ArticleInfo.vue 里的 108 行代码左右处 -->
  <div class="view iconfont icon-view" title="浏览量">
    <span id="busuanzi_container_page_pv" style="display: none">
      <a href="javascript:;" id="busuanzi_value_page_pv"></a>
    </span>
  </div>
</template>

<script>
// 将下面引入 busuanzi 的代码复制到 node_modules 目录下的 vuepress-theme-voding 目录下的 layouts 目录下的 Layout.vue 里的 118 行代码左右处
// Young Kbt
const busuanzi = require("busuanzi.pure.js");

export default {
  mounted() {
    // mountedView();
    // busuanzi.fetch();
  },
  watch: {
    // Young Kbt
    // 将这段 $route 函数复制到 node_modules 目录下的 vuepress-theme-voding 目录下的 layouts 目录下的 Layout.vue 里的 282 行代码左右处
    $route(to, from) {
      if (to.path != from.path) {
        busuanzi.fetch();
      }
    },
  },
};


function mountedView(moutedEvent = ".articleInfo-wrap > .articleInfo > .info") {
  var template = document.createElement("div");
  template.title = "浏览量";
  template.className = "view iconfont icon-view";
  template.setAttribute("data-v-424c3eec", "");
  template.innerHTML =
    '<span id="busuanzi_container_page_pv" style="display: none"><a data-v-424c3eec href="javascript:;" id="busuanzi_value_page_pv"></a></span>';

  var i = 0;
  let interval = setInterval(() => {
    i++;
    const view = document.querySelector(moutedEvent);
    if (view) {
      if (!isMountedView(view, moutedEvent)) {
        view.appendChild(template);
        clearInterval(interval);
      }
    } else if (i > 5 * 60 * 2) {
      // 两分钟后清除
      clearInterval(interval);
    }
  }, 200);
}

function isMountedView(element, parentElement) {
  if (element.parentNode == parentElement) {
    return true;
  } else {
    return false;
  }
}
</script>

<style>
</style>