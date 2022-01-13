<template></template>
<script>
// 两个变量分别是背景元素的 class、生成的箭头 class
const banner = "banner";
const banner_arrow = "banner-arrow";
export default {
  mounted() {
    const arrow = document.getElementById(banner_arrow);
    arrow && arrow.parentNode.removeChild(banner_arrow);
    let a = document.createElement("a");
    a.id = banner_arrow;
    a.className = banner_arrow;
    document.getElementsByClassName(banner)[0].append(a);
    let targetA = document.getElementById(banner_arrow);
    targetA.addEventListener("click", (e) => {
      // 添加点击事件
      this.scrollFn();
    });
    // 这里是这几个属性的默认值，建议在 themeConfig 进行配置，它们将覆盖这几个属性值
    let navColor = 1;
    let switchNavColor = false;
    let bgTimeColor = false;
    let bgTimeColorArray = [
      "transparent",
      "rgba(255, 148, 48, .2",
      "rgba(0, 0, 0, .3)",
      "rgba(0, 0, 0, .5)",
    ];
    let descFadeIn = false;
    let descFadeInTime = 200;
    let bubble = false;
    let bubblePosition = 40;
    if (
      this.$themeConfig.indexImg &&
      Object.keys(this.$themeConfig.indexImg).length > 0
    ) {
      navColor =
        this.$themeConfig.indexImg.navColor == undefined
          ? navColor
          : this.$themeConfig.indexImg.navColor;
      switchNavColor =
        this.$themeConfig.indexImg.switchNavColor == undefined
          ? switchNavColor
          : this.$themeConfig.indexImg.switchNavColor;
      bgTimeColor =
        this.$themeConfig.indexImg.bgTimeColor == undefined
          ? bgTimeColor
          : this.$themeConfig.indexImg.bgTimeColor;
      bgTimeColorArray =
        this.$themeConfig.indexImg.bgTimeColorArray == undefined
          ? bgTimeColorArray
          : this.$themeConfig.indexImg.bgTimeColorArray;
      descFadeIn =
        this.$themeConfig.indexImg.descFadeIn == undefined
          ? descFadeIn
          : this.$themeConfig.indexImg.descFadeIn;
      descFadeInTime =
        this.$themeConfig.indexImg.descFadeInTime == undefined
          ? descFadeInTime
          : this.$themeConfig.indexImg.descFadeInTime;
      bubble =
        this.$themeConfig.indexImg.bubble == undefined
          ? bubble
          : this.$themeConfig.indexImg.bubble;
      bubblePosition =
        this.$themeConfig.indexImg.bubblePosition == undefined
          ? bubblePosition
          : this.$themeConfig.indexImg.bubblePosition;
    }
    // 初始化
    if (bgTimeColor) {
      this.bgTimeColor(bgTimeColorArray);
    }
    setTimeout(() => {
      this.noBgBlur();
    }, 200);
    this.blurText(navColor);
    this.watchScroll(navColor, switchNavColor);

    if (descFadeIn) {
      this.textFadeIn(descFadeInTime);
    }
    if (bubble) {
      let canvas = document.createElement("canvas");
      canvas.id = "canvas";
      canvas.style.top = bubblePosition + "%";
      document.getElementsByClassName(banner)[0].append(canvas);
      this.canvasBubble();
    }
  },
  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName(banner)[0].clientHeight; // 获取窗口高度
      window.scrollTo({
        top: windowH,
        behavior: "smooth", // 平滑滚动
      });
    },
    // 监听页面滚动的回调
    watchScroll(navColor, switchNavColor) {
      const windowH = document.getElementsByClassName(banner)[0].clientHeight; // 获取窗口高度
      window.onscroll = () => {
        if (document.documentElement.scrollTop < windowH) {
          this.blurText(navColor);
          this.noBgBlur();
        } else {
          if (switchNavColor && navColor == 1) {
            this.blurText(2);
          } else if (switchNavColor && navColor == 2) {
            this.blurText(1);
          }
          this.bgBlur();
        }
      };
    },
    // 导航栏不透明
    bgBlur() {
      let navbar = document.getElementsByClassName("navbar")[0];
      navbar.className = "navbar navbar1 blur";
    },
    // 导航栏透明
    noBgBlur() {
      let navbar = document.getElementsByClassName("navbar")[0];
      navbar.className = "navbar navbar2 blur";
    },
    // 导航栏的字体颜色
    blurText(navColor) {
      let title = document.getElementsByClassName("site-name")[0];
      let search = document.getElementsByClassName("search-box")[0];
      let nav = document.getElementsByClassName("nav-links")[0];
      if (navColor == 1) {
        title.className = "site-name site-name1 can-hide";
        nav.className = "nav-links nav-links1 can-hide";
        search.className = "search-box search-box1";
      } else if (navColor == 2) {
        title.className = "site-name site-name2 can-hide";
        nav.className = "nav-links nav-links2 can-hide";
        search.className = "search-box search-box2";
      }
    },
    // 背景色随时间变化
    bgTimeColor(bgTimeColorArray) {
      var time = new Date().getHours();
      let div = document.createElement("div");
      div.className = "banner-color";
      if (time >= 6 && time < 16) {
        div.style.backgroundColor = bgTimeColorArray[0];
      } else if (time >= 16 && time <= 19) {
        div.style.backgroundColor = bgTimeColorArray[1];
      } else if (time >= 19 && time < 24) {
        div.style.backgroundColor = bgTimeColorArray[2];
      } else if (time >= 0 && time < 6) {
        div.style.backgroundColor = bgTimeColorArray[3];
      }
      document.getElementsByClassName(banner)[0].parentNode.append(div);
    },
    // 字体淡入
    textFadeIn(descFadeInTime) {
      let index = 0;
      let description =
        document.getElementsByClassName("description")[0].innerText;
      document.getElementsByClassName("description")[0].innerText = "";
      function fadeIn() {
        if (document.getElementsByClassName("description")[0]) {
          document.getElementsByClassName("description")[0].innerText =
            description.substring(0, index++);
          if (index > description.length) {
            clearInterval(interval);
          }
        }
      }
      let interval = setInterval(fadeIn, descFadeInTime);
    },
    // 气泡效果
    canvasBubble() {
      var canvas = document.getElementById("canvas");
      var cxt = canvas.getContext("2d");
      function Dot() {
        this.alive = true;
        this.x = Math.round(Math.random() * canvas.width);
        this.y = Math.round(Math.random() * canvas.height);
        this.diameter = Math.random() * 10.8;
        this.ColorData = {
          Red: Math.round(Math.random() * 255),
          Green: Math.round(Math.random() * 255),
          Blue: Math.round(Math.random() * 255),
        };
        this.alpha = 0.1;
        this.color =
          "rgba(" +
          this.ColorData.Red +
          ", " +
          this.ColorData.Green +
          "," +
          this.ColorData.Blue +
          "," +
          this.alpha +
          ")";
        this.velocity = {
          x: Math.round(Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.7,
          y: Math.round(Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.7,
        };
      }
      Dot.prototype = {
        Draw: function () {
          cxt.fillStyle = this.color;
          cxt.beginPath();
          cxt.arc(this.x, this.y, this.diameter, 0, Math.PI * 2, false);
          cxt.fill();
        },
        Update: function () {
          if (this.alpha < 0.8) {
            this.alpha += 0.01;
            this.color =
              "rgba(" +
              this.ColorData.Red +
              ", " +
              this.ColorData.Green +
              "," +
              this.ColorData.Blue +
              "," +
              this.alpha +
              ")";
          }
          this.x += this.velocity.x;
          this.y += this.velocity.y;
          if (
            this.x > canvas.width + 5 ||
            this.x < 0 - 5 ||
            this.y > canvas.height + 5 ||
            this.y < 0 - 5
          ) {
            this.alive = false;
          }
        },
      };
      var Event = {
        rArray: [],
        Init: function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          for (var x = 0; x < 150; x++) {
            this.rArray.push(new Dot());
          }
          this.Update();
        },
        Draw: function () {
          cxt.clearRect(0, 0, canvas.width, canvas.height);
          this.rArray.forEach(function (dot) {
            dot.Draw();
          });
        },
        Update: function () {
          if (Event.rArray.length < 150) {
            for (var x = Event.rArray.length; x < 150; x++) {
              Event.rArray.push(new Dot());
            }
          }
          Event.rArray.forEach(function (dot) {
            dot.Update();
          });
          Event.rArray = Event.rArray.filter(function (dot) {
            return dot.alive;
          });
          Event.Draw();
          requestAnimationFrame(Event.Update);
        },
      };
      window.onresize = function () {
        Event.rArray = [];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      Event.Init();
    },
  },
};
</script>

