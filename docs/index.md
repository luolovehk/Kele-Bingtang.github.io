---
home: true
# heroImage: /img/web.png
heroText: YoungKbt's Blog
tagline: 故事由我书写，旅程由你见证，传奇由她聆听。
# actionText: 立刻进入 →
# actionLink: /web/
# bannerBg: auto # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 前端
    details: JavaScript、ES6、Vue框架等前端技术
    # link: /front/ # 可选
    imgUrl: /img/index/front.png # 可选
  - title: 后端
    details: Java、Web、Spring、Cloud等后端技术
    # link: /java/
    imgUrl: /img/index/backEnd.png
  - title: 文档
    details: 技术文档、教程、技巧、总结等文章
    # link: /technology/
    imgUrl: /img/index/other.png

bannerBg: /img/index/bg.jpg   # 背景图，长度是整个屏幕

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---


<!-- 网页左下角动态gif 小熊猫挥手 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->



#### Demo演示模块
   为了更直观的展示一些代码的效果，博客添加了 demo 模块插件，可查看 demo、源码，以及跳转到codepen在线编辑。**示例**：


::: demo
```html
<template>
  <div class="box-vue">Vue {{ message }}</div>
</template>
<script>
export default {
  data: () => ({ message: 'Hello World' })
}
</script>
<style>
.box-vue { color: red; }
</style>
```
:::

::: demo [react]
```js
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { message: 'Hello World' }
  }
  render () {
    return (
      <div className="box-react">
        React {this.state.message}
      </div>
    )
  }
}
App.__style__ = `
  .box-react { color: #621529; }
`
```
:::

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World! Welcome to EB'
</script>
<style>
#vanilla-box {
  color: #11a8cd;   /* 标题颜色 */
}
</style>

```
:::
