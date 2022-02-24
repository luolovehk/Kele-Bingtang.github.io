(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{703:function(_,t,v){"use strict";v.r(t);var d=v(9),r=Object(d.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("笔记")]),_._v(" "),v("p",[_._v("这里是 "),v("code",[_._v("ngx_lua")]),_._v(" 模块的文档表总结。")]),_._v(" "),v("div",{staticClass:"custom-block right"},[v("p",[_._v("2021-11-30 @Young Kbt")])])]),_._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#常量"}},[_._v("常量")])]),v("li",[v("a",{attrs:{href:"#api"}},[_._v("API")])]),v("li",[v("a",{attrs:{href:"#指令"}},[_._v("指令")])])])]),v("p"),_._v(" "),v("p",[v("a",{attrs:{href:"https://www.kancloud.cn/qq13867685/openresty-api-cn/159175",target:"_blank",rel:"noopener noreferrer"}},[_._v("OpenRestry 中文文档"),v("OutboundLink")],1)]),_._v(" "),v("h2",{attrs:{id:"常量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[_._v("#")]),_._v(" 常量")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("说明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("Core constants")]),_._v(" "),v("td",[_._v("ngx.OK　　　　　　　(0)"),v("br"),_._v("ngx.ERROR　　　　　(-1)"),v("br"),_._v("ngx.AGAIN　　　　　(-2)"),v("br"),_._v("ngx.DONE　　　　　(-4)"),v("br"),_._v("ngx.DECLINED　　　(-5)"),v("br"),_._v("ngx.nil")])]),_._v(" "),v("tr",[v("td",[_._v("HTTP method constants")]),_._v(" "),v("td",[_._v("ngx.HTTP_GET"),v("br"),_._v("ngx.HTTP_HEAD"),v("br"),_._v("ngx.HTTP_PUT"),v("br"),_._v("ngx.HTTP_POST"),v("br"),_._v("ngx.HTTP_DELETE"),v("br"),_._v("ngx.HTTP_OPTIONS  "),v("br"),_._v("ngx.HTTP_MKCOL    "),v("br"),_._v("ngx.HTTP_COPY      "),v("br"),_._v("ngx.HTTP_MOVE     "),v("br"),_._v("ngx.HTTP_PROPFIND "),v("br"),_._v("ngx.HTTP_PROPPATCH "),v("br"),_._v("ngx.HTTP_LOCK "),v("br"),_._v("ngx.HTTP_UNLOCK    "),v("br"),_._v("ngx.HTTP_PATCH   "),v("br"),_._v("ngx.HTTP_TRACE  "),v("br")])]),_._v(" "),v("tr",[v("td",[_._v("HTTP status constants")]),_._v(" "),v("td",[_._v("ngx.HTTP_OK　　　　　　　　　　　　　　(200)"),v("br"),_._v("ngx.HTTP_CREATED　　　　　　　　　　　 (201)"),v("br"),_._v("ngx.HTTP_SPECIAL_RESPONSE　　　　　　　(300)"),v("br"),_._v("ngx.HTTP_MOVED_PERMANENTLY　　　　　(301)"),v("br"),_._v("ngx.HTTP_MOVED_TEMPORARILY　　　　　(302)"),v("br"),_._v("ngx.HTTP_SEE_OTHER　　　　　　　　　　(303)"),v("br"),_._v("ngx.HTTP_NOT_MODIFIED　　　　　　　　(304)"),v("br"),_._v("ngx.HTTP_BAD_REQUEST　　　　　　　　　(400)"),v("br"),_._v("ngx.HTTP_UNAUTHORIZED　　　　　　　　(401)"),v("br"),_._v("ngx.HTTP_FORBIDDEN　　　　　　　　　　(403)"),v("br"),_._v("ngx.HTTP_NOT_FOUND　　　　　　　　　　(404)"),v("br"),_._v("ngx.HTTP_NOT_ALLOWED　　　　　　　　　(405)"),v("br"),_._v("ngx.HTTP_GONE　　　　　　　　　　　　　(410)"),v("br"),_._v("ngx.HTTP_INTERNAL_SERVER_ERROR　　　　(500)"),v("br"),_._v("ngx.HTTP_METHOD_NOT_IMPLEMENTED　　(501)"),v("br"),_._v("ngx.HTTP_SERVICE_UNAVAILABLE　　　　　　(503)"),v("br"),_._v("ngx.HTTP_GATEWAY_TIMEOUT　　　　　　　(504) "),v("br")])]),_._v(" "),v("tr",[v("td",[_._v("Nginx log level constants")]),_._v(" "),v("td",[_._v("ngx.STDERR"),v("br"),_._v("ngx.EMERG"),v("br"),_._v("ngx.ALERT"),v("br"),_._v("ngx.CRIT"),v("br"),_._v("ngx.ERR"),v("br"),_._v("ngx.WARN"),v("br"),_._v("ngx.NOTICE"),v("br"),_._v("ngx.INFO"),v("br"),_._v("ngx.DEBUG")])])])]),_._v(" "),v("h2",{attrs:{id:"api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[_._v("#")]),_._v(" API")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("API")]),_._v(" "),v("th",[_._v("说明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("ngx.arg")]),_._v(" "),v("td",[_._v("指令参数，如跟在 content_by_lua_file 后面的参数")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.var")]),_._v(" "),v("td",[_._v("变量，ngx.var.VARIABLE 引用某个变量")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.ctx")]),_._v(" "),v("td",[_._v("请求的 lua 上下文")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.header")]),_._v(" "),v("td",[_._v("响应头，ngx.header.HEADER 引用某个头")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.status")]),_._v(" "),v("td",[_._v("响应码")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.log")]),_._v(" "),v("td",[_._v("输出到 error.log")])]),_._v(" "),v("tr",[v("td",[_._v("print")]),_._v(" "),v("td",[_._v("等价于 ngx.log(ngx.NOTICE, ...)")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.send_headers")]),_._v(" "),v("td",[_._v("发送响应头")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.headers_sent")]),_._v(" "),v("td",[_._v("响应头是否已发送")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.resp.get_headers")]),_._v(" "),v("td",[_._v("获取响应头")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.timer.at")]),_._v(" "),v("td",[_._v("注册定时器事件")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.is_subrequest")]),_._v(" "),v("td",[_._v("当前请求是否是子请求")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.location.capture")]),_._v(" "),v("td",[_._v("发布一个子请求")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.location.capture_multi")]),_._v(" "),v("td",[_._v("发布多个子请求")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.exec")]),_._v(" "),v("td",[_._v("执行一个内部 localtion 模块跳转")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.redirect")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.print")]),_._v(" "),v("td",[_._v("输出响应")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.say")]),_._v(" "),v("td",[_._v("输出响应，自动添加『 \\n 』")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.flush")]),_._v(" "),v("td",[_._v("刷新响应")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.exit")]),_._v(" "),v("td",[_._v("结束请求")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.eof")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.sleep")]),_._v(" "),v("td",[_._v("无阻塞的休眠（使用定时器实现）")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.get_phase")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.on_abort")]),_._v(" "),v("td",[_._v("注册 client 断开请求时的回调函数")])]),_._v(" "),v("tr",[v("td",[_._v("ndk.set_var.DIRECTIVE")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.start_time")]),_._v(" "),v("td",[_._v("请求的开始时间")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.http_version")]),_._v(" "),v("td",[_._v("请求的 HTTP 版本号")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.raw_header")]),_._v(" "),v("td",[_._v("请求头（包括请求行）")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.get_method")]),_._v(" "),v("td",[_._v("请求方法")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.set_method")]),_._v(" "),v("td",[_._v("请求方法重载")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.set_uri")]),_._v(" "),v("td",[_._v("请求URL重写")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.set_uri_args")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.get_uri_args")]),_._v(" "),v("td",[_._v("获取请求参数")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.get_post_args")]),_._v(" "),v("td",[_._v("获取请求表单")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.get_headers")]),_._v(" "),v("td",[_._v("获取请求头")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.set_header")]),_._v(" "),v("td",[_._v("设置数据到请求头")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.clear_header")]),_._v(" "),v("td",[_._v("清除请求头数据")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.read_body")]),_._v(" "),v("td",[_._v("读取请求体")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.discard_body")]),_._v(" "),v("td",[_._v("扔掉请求体")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.get_body_data")]),_._v(" "),v("td",[_._v("获取请求体数据")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.get_body_file")]),_._v(" "),v("td",[_._v("后面跟 lua 文件")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.set_body_data")]),_._v(" "),v("td",[_._v("设置数据到请求体")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.set_body_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.init_body")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.append_body")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.finish_body")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.req.socket")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.escape_uri")]),_._v(" "),v("td",[_._v("字符串的 URL 编码")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.unescape_uri")]),_._v(" "),v("td",[_._v("字符串 URL 解码")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.encode_args")]),_._v(" "),v("td",[_._v("将 table 编码为一个参数字符串")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.decode_args")]),_._v(" "),v("td",[_._v("将参数字符串编码为一个t able")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.encode_base64")]),_._v(" "),v("td",[_._v("字符串的 base64 编码")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.decode_base64")]),_._v(" "),v("td",[_._v("字符串的 base64 解码")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.crc32_short")]),_._v(" "),v("td",[_._v("字符串的 crs32_short 哈希")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.crc32_long")]),_._v(" "),v("td",[_._v("字符串的 crs32_long 哈希")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.hmac_sha1")]),_._v(" "),v("td",[_._v("字符串的 hmac_sha1 哈希")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.md5")]),_._v(" "),v("td",[_._v("返回 16 进制 MD5")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.md5_bin")]),_._v(" "),v("td",[_._v("返回 2 进制 MD5")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.sha1_bin")]),_._v(" "),v("td",[_._v("返回 2 进制 sha1 哈希值")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.quote_sql_str")]),_._v(" "),v("td",[_._v("SQL 语句转义，防止 SQL 注入")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.today")]),_._v(" "),v("td",[_._v("返回当前日期")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.time")]),_._v(" "),v("td",[_._v("返回 UNIX 时间戳")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.now")]),_._v(" "),v("td",[_._v("返回当前时间")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.update_time")]),_._v(" "),v("td",[_._v("刷新时间后再返回")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.localtime")]),_._v(" "),v("td",[_._v("返回本地系统时间")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.utctime")]),_._v(" "),v("td",[_._v("返回 nginx 时间缓存")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.cookie_time")]),_._v(" "),v("td",[_._v("返回的时间可用于 cookie 值")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.http_time")]),_._v(" "),v("td",[_._v("返回的时间可用于 HTTP 头")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.parse_http_time")]),_._v(" "),v("td",[_._v("解析 HTTP 头的时间")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.re.match")]),_._v(" "),v("td",[_._v("使用 Perl 兼容正则表达式匹配字符串")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.re.find")]),_._v(" "),v("td",[_._v("返回匹配结果子字符串的开始索引 (from) 和结束索引 (to)")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.re.gmatch")]),_._v(" "),v("td",[_._v("返回一个 Lua 迭代器")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.re.sub")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.re.gsub")]),_._v(" "),v("td",[_._v("执行全局替换")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT")]),_._v(" "),v("td",[_._v("获取基于共享内存名为 DICT 的 Lua 字典对象，它是一个共享内存区块")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.get")]),_._v(" "),v("td",[_._v("从字典中获取名为键 (key) 值")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.get_stale")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.set")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.safe_set")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.add")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.safe_add")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.replace")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.delete")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.incr")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.flush_all")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.flush_expired")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.shared.DICT.get_keys")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.socket.udp")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("udpsock:setpeername")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("udpsock:send")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("udpsock:receive")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("udpsock:close")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("udpsock:settimeout")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.socket.tcp")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:connect")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:sslhandshake")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:send")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:receive")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:receiveuntil")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:close")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:settimeout")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:setoption")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:setkeepalive")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("tcpsock:getreusedtimes")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.socket.connect")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.thread.spawn")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.thread.wait")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.thread.kill")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("coroutine.create")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("coroutine.resume")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("coroutine.yield")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("coroutine.wrap")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("coroutine.running")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("coroutine.status")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ngx.config.debug")]),_._v(" "),v("td",[_._v("编译时是否有 --with-debug 选项")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.config.prefix")]),_._v(" "),v("td",[_._v("编译时的 --prefix 选项")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.config.nginx_version")]),_._v(" "),v("td",[_._v("返回 Nginx 版本号")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.config.nginx_configure")]),_._v(" "),v("td",[_._v("返回编译时 ./configure 的命令行选项")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.config.ngx_lua_version")]),_._v(" "),v("td",[_._v("返回 ngx_lua 模块版本号")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.worker.exiting")]),_._v(" "),v("td",[_._v("当前 worker 进程是否正在关闭（如reload、shutdown期间）")])]),_._v(" "),v("tr",[v("td",[_._v("ngx.worker.pid")]),_._v(" "),v("td",[_._v("返回当前 worker 进程的 pid")])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td")])])]),_._v(" "),v("h2",{attrs:{id:"指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[_._v("#")]),_._v(" 指令")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("指令名称")]),_._v(" "),v("th",[_._v("说明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("lua_use_default_type")]),_._v(" "),v("td",[_._v("是否使用 default_type 指令定义的 Content-Type 默认值")])]),_._v(" "),v("tr",[v("td",[_._v("lua_code_cache")]),_._v(" "),v("td",[_._v("*_by_lua_file 文件是否 cache")])]),_._v(" "),v("tr",[v("td",[_._v("lua_regex_cache_max_entries")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_regex_match_limit")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_package_path")]),_._v(" "),v("td",[_._v("用 Lua 写的 lua 外部库路径（.lua文件）")])]),_._v(" "),v("tr",[v("td",[_._v("lua_package_cpath")]),_._v(" "),v("td",[_._v("用 C 写的 lua 外部库路径（.so文件）")])]),_._v(" "),v("tr",[v("td",[_._v("init_by_lua")]),_._v(" "),v("td",[_._v("master 进程启动时挂载的 lua 代码")])]),_._v(" "),v("tr",[v("td",[_._v("init_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("init_worker_by_lua")]),_._v(" "),v("td",[_._v("worker 进程启动时挂载的 lua 代码，常用来执行一些定时器任务")])]),_._v(" "),v("tr",[v("td",[_._v("init_worker_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("set_by_lua")]),_._v(" "),v("td",[_._v("设置变量")])]),_._v(" "),v("tr",[v("td",[_._v("set_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("content_by_lua")]),_._v(" "),v("td",[_._v("handler 模块")])]),_._v(" "),v("tr",[v("td",[_._v("content_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("rewrite_by_lua")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("rewrite_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("access_by_lua")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("access_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("header_filter_by_lua")]),_._v(" "),v("td",[_._v("header filter 模块")])]),_._v(" "),v("tr",[v("td",[_._v("header_filter_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("body_filter_by_lua")]),_._v(" "),v("td",[_._v("body filter 模块，ngx.arg[1]代表输入的 chunk，ngx.arg[2] 代表当前 chunk 是否为 last")])]),_._v(" "),v("tr",[v("td",[_._v("body_filter_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("log_by_lua")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("log_by_lua_file")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_need_request_body")]),_._v(" "),v("td",[_._v("是否读请求体，跟 ngx.req.read_body() 函数作用类似")])]),_._v(" "),v("tr",[v("td",[_._v("lua_shared_dict")]),_._v(" "),v("td",[_._v("创建全局共享的 table（多个 worker 进程共享）")])]),_._v(" "),v("tr",[v("td",[_._v("lua_socket_connect_timeout")]),_._v(" "),v("td",[_._v("TCP/unix 域 socket 对象 connect 方法的超时时间")])]),_._v(" "),v("tr",[v("td",[_._v("lua_socket_send_timeout")]),_._v(" "),v("td",[_._v("TCP/unix 域 socket 对象 send 方法的超时时间")])]),_._v(" "),v("tr",[v("td",[_._v("lua_socket_send_lowat")]),_._v(" "),v("td",[_._v("设置 cosocket send buffer 的 low water 值")])]),_._v(" "),v("tr",[v("td",[_._v("lua_socket_read_timeout")]),_._v(" "),v("td",[_._v("TCP/unix 域 socket 对象r eceive 方法的超时时间")])]),_._v(" "),v("tr",[v("td",[_._v("lua_socket_buffer_size")]),_._v(" "),v("td",[_._v("cosocket 读 buffer 大小")])]),_._v(" "),v("tr",[v("td",[_._v("lua_socket_pool_size")]),_._v(" "),v("td",[_._v("cosocket 连接池大小")])]),_._v(" "),v("tr",[v("td",[_._v("lua_socket_keepalive_timeout")]),_._v(" "),v("td",[_._v("cosocket 长连接超时时间")])]),_._v(" "),v("tr",[v("td",[_._v("lua_socket_log_errors")]),_._v(" "),v("td",[_._v("是否打开 cosocket 错误日志")])]),_._v(" "),v("tr",[v("td",[_._v("lua_ssl_ciphers")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_ssl_crl")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_ssl_protocols")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("ua_ssl_trusted_certificate")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_ssl_verify_depth")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_http10_buffering")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("rewrite_by_lua_no_postpone")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_transform_underscores_in_response_headers")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_check_client_abort")]),_._v(" "),v("td",[_._v("是否监视 client 提前关闭请求的事件，如果打开监视，会调用 ngx.on_abort() 注册的回调")])]),_._v(" "),v("tr",[v("td",[_._v("lua_max_pending_timers")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("lua_max_running_timers")]),_._v(" "),v("td")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);