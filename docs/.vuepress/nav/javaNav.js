// Java导航栏
module.exports = {
  text: 'Java', link: '/java/',  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  items: [
    {
      text: 'javaSE',
      items: [
        { text: 'Java基础', link: '/javase/' },
        { text: 'Java注解', link: '/javase/annotation/' },
        { text: 'Java反射', link: '/javase/reflex/' },
        { text: 'JUC多线程', link: '/javase/juc/1' },
        { text: 'JVM', link: '/javase/jvm/' },
      ]
    },
    {
      text: 'Web进阶',
      items: [
        { text: 'JavaWeb', link: '/javaweb/' },
      ]
    },
  ]
}