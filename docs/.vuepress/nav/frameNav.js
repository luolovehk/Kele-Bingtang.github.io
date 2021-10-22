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
        { text: 'RabbitMQ', link: '/rabbitmq/' },
        { text: 'RocketMQ', link: '/rocketmq/' },
        { text: 'Kafka', link: '/kafka/' },
      ]
    },
  ]
}
