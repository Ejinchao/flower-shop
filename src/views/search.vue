<!-- 搜索 -->
<template>
  <div>
    

      <a href="" style="position:absolute; top:18px; left: 8px;"><van-icon name="arrow-left" /></a>
      <van-search   placeholder="请输入搜索关键词"  left-arrow />
       
      
      <van-divider hairline  content-position="left">热门搜索</van-divider>



      <van-divider>
        <van-tag plain>爱情鲜花</van-tag>
        <van-tag plain>向日葵</van-tag>
        <van-tag plain>生活蛋糕</van-tag>
        <van-tag plain>康乃馨</van-tag>
        <van-tag plain>百合</van-tag>
        <van-tag plain>满天星</van-tag>
      </van-divider>
     
       
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

}

</script>
<style  scoped>
.van-tag{
  margin-left: 5px
}
.van-search{
  margin-left: 21px
}
</style>