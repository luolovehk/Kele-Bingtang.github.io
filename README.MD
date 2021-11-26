欢迎来到我的博客，请放下浮躁，细细品尝她，希望不会让你失望。

## 目录页的front matter

``` md
---
pageComponent: # 使用页面组件
  name: Catalogue # 组件名：Catalogue => 目录页组件 ，使用目录页时 必须 设置为Catalogue
  data: # 组件所需数据
    path:  01.学习笔记/01.前端 # 设置为`docs/`下面的某个文件夹相对路径，如‘01.学习笔记/01.前端’ 或 ’01.学习笔记‘ (有序号的要带序号)
    imgUrl: /img/web.png # 目录页内的图片
    description: JavaScript、ES6、Vue框架等前端技术 # 目录描述（可加入a标签）

title:  # 页面标题
date:  # 创建日期
permalink: /note/javascript # 永久链接
sidebar: false # 不显示侧边栏
article: false # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: false # 不显示评论栏
editLink: false # 不显示编辑按钮
---
```

## 笔记文档的front matter

```md
---
title:     # 页面标题
date:     # 创建日期
permalink:  # 永久链接
categories:  # 所在目录

  - 
tags:    # 所属标签
  - 
---
```

## 完整的front matter 

```md
---
title: 标题
date: 2020-02-21 14:40:19
permalink: /pages/a1bc87
categories:
  - 分类1
  - 分类2
tags:
  - 标签1
sidebar: false
article: false
comment: false
editLink: false
author:
 name: 作者
 link: https://xxx.com
sticky: 1  # 置顶，1最高
---
```

## VSCODE代码片段，光标位置设置多个值可供选择

例如，${1|one,two,three|}；$1 位置处可以选择 one,two,three 中一个词填充在此处。

常用变量

- TM_SELECTED_TEXT 当前选中内容或空字符串
- TM_CURRENT_LINE 当前行内容
- TM_CURRENT_WORD 光标处字符或空字符串
- TM_LINE_INDEX 从0开始的行号
- TM_LINE_NUMBER 从1开始的行号
- TM_FILENAME 当前被编辑文档名
- TM_FILENAME_BASE 当前被编辑文档名，没有后缀
- TM_DIRECTORY 当前被编辑文档目录
- TM_FILEPATH 当前被编辑文档全路径
- CLIPBOARD 当前剪切板内容

日期和时间相关变量

- CURRENT_YEAR 当前年
- CURRENT_YEAR_SHORT 当前年后两位
- CURRENT_MONTH 月份，两位数字表示，例如02
- CURRENT_MONTH_NAME 月份全称，例如 'July'
- CURRENT_MONTH_NAME_SHORT 月份简写 ，例如'Jul
- CURRENT_DATE 某天
- CURRENT_DAY_NAME 星期几， 例如'Monday')
- CURRENT_DAY_NAME_SHORT 星期几的简写， 'Mon'
- CURRENT_HOUR 小时，24小时制
- CURRENT_MINUTE 分钟
- CURRENT_SECOND 秒数







