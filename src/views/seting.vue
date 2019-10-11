<!-- 设置 -->
<template>
  <div>
    <van-nav-bar
      title="设置"
      left-text=""
      left-arrow
      @click-left="back()"
    >

    </van-nav-bar>

    <van-cell
      is-link
      title="个人信息"
      link-type="navigateTo"
      url="/pages/dashboard/index"
      to="/personinfo"
    />
    <van-cell
      is-link
      title="绑定账号"
      link-type="navigateTo"
      to="/bindCount"
    />
    <van-cell
      is-link
      title="重置密码"
      link-type="navigateTo"
      url="/#/resetCode"
    />
    <van-cell
      is-link
      title="清除缓存"
      link-type="redirectTo"
      url="/#/clearStorage"
      @click="clear"
    />
    <van-cell
      is-link
      title="推荐给好友"
      link-type="
      navigateTo"
      url="/#/bindCount"
      @click="recommend"
    />
  </div>
</template>

<script>
export default {
  name: "Seting",
  data() {
    return {
    };
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
  nav() {
    if (this.showdia == true) {
      this.showdia = false;
    } else { this.showdia = true; }
  },
  clear() {

  },
  recommend() {

  }
}

</script>
<style  scoped>
.van-nav-bar {
  font-size: 2rem;
  color: #232628;
}
.van-nav-bar .van-icon {
  color: inherit;
  vertical-align: middle;
  font-size: 1.42857143rem;
}
.van-nav-bar__title {
  font-size: 1.14285714rem;
  color: inherit;
}
.van-nav-bar__right {
  right: 0px;
  height: 3.14285714rem;
  font-size: 0;
}
.van-nav-bar__left {
  left: 0px;
}
.van-nav-bar .van-icon {
  color: inherit;
  vertical-align: middle;
  width: 3.14285714rem;
  height: 3.14285714rem;
  font-size: 1.42857143rem;
  line-height: 3.14285714rem;
}
.van-icon,
.van-icon::before {
  display: inline-block;
}
.van-cell {
  margin-top: 8px;
}
</style>