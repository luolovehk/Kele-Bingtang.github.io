(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{676:function(a,t,v){"use strict";v.r(t);var _=v(9),e=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#什么是mq"}},[a._v("什么是MQ")])]),v("li",[v("a",{attrs:{href:"#为什么要用mq"}},[a._v("为什么要用MQ")])]),v("li",[v("a",{attrs:{href:"#mq的分类"}},[a._v("MQ的分类")])]),v("li",[v("a",{attrs:{href:"#mq的选择"}},[a._v("MQ的选择")])])])]),v("p"),a._v(" "),v("h2",{attrs:{id:"什么是mq"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是mq"}},[a._v("#")]),a._v(" 什么是MQ")]),a._v(" "),v("p",[a._v("MQ(message queue)，从字面意思上看，本质是个队列，FIFO 先入先出，只不过队列中存放的内容是 message 而已，还是一种跨进程的通信机制，用于上下游传递消息。在互联网架构中，MQ 是一种非常常 见的上下游「逻辑解耦 + 物理解耦」的消息通信服务。使用了 MQ 之后，消息发送上游只需要依赖 MQ，不用依赖其他服务。")]),a._v(" "),v("h2",{attrs:{id:"为什么要用mq"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用mq"}},[a._v("#")]),a._v(" 为什么要用MQ")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("流量消峰")]),a._v(" "),v("p",[a._v("举个例子，如果订单系统最多能处理一万次订单，这个处理能力应付正常时段的下单时绰绰有余，正常时段我们下单一秒后就能返回结果。但是在高峰期，如果有两万次下单操作系统是处理不了的，只能限制订单超过一万后不允许用户下单。使用消息队列做缓冲，我们可以取消这个限制，把一秒内下的订单分 散成一段时间来处理，这时有些用户可能在下单十几秒后才能收到下单成功的操作，但是比不能下单的体验要好。")])]),a._v(" "),v("li",[v("p",[a._v("应用解耦")]),a._v(" "),v("p",[a._v("以电商应用为例，应用中有订单系统、库存系统、物流系统、支付系统。用户创建订单后，如果耦合调用库存系统、物流系统、支付系统，任何一个子系统出了故障，都会造成下单操作异常。当转变成基于消息队列的方式后，系统间调用的问题会减少很多，比如物流系统因为发生故障，需要几分钟来修复。在这几分钟的时间里，物流系统要处理的内存被缓存在消息队列中，用户的下单操作可以正常完成。当物流系统恢复后，继续处理订单信息即可，中单用户感受不到物流系统的故障，提升系统的可用性。")])])]),a._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108221820.png",alt:"image-20211108221818421"}})]),a._v(" "),v("h2",{attrs:{id:"mq的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mq的分类"}},[a._v("#")]),a._v(" MQ的分类")]),a._v(" "),v("ul",[v("li",[v("p",[v("strong",[a._v("ActiveMQ")])]),a._v(" "),v("p",[a._v("优点：单机吞吐量万级，时效性 ms 级，可用性高，基于主从架构实现高可用性，消息可靠性较 低的概率丢失数据")]),a._v(" "),v("p",[a._v("缺点：官方社区现在对 ActiveMQ 5.x 维护越来越少，高吞吐量场景较少使用")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("Kafka")])]),a._v(" "),v("p",[a._v("大数据的杀手锏，谈到大数据领域内的消息传输，则绕不开 Kafka，这款为大数据而生的消息中间件，以其百万级 TPS 的吞吐量名声大噪，迅速成为大数据领域的宠儿，在数据采集、传输、存储的过程中发挥着举足轻重的作用。目前已经被 LinkedIn，Uber, Twitter, Netflix 等大公司所采纳。")]),a._v(" "),v("p",[a._v("优点: 性能卓越，单机写入 TPS 约在百万条/秒，最大的优点，就是吞吐量高。时效性 ms 级可用性非常高，kafka 是分布式的，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用,消费者采用 Pull 方式获取消息, 消息有序, 通过控制能够保证所有消息被消费且仅被消费一次；有优秀的第三方Kafka Web 管理界面 Kafka-Manager；在日志领域比较成熟，被多家公司和多个开源项目使用；功能支持：功能 较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用")]),a._v(" "),v("p",[a._v("缺点：Kafka 单机超过 64 个队列/分区，Load 会发生明显的飙高现象，队列越多，load 越高，发送消息响应时间变长，使用短轮询方式，实时性取决于轮询间隔时间，消费失败不支持重试；支持消息顺序，但是一台代理宕机后，就会产生消息乱序，社区更新较慢")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("RocketMQ")])]),a._v(" "),v("p",[a._v("RocketMQ 出自阿里巴巴的开源产品，用 Java 语言实现，在设计时参考了 Kafka，并做出了自己的一些改进。被阿里巴巴广泛应用在订单，交易，充值，流计算，消息推送，日志流式处理，binglog 分发等场景。")]),a._v(" "),v("p",[a._v("优点：单机吞吐量十万级，可用性非常高，分布式架构,消息可以做到 0 丢失,MQ 功能较为完善，还是分布式的，扩展性好,支持 10 亿级别的消息堆积，不会因为堆积导致性能下降，源码是 java 我们可以自己阅读源码，定制自己公司的 MQ")]),a._v(" "),v("p",[a._v("缺点：支持的客户端语言不多，目前是 java 及 c++，其中 c++ 不成熟；社区活跃度一般,没有在 MQ 核心中去实现 JMS 等接口,有些系统要迁移需要修改大量代码")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("RabbitMQ")])]),a._v(" "),v("p",[a._v("2007 年发布，是一个在AMQP(高级消息队列协议)基础上完成的，可复用的企业消息系统，是当前最主流的消息中间件之一。")]),a._v(" "),v("p",[a._v("优点：由于 erlang 语言的高并发特性，性能较好；吞吐量到万级，MQ 功能比较完备,健壮、稳定、易用、跨平台、支持多种语言 如：Python、Ruby、.NET、Java、JMS、C、PHP、ActionScript、XMPP、STOMP 等，支持 AJAX 文档齐全；开源提供的管理界面非常棒，用起来很好用,社区活跃度高；更新频率相当高")]),a._v(" "),v("p",[a._v("缺点：商业版需要收费,学习成本较高")])])]),a._v(" "),v("h2",{attrs:{id:"mq的选择"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mq的选择"}},[a._v("#")]),a._v(" MQ的选择")]),a._v(" "),v("ul",[v("li",[v("p",[v("strong",[a._v("Kafka")])]),a._v(" "),v("p",[a._v("Kafka 主要特点是基于 Pull 的模式来处理消息消费，追求高吞吐量，一开始的目的就是用于日志收集和传输，适合产生大量数据的互联网服务的数据收集业务。大型公司建议可以选用，如果有日志采集功能，肯定是首选 kafka 了。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("RocketMQ")])]),a._v(" "),v("p",[a._v("天生为金融互联网领域而生，对于可靠性要求很高的场景，尤其是电商里面的订单扣款，以及业务削峰，在大量交易涌入时，后端可能无法及时处理的情况。RoketMQ 在稳定性上可能更值得信赖，这些业务场景在阿里双 11 已经经历了多次考验，如果你的业务有上述并发场景，建议可以选择 RocketMQ。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("RabbitMQ")])]),a._v(" "),v("p",[a._v("结合 erlang 语言本身的并发优势，性能好时效性微秒级，社区活跃度也比较高，管理界面用起来十分 方便，如果你的数据量没有那么大，中小型公司优先选择功能比较完备的 RabbitMQ。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);