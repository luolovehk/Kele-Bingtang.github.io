<template></template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.addExpand(40);
    }, 1000);
  },
  watch: {
    $route(to, from) {
      setTimeout(() => {
        this.addExpand(40);
      }, 1000);
    },
  },
  methods: {
    // 隐藏代码块后，保留 40 的代码块高度
    addExpand(hiddenHeight = 40) {
      let modes = document.getElementsByClassName("line-numbers-mode");
      // 遍历出每一个代码块
      for (let i = 0; i < modes.length; i++) {
        // 首先获取 expand 元素
        let expand = modes[i].getElementsByClassName("expand")[0];
        // expand 元素不存在，则进入 if 创建
        if (!expand) {
          // 获取代码块原来的高度，进行备份
          let modeHeight = modes[i].offsetHeight;
          // display:none 的代码块需要额外处理
          if (modeHeight == 0) {
            modeHeight = this.getHiddenElementHight(modes[i]);
          }
          // modeHeight 比主题多 12，所以减掉，并显示赋值，触发动画过渡效果
          modeHeight -= 12;
          modes[i].style.height = modeHeight + "px";
          // 获取代码块的各个元素
          let pre = modes[i].getElementsByTagName("pre")[0];
          let wrapper = modes[i].getElementsByClassName(
            "line-numbers-wrapper"
          )[0];
          // 创建箭头元素
          const div = document.createElement("div");
          div.className = "expand icon-xiangxiajiantou iconfont";
          // 箭头点击事件
          div.onclick = () => {
            // 代码块已经被隐藏，则进入 if 循环，如果没有被隐藏，则进入 else 循环
            if (parseInt(modes[i].style.height) == hiddenHeight) {
              div.className = "expand icon-xiangxiajiantou iconfont";
              modes[i].style.height = modeHeight + "px";
              setTimeout(() => {
                pre.style.display = "block";
                wrapper.style.display = "block";
              }, 80);
            } else {
              div.className = "expand icon-xiangxiajiantou iconfont closed";
              modes[i].style.height = hiddenHeight + "px";
              setTimeout(() => {
                pre.style.display = "none";
                wrapper.style.display = "none";
              }, 300);
            }
          };
          modes[i].append(div);
        }
      }
    },
    getHiddenElementHight(hiddenElement) {
      let modeHeight;
      if (
        hiddenElement.parentNode.style.display == "none" ||
        hiddenElement.parentNode.className !=
          "theme-code-block theme-code-block__active"
      ) {
        hiddenElement.parentNode.style.display = "block";
        modeHeight = hiddenElement.offsetHeight;
        hiddenElement.parentNode.style.display = "none";
        // 清除 vuepress 自带的 deetails 多选代码块
        if (hiddenElement.parentNode.className == "theme-code-block") {
          hiddenElement.parentNode.style.display = "";
        }
      }
      return modeHeight;
    },
  },
};
</script>

<style>
.line-numbers-mode {
  overflow: hidden;
  transition: height 0.3s;
}
.expand {
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 4.5em;
  color: rgba(150, 150, 150, 0.7);
  font-weight: 900;
  transition: transform 0.3s;
}
.theme-vdoing-content pre[class*="language-"] {
  margin: 0 0 0.85rem 0 !important;
}
.closed {
  transform: rotate(90deg) translateY(-3px);
  transition: all 0.3s;
}
.code-copy {
  top: 0.8rem !important;
}
</style>