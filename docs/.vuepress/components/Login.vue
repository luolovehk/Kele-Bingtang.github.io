<template>
  <div class="login-form">
    <div class="form-header">用户名</div>
    <div>
      <input
        type="text"
        class="form-control"
        placeholder="请输入用户名 ..."
        v-model="username"
      />
    </div>
    <div class="form-header">密码</div>
    <div>
      <input
        type="password"
        class="form-control"
        placeholder="请输入密码 ..."
        v-model="password"
      />
    </div>

    <div class="btn-row">
      <button class="btn" @click="login" @keyup.enter="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    document.onkeyup = (e) => {
      let key = window.event.keyCode;
      if (key == 13) {
        this.login();
      }
    };
  },
  methods: {
    login() {
      let { username, password, expire, loginKey } =
        this.$themeConfig.privatePage;
      if (this.username && this.password) {
        // 某个文章有用户信息，则覆盖全局的信息
        if (
          this.$route.query.username &&
          this.$route.query.password &&
          this.$route.query.loginKey
        ) {
          username = this.$route.query.username;
          password = this.$route.query.password;
          loginKey = this.$route.query.loginKey;
          expire = this.$route.query.expire;
        }
        if (this.username == username && this.password == password) {
          const data = JSON.stringify({
            username: this.username,
            password: this.password,
            time: new Date().getTime(),
            expire: expire,
          });
          window.localStorage.setItem(loginKey, data);
          addTip("登录成功，正在跳转 ...", "success");
          if (this.$route.query.toPath) {
            this.$router.push({
              path: this.$route.query.toPath,
            });
          } else {
            this.$router.push({
              path: "/",
            });
          }
        } else {
          this.password = ""; // 清空密码
          addTip("用户名或者密码错误！请联系博主获取用户名和密码！", "danger");
        }
      } else if (this.username == "" && this.password != "") {
        addTip("用户名不能为空！", "warning");
      }else if (this.username != "" && this.password == "") {
        addTip("密码不能为空！", "warning");
      } else {
        addTip("您访问的文章是私密文章，请先输入用户名和密码！", "info");
      }
    },
  },
};

// 添加消息提示
function addTip(content, type) {
  var time = new Date().getTime();
  // 获取最后消息提示元素的高度
  var top =
    $(".tip:last").attr("data-top") == undefined
      ? 0
      : $(".tip:last").attr("data-top");
  // 如果产生两个以上的消息提示，则出现在上一个提示的下面，即高度添加，否则默认 50
  var lastTop =
    parseInt(top) +
    ($(".tip").length > 0 ? $(".tip:last").outerHeight() + 17 : 50);

  if (type == "success" || type == 1) {
    $("body").append(
      `<div class="tip tip-success ${time}" style="top: ${parseInt(
        top
      )}px" data-top="${lastTop}"><i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">${content}</p></div>`
    );
  } else if (type == "danger" || type == 2) {
    $("body").append(
      `<div class="tip tip-danger ${time}" style="top: ${parseInt(
        top
      )}px" data-top="${lastTop}"><i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">${content}</p></div>`
    );
  } else if (type == "info" || type == 3) {
    $("body").append(
      `<div class="tip tip-info ${time}" style="top: ${parseInt(
        top
      )}px" data-top="${lastTop}"><i class="iconfont icon-info icon"></i><p class="tip-info-content">${content}</p></div>`
    );
  } else if (type == "warning" || type == 4) {
    $("body").append(
      `<div class="tip tip-warning ${time}" style="top: ${parseInt(
        top
      )}px" data-top="${lastTop}"><i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">${content}</p></div>`
    );
  }

  // 动画往下滑动
  $("." + time).animate({
    top: parseInt(lastTop) + "px",
    opacity: "1",
  });

  // 消息提示 3 秒后隐藏并被删除
  setTimeout(() => {
    $("." + time).animate({
      top: "0px",
      opacity: "0",
    });

    setTimeout(() => {
      $("." + time).remove();
    }, 500);
  }, 3000);
}
</script>

<style lang="stylus">
.login-form {
  padding: 1rem;
  box-sizing: border-box;

  .btn-row {
    margin-top: 1rem;
    text-align: center;
  }

  .btn {
    padding: 0.6rem 2rem;
    outline: none;
    background-color: #60C084;
    color: white;
    border: 0;
    cursor: pointer;
  }

  .form-header {
    color: #13b9e2;
    margin-bottom: 0.5rem;
  }

  .form-control {
    padding: 0.6rem;
    border: 2px solid #ddd;
    width: 100%;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    outline: none;
    transition: border 0.2s ease;

    &:focus {
      border: 2px solid #aaa;
    }
  }
}

div.v-dialog-overlay {
  opacity: 1 !important;
}

.tip {
  position: fixed;
  display: flex;
  top: -10px;
  left: 50%;
  opacity: 0;
  min-width: 320px;
  transform: translateX(-50%);
  transition: opacity 0.3s linear, top 0.4s, transform 0.4s;
  z-index: 99999;
  padding: 15px 15px 15px 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  grid-row: 1;
  line-height: 17px;
}

.tip p {
  line-height: 17px;
  margin: 0;
  font-size: 14px;
}

.icon {
  margin-right: 10px;
  line-height: 17px;
}

.tip-success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.tip-success .tip-success-content {
  color: #67c23a;
}

.tip-danger {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.tip-danger .tip-danger-content {
  color: #f56c6c;
}

.tip-info {
  background-color: #edf2fc;
  border-color: #ebeef5;
}

.tip-info .tip-info-content {
  color: #909399;
}

.tip-warning {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.tip-warning .tip-warning-content {
  margin: 0;
  color: #e6a23c;
  line-height: 21px;
  font-size: 14px;
}

.social-tip {
  margin-bottom: 170px;
  display: none;
}

.square {
  width: 0;
  height: 0;
  border-bottom: 7px solid rgba(118, 25, 172, 0.3);
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  position: relative;
  left: 36%;
  /* display: none; */
}

.social-info {
  width: 200px;
  position: absolute;
  line-height: 48px;
  left: -95%;
  margin-left: -40px;
  background-color: rgba(118, 25, 172, 0.3);
  color: #fff;
  padding: 0 15px 15px;
}

.social-info img {
  width: 160px;
  height: 160px;
}
</style>