<style>
/* 如果全屏背景图，则下调衔接到大图的下面 */
.body-bg {
  top: 6vh;
}
/* 图片大小 */
.vdoing-index-class .home-wrapper .banner {
  margin-top: 0 !important;
  height: 100vh;
}
/* 图片中间的签名和标题位置 */
.banner-conent {
  margin-top: 20vh !important;
}
/* 下面是配合 js 用的 class 样式 */
.vdoing-index-class .navbar1 {
  background-color: var(--blurBg);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
  backdrop-filter: saturate(200%) blur(20px);
}
.vdoing-index-class .navbar2 {
  background-color: transparent;
  box-shadow: none;
  backdrop-filter: none;
}
.vdoing-index-class .nav-links1 > .nav-item > a,  /* 没有二级导航的一级导航 */
  .vdoing-index-class .nav-links1 > a,   /* GitHub */
  .vdoing-index-class .nav-links1 .dropdown-title a:hover,   /* 鼠标悬停 */
  .vdoing-index-class .nav-links1 .title,     /* 不能跳转的一级导航 */
  .vdoing-index-class .nav-links1 .dropdown-title > .link-title,  /* 能跳转的一级导航 */
  .vdoing-index-class .site-name1  /* 左侧的名字 */ {
  color: var(--textColor) !important;
}
.vdoing-index-class .search-box1 input {
  border-color: var(--textColor) !important;
  color: var(--textColor) !important;
}
.vdoing-index-class .nav-links2 > .nav-item > a,  /* 没有二级导航的一级导航 */
  .vdoing-index-class .nav-links2 > a,   /* GitHub */
  .vdoing-index-class .nav-links2 .dropdown-title a:hover,   /* 鼠标悬停 */
  .vdoing-index-class .nav-links2 .title,     /* 不能跳转的一级导航 */
  .vdoing-index-class .nav-links2 .dropdown-title > .link-title,  /* 能跳转的一级导航 */
  .vdoing-index-class .site-name2  /* 左侧的名字 */ {
  color: #fff !important;
}
.vdoing-index-class .search-box2 input {
  border-color: #fff !important;
  color: #fff !important;
}
/* 下面是箭头相关的样式 */
.banner-arrow {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 15%;
  margin-left: -10px;
  cursor: pointer;
  z-index: 999;
}
@-webkit-keyframes bounce-in {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  80% {
    transform: translateY(0);
  }
  to {
    transform: translateY(0);
  }
}
.banner-arrow::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.banner-arrow::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
/* 随时间变化的背景色元素 */
.vdoing-index-class .banner-color {
  width: 100%;
  min-height: 450px;
  overflow: hidden;
  margin-top: 0;
  height: 100vh;
  position: absolute;
  top: 0;
}
/* 气泡效果的画布元素 */
#canvas {
  position: absolute;
  top: 0;
}
</style>