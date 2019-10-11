<!-- 鲜花 -->
<template>
  <div>
    <van-nav-bar title="鲜花"  >
      <van-icon name="arrow-left" slot="left" @click="flow"/>
    </van-nav-bar>

    <van-grid  :border='false'>
      <van-grid-item  text="综合" />
      <van-grid-item  text="销量" />
      <van-grid-item  text="价格"/>
      <van-grid-item  text="最新" />
    </van-grid>
    <div class="bk"></div>


<van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
/>







  </div>
</template>

<script>
export default {
  data () {
    return {

    };
    
    
  },
methods: {
  flow(){
    this.$router.go(-1)
  }
}
}

</script>
<style  scoped>
.bk{
  border-bottom: 2px solid #aaa
}
</style>