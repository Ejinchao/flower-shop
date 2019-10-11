
<!--  -->
<template>
  <div id="app">
    <router-view />

    <van-tabbar v-model="active" active-color="#ffa500" inactive-color="#00bfff">
      <van-tabbar-item icon="home-o" to="home">首页</van-tabbar-item>
      <van-tabbar-item icon="qr-invalid" to="fenlei">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: ""
    };
  }
};
</script>
<style scoped>
#app .van-checkbox__label {
  width: 100%;
  height: auto;
  padding: 0 10px 0 15px;
  box-sizing: border-box;
}
</style>