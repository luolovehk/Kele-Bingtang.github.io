(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{617:function(v,_,t){"use strict";t.r(_);var l=t(9),e=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"大厂面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大厂面试题"}},[v._v("#")]),v._v(" 大厂面试题")]),v._v(" "),t("blockquote",[t("p",[v._v("支付宝")])]),v._v(" "),t("p",[v._v("支付宝三面：JVM 性能调优都做了什么？")]),v._v(" "),t("blockquote",[t("p",[v._v("小米")])]),v._v(" "),t("p",[v._v("有做过 JVM 内存优化吗？")]),v._v(" "),t("p",[v._v("从 SQL、JVM、架构、数据库四个方面讲讲优化思路。")]),v._v(" "),t("blockquote",[t("p",[v._v("蚂蚁金服")])]),v._v(" "),t("p",[v._v("JVM 的编译优化？")]),v._v(" "),t("p",[v._v("jvm 性能调优都做了什么？")]),v._v(" "),t("p",[v._v("JVM 诊断调优工具用过哪些？")]),v._v(" "),t("p",[v._v("二面：JVM 怎样调优，堆内存、栈空间设置多少合适？")]),v._v(" "),t("p",[v._v("三面：JVM 相关的分析工具使用过的有哪些？具体的性能调优步骤如何？")]),v._v(" "),t("blockquote",[t("p",[v._v("阿里")])]),v._v(" "),t("p",[v._v("如何进行 JVM 调优？有哪些方法？")]),v._v(" "),t("p",[v._v("如何理解内存泄漏问题？有哪些情况会导致内存泄漏？如何解决？")]),v._v(" "),t("blockquote",[t("p",[v._v("字节跳动")])]),v._v(" "),t("p",[v._v("三面：JVM 如何调优、参数怎么调？")]),v._v(" "),t("blockquote",[t("p",[v._v("拼多多")])]),v._v(" "),t("p",[v._v("从 SQL、JVM、架构、数据库四个方面讲讲优化思路。")]),v._v(" "),t("blockquote",[t("p",[v._v("京东")])]),v._v(" "),t("p",[v._v("JVM 诊断调优工具用过哪些？")]),v._v(" "),t("p",[v._v("每秒几十万并发的秒杀系统为什么会频繁发生 GC？")]),v._v(" "),t("p",[v._v("日均百万级交易系统如何优化 JVM？")]),v._v(" "),t("p",[v._v("线上生产系统 OOM 如何监控及定位与解决？")]),v._v(" "),t("p",[v._v("高并发系统如何基于 G1 垃圾回收器优化性能？")]),v._v(" "),t("h2",{attrs:{id:"背景说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景说明"}},[v._v("#")]),v._v(" 背景说明")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("生产环境中的问题")])])]),v._v(" "),t("ul",[t("li",[v._v("生产环境发生了内存溢出该如何处理？")]),v._v(" "),t("li",[v._v("生产环境应该给服务器分配多少内存合适？")]),v._v(" "),t("li",[v._v("如何对垃圾回收器的性能进行调优？")]),v._v(" "),t("li",[v._v("生产环境 CPU 负载飙高该如何处理？")]),v._v(" "),t("li",[v._v("生产环境应该给应用分配多少线程合适？")]),v._v(" "),t("li",[v._v("不加 log，如何确定请求是否执行了某一行代码？")]),v._v(" "),t("li",[v._v("不加 log，如何实时查看某个方法的入参与返回值？")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("为什么要调优")])])]),v._v(" "),t("ul",[t("li",[v._v("防止出现 OOM")]),v._v(" "),t("li",[v._v("解决 OOM")]),v._v(" "),t("li",[v._v("减少 Full GC 出现的频率")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("不同阶段的考虑")])])]),v._v(" "),t("ul",[t("li",[v._v("上线前")]),v._v(" "),t("li",[v._v("项目运行阶段")]),v._v(" "),t("li",[v._v("线上出现 OOM")])]),v._v(" "),t("h2",{attrs:{id:"调优概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调优概述"}},[v._v("#")]),v._v(" 调优概述")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("监控的依据")])])]),v._v(" "),t("ul",[t("li",[v._v("运行日志")]),v._v(" "),t("li",[v._v("异常堆栈")]),v._v(" "),t("li",[v._v("GC 日志")]),v._v(" "),t("li",[v._v("线程快照")]),v._v(" "),t("li",[v._v("堆转储快照")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("调优的大方向")])])]),v._v(" "),t("ul",[t("li",[v._v("合理地编写代码")]),v._v(" "),t("li",[v._v("充分并合理的使用硬件资源")]),v._v(" "),t("li",[v._v("合理地进行 JVM 调优")])]),v._v(" "),t("h2",{attrs:{id:"性能优化的步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化的步骤"}},[v._v("#")]),v._v(" 性能优化的步骤")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("第 1 步（发现问题）：性能监控")])])]),v._v(" "),t("p",[v._v("一种以非强行或者入侵方式 "),t("strong",[v._v("收集或查看")]),v._v(" 应用运营性能数据的活动。")]),v._v(" "),t("p",[v._v("监控通常是指一种在生产、质量评估或者开发环境下实施的带有 "),t("strong",[v._v("预防或主动性")]),v._v(" 的活动。")]),v._v(" "),t("p",[v._v("当应用相关干系人提出性能问题却 "),t("strong",[v._v("没有提供足够多的线索时")]),v._v("，首先我们需要进行性能监控，随后是性能分析。")]),v._v(" "),t("p",[v._v("性能监控内容如下：")]),v._v(" "),t("ul",[t("li",[v._v("GC 频繁")]),v._v(" "),t("li",[v._v("cpu load 过高")]),v._v(" "),t("li",[v._v("OOM")]),v._v(" "),t("li",[v._v("内存泄露")]),v._v(" "),t("li",[v._v("死锁")]),v._v(" "),t("li",[v._v("程序响应时间较长")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("第 2 步（排查问题）：性能分析")])])]),v._v(" "),t("p",[v._v("一种以 "),t("strong",[v._v("侵入方式")]),v._v(" 收集运行性能数据的活动，它会影响应用的吞吐量或响应性。")]),v._v(" "),t("p",[v._v("性能分析是针对性能问题的答复结果，关注的范围通常比性能监控更加集中。")]),v._v(" "),t("p",[v._v("性能分析很少在生产环境下进行，通常是在质量评估、"),t("strong",[v._v("系统测试或者开发环境下进行")]),v._v("，是性能监控之后的步骤。")]),v._v(" "),t("p",[v._v("性能分析内容如下：")]),v._v(" "),t("ul",[t("li",[v._v("打印 GC 日志，通过 GCviewer 或者 "),t("code",[v._v("http://gceasy.io")]),v._v(" 来分析异常信息")]),v._v(" "),t("li",[v._v("灵活运用命令行工具、jstack、jmap、jinfo 等")]),v._v(" "),t("li",[v._v("dump 出堆文件，使用内存分析工具分析文件")]),v._v(" "),t("li",[v._v("使用阿里 Arthas、jconsole、JVisualVM 来实时查看 JVM 状态")]),v._v(" "),t("li",[v._v("jstack 查看堆栈信息")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("第 3 步（解决问题）：性能调优")])])]),v._v(" "),t("p",[v._v("一种为改善应用响应性或香吐量而更改参数、源代码、属性配置的活动，性能调优是在性能监控、性能分析之后的活动。")]),v._v(" "),t("p",[v._v("性能调优内容如下：")]),v._v(" "),t("ul",[t("li",[v._v("适当增加内存，根据业务背景选择垃圾回收器")]),v._v(" "),t("li",[v._v("优化代码，控制内存使用")]),v._v(" "),t("li",[v._v("增加机器，分散节点压力")]),v._v(" "),t("li",[v._v("合理设置线程池线程数量")]),v._v(" "),t("li",[v._v("使用中间件提高程序效率，比如缓存、消息队列等")]),v._v(" "),t("li",[v._v("其他 ......")])]),v._v(" "),t("h2",{attrs:{id:"性能评价-测试指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能评价-测试指标"}},[v._v("#")]),v._v(" 性能评价/测试指标")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("停顿时间（或响应时间）")])])]),v._v(" "),t("p",[v._v("响应时间：提交请求和返回该请求的响应之间使用的时间，一般比较关注平均响应时间。常用操作的响应时间列表：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[v._v("操作")]),v._v(" "),t("th",{staticStyle:{"text-align":"left"}},[v._v("响应时间")])])]),v._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("打开一个站点")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("几秒")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("数据库查询一条记录（有索引）")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("十几毫秒")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("机械磁盘一次寻址定位")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("4 毫秒")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("从机械磁盘顺序读取 1M 数据")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("2 毫秒")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("从 SSD 磁盘顺序读取 1M 数据")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("0.3 毫秒")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("从远程分布式换成 Redis 读取一个数据")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("0.5 毫秒")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("从内存读取 1M 数据")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("十几微妙")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("Java 程序本地方法调用")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("几微妙")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[v._v("网络传输 2Kb 数据")]),v._v(" "),t("td",{staticStyle:{"text-align":"left"}},[v._v("1 微妙")])])])]),v._v(" "),t("p",[v._v("在垃圾回收环节中：")]),v._v(" "),t("ul",[t("li",[v._v("暂停时间：执行垃圾收集时，程序的工作线程被暂停的时间")]),v._v(" "),t("li",[t("code",[v._v("-XX:MaxGCPauseMillis")]),v._v(" 参数可以设置暂停时间")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("吞吐量")])])]),v._v(" "),t("ul",[t("li",[v._v("对单位时间内完成的工作量（请求）的量度")]),v._v(" "),t("li",[v._v("在 GC 中：运行用户代码的时间占总运行时间的比例（总运行时间：程序的运行时间 + 内存回收的时间）")]),v._v(" "),t("li",[v._v("吞吐量为 "),t("code",[v._v("1 - 1 / (1 + n)")]),v._v("，其中 "),t("code",[v._v("-XX::GCTimeRatio=n")])])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("并发数")])])]),v._v(" "),t("p",[v._v("同一时刻，对服务器有实际交互的请求数。")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("内存占用")])])]),v._v(" "),t("p",[v._v("Java 堆区所占的内存大小。")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("相互间的关系")])])]),v._v(" "),t("p",[v._v("以高速公路通行状况为例：")]),v._v(" "),t("ul",[t("li",[v._v("吞吐量：每天通过高速公路收费站的车辆的数据（也可以理解为收费站收取的高速费）")]),v._v(" "),t("li",[v._v("并发数：高速公路上正在行驶的车辆的数目")]),v._v(" "),t("li",[v._v("响应时间：车速")])])])}),[],!1,null,null,null);_.default=e.exports}}]);