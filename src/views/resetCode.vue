<!-- 重置密码 -->
<template>
  <div class="backbord">
    <van-nav-bar
      title="密码重置"
      left-arrow
      @click-left="back()"
    />
    <van-cell-group>
      <van-field
        v-model="oldcode"
        label="原密码："
        placeholder="请输入原密码"
      />
      <van-field
        v-model="newcode"
        label="新密码："
        placeholder="请输入新密码"
      />
      <van-field
        v-model="checkcode"
        label="确认密码："
        placeholder="请确认新密码"
      />
    </van-cell-group>
    <van-button
      color="#ff734c"
      round
      @click="reset"
    >确认</van-button>
    <van-divider :style="{ color: '#000', borderColor: 'transparent', padding: '20px ' }">
      <a
        href="
      javascript:;"
        style="color: #000"
      >忘记原密码？</a>
    </van-divider>

  </div>
</template>

<script>
// import Bus from '../router/bus.js';
export default {

  data() {

    return {
      newcode: '',
      oldcode: '',
      checkcode: '',
      id: ''
    };
  },
  methods: {
    back() {
      history.back(-1)
    },
    reset() {
      console.log(this.id)
      this.id = localStorage.getItem('id');
      console.log(this.id)
      var token = localStorage.getItem('token');
      let _this = this;
      var url = `http://api.cat-shop.penkuoer.com/api/v1/admin/users/reset_pwd/${_this.id}`;
      console.log(url)
      console.log(this.newcode)
      this.$axios({
        url: url,
        method: "put",
        params: {
          password: this.newcode
        },
        headers: { Authorization: 'Bearer ' + token }
      }).then((res) => {
        console.log(res)
      })
    },

  },
  mounted() {
    let _this = this;
    console.log('来到设置')
    Bus.$on('message', (data) => {
      console.log(11111)
      console.log(data)
      _this.id = data
      localStorage.setItem('id', data)
    });
  }
}

</script>
<style  scoped>
.van-nav-bar__text {
  font-size: 14px;
  color: #323233;
}

.van-nav-bar .van-icon {
  color: #000;
}
.backbord {
  height: 100vh;
  background: #fff;
  padding: 0 16px;
}
.van-button {
  height: 46px;
  width: 100%;
  margin-top: 50px;
  font-size: 16px;
  box-shadow: 0 4px 8px 0 #ffb6a2;
}
</style>