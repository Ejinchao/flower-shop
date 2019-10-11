<!-- 礼品 -->
<template>
  <div>

    <van-nav-bar title="礼品"  >
      <van-icon name="arrow-left" slot="left" @click="gift"/>
    </van-nav-bar>

    <van-grid  :border='false'>
      <van-grid-item  text="综合" />
      <van-grid-item  text="销量" />
      <van-grid-item  text="价格"/>
      <van-grid-item  text="最新" />
    </van-grid>
    <div class="bk"></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
    gift(){
      this.$router.go(-1)
    }
  }
}

</script>
<style  scoped>
</style>