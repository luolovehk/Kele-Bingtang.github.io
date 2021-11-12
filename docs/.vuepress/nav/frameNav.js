// 框架导航栏
module.exports =  {
  text: '框架', link: '/frames/',
  items: [
    {
      text: '数据库',
      items: [
        { text: 'MyBatis', link: '/mybatis/' },
        { text: 'MyBatis-Plus', link: '/mybatis-plus/' },
      ]
    },
    {
      text: 'Spring生态',
      items: [
        { text: 'Spring', link: '/spring/' },
        { text: 'Spring MVC', link: '/spring-mvc/' },
        { text: 'Spring Boot', link: '/spring-boot/' },
        { text: 'Spring Security', link: '/spring-security/' },
      ]
    },
    {
      text: '消息中间件',
      items: [
        { text: 'ActiveMQ', link: '/activemq/' },
        { text: 'RabbitMQ', link: '/middleware/introduce/' },
        { text: 'RocketMQ', link: '/rocketmq/' },
        { text: 'Kafka', link: '/kafka/' },
      ]
    },
    {
      text: '微服务',
      items: [
        { text: '注册中心', link: '/registry-center/' },
        { text: '服务调用', link: '/service-call/' },
        { text: '服务降级', link: '/service-degradation/' },
        { text: '服务网关', link: '/service-gateway/' },
        { text: '服务配置', link: '/service-config/' },
        { text: '服务总栈', link: '/service-stack/' },
      ]
    },
  ]
}
