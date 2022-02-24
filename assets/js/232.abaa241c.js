(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{733:function(s,t,e){"use strict";e.r(t);var a=e(9),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#什么是镜像"}},[s._v("什么是镜像")])]),e("li",[e("a",{attrs:{href:"#为什么一个镜像会那么大"}},[s._v("为什么一个镜像会那么大")])]),e("li",[e("a",{attrs:{href:"#docker镜像原理"}},[s._v("Docker镜像原理")]),e("ul",[e("li",[e("a",{attrs:{href:"#为什么docker镜像要采用这种分层结构呢"}},[s._v("为什么Docker镜像要采用这种分层结构呢")])])])]),e("li",[e("a",{attrs:{href:"#核心架构图"}},[s._v("核心架构图")])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"什么是镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是镜像"}},[s._v("#")]),s._v(" 什么是镜像")]),s._v(" "),e("p",[s._v("镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含 运行某个软件所需的所有内容，包括代码、运行时、库、环境变量和配置文件。")]),s._v(" "),e("h2",{attrs:{id:"为什么一个镜像会那么大"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么一个镜像会那么大"}},[s._v("#")]),s._v(" 为什么一个镜像会那么大")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Docker/20211120174555.png",alt:"image-20211120174548454"}})]),s._v(" "),e("Strong",{staticStyle:{color:"red"}},[s._v("镜像就是花卷，多个镜像组成一个完整的镜像")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("UnionFS（联合文件系统）")]),s._v(" "),e("p",[s._v("Union 文件系统是一种分层，轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文代系统下。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。Union 文件系统是 Docker 镜像的基础。这种文件系统特性就是一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。")])])]),s._v(" "),e("h2",{attrs:{id:"docker镜像原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像原理"}},[s._v("#")]),s._v(" Docker镜像原理")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Docker/20211120181850.png",alt:"image-20211120181849926"}})]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("docker 的镜像实际上由一层一层的文件系统组成，这种层级的文件系统 UnionFS。")])])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("典型的 Linux 文件系统由 "),e("strong",[s._v("bootfs")]),s._v(" 和 "),e("strong",[s._v("rootfs")]),s._v(" 两部分组成")])]),s._v(" "),e("li",[e("p",[s._v("bootfs(boot file system)主要包含 bootloader 和 kernel , bootloader 主要是引导加载 kernel, Linux 刚启动时会加载 bootfs 文件系统，在 Docker 镜像的最底层是 bootfs。这一层与我们典型的 Linux/Unix 系统是 一样的，包含 boot 加载器和内核。当 boot 加载完成之后整个内核就都在内存中了，此时内存的使用权已由 bootfs 转交给内核，此时系统也会卸载 bootfs。")])]),s._v(" "),e("li",[e("p",[s._v("rootfs (root file system) ，在bootfs之上。包含的就是典型 Linux 系统中的 /dev, /proc, /bin, /etc 等标准目录和文件。rootfs 就是各种不同的操作系统发行版，比如 Ubuntu，Centos 等等。")])]),s._v(" "),e("li",[e("p",[s._v("我们平时安装进虚拟机的 CentO 都有 1 到几个 GB，为什么 Docker 这里才 200MB？对于一个精简的 OS，rootfs 可以很小，只需要包括最基本的命令，工具，和程序库就可以了，因为底层直接使用 Host 的 Kemal,自己只需要提供 rotfs 就行了。由此可见不同的 Linux 发行版，他们的 bootfs 是一致的，rootfs 会有差别。"),e("strong",[s._v("因此不同的发行版可以共用 bootfs。")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回结果")]),s._v("\nREPOSITORY    TAG       IMAGE ID       CREATED        SIZE\ntomcat        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.5")]),s._v(".73    7ec084df520c   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v(" hours ago   249MB\nmysql         latest    b05128b000dd   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago     516MB\ncentos        latest    feb5d9fea6a5   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" weeks ago    209MB\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Docker/20211120175911.png",alt:"image-20211120175909572"}})]),s._v(" "),e("h3",{attrs:{id:"为什么docker镜像要采用这种分层结构呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么docker镜像要采用这种分层结构呢"}},[s._v("#")]),s._v(" 为什么Docker镜像要采用这种分层结构呢")]),s._v(" "),e("p",[e("strong",[s._v("最大的好处就是资源共享。")])]),s._v(" "),e("p",[s._v("比如：有多个镜像都是从相同的 base 镜像构建而来的，那么宿主机只需在磁盘中保存一份 base 镜像。同时内存中也只需要加载一份 base 镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。Docker 镜像都是只读的。当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称为容器层，容器层之下都叫镜像层。")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("如何查看镜像分层？")])])]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("docker inspect")]),s._v(" 命令")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行命令")]),s._v("\nocker images\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回结果")]),s._v("\nREPOSITORY    TAG       IMAGE ID       CREATED        SIZE\ntomcat        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.5")]),s._v(".73    7ec084df520c   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v(" hours ago   249MB\nmysql         latest    b05128b000dd   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" days ago     516MB\nhello-world   latest    feb5d9fea6a5   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" weeks ago    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(".3kB\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("  inspect tomcat:8.5.73\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Docker/20211120181351.png",alt:"image-20211120181350189"}}),s._v("所有的 Docker 镜像都起始于一个基础镜像层，当进行修改或增加新的内容时，就会在当前镜像层之上，创建新的镜像层。")]),s._v(" "),e("p",[s._v("举一个简单的例子，假如基于 Ubuntu Linux 16.04 创建一个新的镜像，这就是新镜像的第一层；如果在该镜像中添加 Python包，就会在基础镜像层之上创建第二个镜像层；如果继续添加一个安全补丁，就会创建第三个镜像层。")]),s._v(" "),e("p",[s._v("该镜像当前已经包含 3 个镜像层，如下图所示（这只是一个用于演示的很简单的例子）。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Docker/20211120181415.png",alt:"img_46"}})]),s._v(" "),e("p",[s._v("在添加额外的镜像层的同时，镜像始终保持是当前所有镜像的组合，理解这一点非常重要。下图中举了 一个简单的例子，每个镜像层包含 3 个文件，而镜像包含了来自两个镜像层的 6 个文件。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Docker/20211120181439.png",alt:"img_47"}})]),s._v(" "),e("p",[s._v("这种情况下，上层镜像层中的文件覆盖了底层镜像层中的文件。这样就使得文件的更新版本作为一个新镜像层添加到镜像当中。")]),s._v(" "),e("p",[s._v("Docker 通过存储引擎（新版本采用快照机制）的方式来实现镜像层堆栈，并保证多镜像层对外展示为统 一的文件系统。")]),s._v(" "),e("p",[s._v("Linux 上可用的存储引擎有 AUFS、Overlay2、Device Mapper、Btrfs 以及 ZFS。顾名思义，每种存储引擎都基于 Linux 中对应的文件系统或者块设备技术，并且每种存储引擎都有其独有的性能特点。")]),s._v(" "),e("p",[s._v("Docker 在 Windows 上仅支持 windowsfilter 一种存储引擎，该引擎基于 NTFS 文件系统之上实现了分层和 CoW。")]),s._v(" "),e("p",[s._v("下图展示了与系统显示相同的三层镜像。所有镜像层堆叠并合并，对外提供统一的视图。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Docker/20211120181453.png",alt:"img_50"}})]),s._v(" "),e("h2",{attrs:{id:"核心架构图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心架构图"}},[s._v("#")]),s._v(" 核心架构图")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Docker/20211121211955.png",alt:"image-20211121211953619"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);