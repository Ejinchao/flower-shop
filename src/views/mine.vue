<template>
  <div class="mine">
    <van-nav-bar title="个人中心" fixed>
      <van-icon name="arrow-left" slot="left" @click="geren" />
    </van-nav-bar>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="header">
        <van-row type="flex" justify="center" style="height:90px;color:white;" align="bottom">
          <van-col span="8">欢迎来到时尚花卉</van-col>
          <br />
        </van-row>

        <van-button
          round
          type="default"
          size="small"
          style="width:138px;margin-top:10px;"
          @click="login"
        >登录/注册</van-button>
      </div>

      <div class="topNav">
        <van-grid :column-num="3" :border="false">
          <van-grid-item icon="balance-pay" text="待付款" to="/payment" />
          <van-grid-item icon="logistics" text="今日配送" to="/shipping" />
          <van-grid-item icon="records" text="待评价" to="/comment" />
        </van-grid>
      </div>

      <div class="section">
        <div class="mineContent">
          <van-grid :border="false">
            <van-grid-item icon="coupon-o" text="优惠券" />
            <van-grid-item icon="balance-pay" text="权益卡" />
            <van-grid-item icon="gem-o" text="会员积分" />
            <van-grid-item icon="calender-o
" text="生日提醒" to="/birthday" />
            <van-grid-item icon="star-o" text="我的收藏" to="collection" />
            <van-grid-item icon="location-o" text="收货地址" to="addressList" />
            <van-grid-item icon="gold-coin-o" text="余额" />
            <van-grid-item icon="clock-o" text="浏览记录" />
          </van-grid>
        </div>
        <div class="section-f">
          <van-grid :border="false">
            <van-grid-item icon="service-o" text="联系客服" to="service" />
            <van-grid-item icon="question-o
" text="帮助中心" />
            <van-grid-item icon="info-o" text="关于我们" to="About" />
            <van-grid-item icon="setting-o
" text="设置" to="/Seting" />
          </van-grid>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: "mine",
  components: {},
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    login() {
      this.$router.push("/login");
    },
    geren() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.mine {
  position: relative;
}
.header {
  width: 100%;
  height: 200px;
  color: rgba(80, 80, 80, 1);
  background-color: rgba(153, 153, 153, 1);
  font-size: 14px;
  text-align: center;
}
.section {
  width: 100%;
  padding-top: 112px;
  height: 353px;
  background-color: #eee;
}
.topNav {
  width: 354px;
  height: 112px;
  left: 50%;
  transform: translate(-50%);
  top: 176px;
  color: rgba(80, 80, 80, 1);
  background-color: #fff;
  border-radius: 12px;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  position: absolute;
}
.topNav .van-grid {
  margin-top: 12px;
}
.van-grid {
  width: 354px;
  /* height: 170px; */
  color: rgba(80, 80, 80, 1);
  font-size: 14px;
  line-height: 150%;
  text-align: center;
}
.mineContent {
  border-radius: 12px;
  width: 354px;
  height: 180px;
  margin: 0 auto;
  overflow: hidden;
}
.section-f {
  width: 352px;
  margin: 0 auto;
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
}
</style>
