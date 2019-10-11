<template>
  <div>
    <!-- 顶部导航条 -->
    <van-nav-bar title="客服" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-cell-group>
      <van-nav-bar title="客服服务时间为：08:30~21:00" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="在线客服" value="立即联系" is-link />
      <van-cell title="400电话" value="立即拨打" is-link />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="在线留言（工作时间承诺1个小时内回复）" style="font-size:10px" />

      <van-button color="#fd9977" style=" border-radius:4px;margin-left:26px ;font-size:12px">咨询售后</van-button>
      <van-button color="#c8c8c8" style=" border-radius:4px; font-size:12px">投诉反馈</van-button>
    </van-cell-group>
    <div class="opinion">
      <input type="text" placeholder="手机号" v-model="tel" />
      或
      <input type="text" placeholder="邮箱" v-model="email" />

      <van-field v-model="message" type="textarea" placeholder="请在此描述问题" rows="1" />
    </div>

    <div class="submit">
      <van-button type="default">确认提交</van-button>
    </div>
  </div>
</template>

<script>

export default {
    data() {
    return {
     tel:'',
     email:'',
     message:''
    };
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.van-cell-group {
  margin-bottom: 4px;
  
}
.van-cell-group .van-nav-bar__title {
    color: #dbc272;
  }
.van-button__text {
  color: #000;
}
.opinion {
  width: 95%;
  height: 156px;
  font-size: 10px;
  margin: 0 auto;
  background-color: #e7e7e7;
  }
  input {
    outline: none;
    padding: 0%;
    border: 0;
    margin: 15px 10px;
    background: rgba(135, 135, 135, 0);
  }

  input:nth-child(1) {
    width: 92px;
    height: 20px;
    line-height: 20px;

    border: 1px solid #989898;
  }
  input:nth-child(2) {
    width: 147px;
    height: 20px;
    line-height: 20px;

    border: 1px solid #989898;
  }

  .van-field {
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 10px;
    background: rgba(135, 135, 135, 0);
    border: 1px solid #989898;
  }

.submit {
  display: flex;
  align-items: center;
  }
.submit .van-button {
    margin: 0 auto;
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border: 1px solid #000;
    border-radius: 2px;
    box-shadow: 0 3px 3px;
  }

</style>