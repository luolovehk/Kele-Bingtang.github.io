// 没有用到该文件
const busuanzi = require("busuanzi.pure.js");

export default {
  mounted() {
    var template = document.createElement('div');
    template.title = '浏览量';
    template.className = 'view iconfont icon-view';
    template.setAttribute('data-v-424c3eec', '');
    template.innerHTML = '<span id="busuanzi_container_page_pv" style="display: none"><a data-v-424c3eec href="javascript:;" id="busuanzi_value_page_pv"></a></span>';

    mountedView();
    busuanzi.fetch();
  },
  // watch: {
  //   // Young Kbt
  //   $route(to, from) {
  //     if (to.path != from.path) {
  //       busuanzi.fetch();
  //     }
  //   },
  // },
}

function mountedView(moutedEvent = ".articleInfo-wrap > .articleInfo > .info") {
  var i = 0;
  let interval = setInterval(() => {
    i++;
    const view = document.querySelector(moutedEvent);
    if (view) {
      if (!isMountedView(view, moutedEvent)) {
        view.appendChild(template);
        clearInterval(interval);
      }
    }else if(i > 5 * 30){  // 半分钟后清除
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