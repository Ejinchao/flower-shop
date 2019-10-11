<!--  -->
<template>
  <div>
    <van-nav-bar title="永生花"  >
      <van-icon name="arrow-left" slot="left" @click="eve"/>
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
    eve(){
      this.$router.go(-1)
    }
  }
}

</script>
<style  scoped>
</style>