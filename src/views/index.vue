<!--  -->
<template>
  <div>
    <div class="con">
      <router-view></router-view>
    </div>

    <van-tabbar v-model="active" active-color="#ffa500" inactive-color="#00bfff">
      <van-tabbar-item icon="home-o" to="home">首页</van-tabbar-item>
      <van-tabbar-item icon="qr-invalid" to="fenlei">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="gowuche">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  }
};
</script>
<style  scoped>
</style>