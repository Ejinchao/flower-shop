<!-- 登录 -->
<template>
  <div>
    <van-nav-bar title="登录">
      <van-icon name="cross" slot="left" @click="login" />
    </van-nav-bar>

    <van-divider dashed>
      <img src="../img/logo.png" alt />
    </van-divider>

    <van-cell-group>
      <van-field
        v-model="username"
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>

    <van-divider>
      <van-button round type="primary" size="large" @click="denglu">登录</van-button>
    </van-divider>

    <div class="ppp">
      <p class="left">
        账号密码登录
        <van-icon name="arrow" />
      </p>
      <p class="right">
        <router-link to="/registered">注册</router-link>
        <van-icon name="arrow" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.go(-1);
    },
    denglu() {
      let obj = {
        userName: this.username,
        password: this.password
      };
      let url = `http://api.cat-shop.penkuoer.com/api/v1/auth/login`;
      this.$axios.post(url, obj).then(data => {
        if (data.data.code) {
          alert(data.data.code);

          //登录   存储一个token
          localStorage.setItem("token", data.data.token);
          this.$router.push("home");
        } else {
          alert("账号密码不正确");
        }
      });
    }
  }
};
</script>
<style  scoped>
.van-divider img {
  width: 200px;
  margin-left: 30px;
}
.van-button--large {
  margin-top: 45px;
}
.ppp {
  position: relative;
  color: #aaa;
  margin-top: 40px;
}
.right {
  position: absolute;
  right: 30px;
  bottom: -16px;
}
.left {
  margin-left: 30px;
}
</style>