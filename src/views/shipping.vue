<!-- 今日配送 -->
<template>
  <div>
    <van-nav-bar title="今日配送" ><van-icon name="arrow-left" slot="left" @click="paisong"/></van-nav-bar>

    <van-tabs v-model="active" animated>
        <van-tab title="全部">
            <van-divider dashed><img src="../img/16.png" alt=""></van-divider>
            <van-divider dashed>还没有相关订单哦</van-divider>
            <van-divider dashed><van-button round type="info" to="/home">去首页看看</van-button></van-divider>
        </van-tab>
        <van-tab title="代付款">
            <van-divider dashed><img src="../img/16.png" alt=""></van-divider>
            <van-divider dashed>还没有相关订单哦</van-divider>
            <van-divider dashed><van-button round type="info" to="/home">去首页看看</van-button></van-divider>
        </van-tab>
        <van-tab title="今天配送">
            <van-divider dashed><img src="../img/16.png" alt=""></van-divider>
            <van-divider dashed>还没有相关订单哦</van-divider>
            <van-divider dashed><van-button round type="info" to="/home">去首页看看</van-button></van-divider>
        </van-tab>
        <van-tab title="待评价">
            <van-divider dashed><img src="../img/16.png" alt=""></van-divider>
            <van-divider dashed>还没有相关订单哦</van-divider>
            <van-divider dashed><van-button round type="info" to="/home">去首页看看</van-button></van-divider>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
        active: 2,
    };
  },
  methods:{
      paisong(){
          this.$router.go(-1)
      }
  }
}

</script>
<style  scoped>
</style>