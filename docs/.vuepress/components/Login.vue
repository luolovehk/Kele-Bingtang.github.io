<template>
  <div class="login-form">
    <div class="form-header">用户名</div>
    <div>
      <input type="text" class="form-control" placeholder="请输入用户名 ..." v-model="username" />
    </div>
    <div class="form-header">密码</div>
    <div>
      <input type="password" class="form-control" placeholder="请输入密码 ..." v-model="password" />
    </div>

    <div class="btn-row">
      <button class="btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    login() {
      let { username, password, expire, loginKey } =
          this.$themeConfig.privatePage;
      if (this.username && this.password) {
         // 某个文章有用户信息，则覆盖全局的信息
        if(this.$route.query.username && this.$route.query.password && this.$route.query.loginKey){
          username = this.$route.query.username;
          password = this.$route.query.password;
          loginKey = this.$route.query.loginKey;
          expire = this.$route.query.expire
        }
       console.log(expire);
        if (this.username == username && this.password == password) {
          const data = JSON.stringify({
            username: this.username,
            password: this.password,
            time: new Date().getTime(),
            expire: expire,
          });
          window.localStorage.setItem(loginKey, data);
          if (this.$route.query.toPath) {
            this.$router.push({
              path: this.$route.query.toPath,
            });
          }else{
            this.$router.push({
              path: '/',
            });
          }
        } else {
          this.password = '';  // 清空密码
          alert("用户名或者密码错误！请联系博主获取用户名和密码！");
        }
      } else {
        alert("您访问的文章是私密文章，请先输入用户名和密码！");
      }
    },
  },
};
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
</style>