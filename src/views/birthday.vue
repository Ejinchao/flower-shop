<!-- 生日提醒 -->
<template>
  <div>
    <van-nav-bar title="生日纪念日提醒"  @click-left="sheng">
        <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="bit">
        <van-divider dashed>
        <img src="../img/17.jpg" alt="">
    </van-divider>
    </div>
    

    
        <van-divider>
            <van-button type="primary" size="large" to="/remind">+添加提醒</van-button>
        </van-divider>
  



  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods:{
    sheng(){
      this.$router.go(-1)
    }
  }
}

</script>
<style  scoped>
.van-divider img{
    width: 100%;
    margin-left:-16px;
}
.bit{
    margin-bottom:40px
}
.van-divider{
    margin: 10px 0;
}
.van-button--primary {
    background-color: #ff6600;
    border: 1px solid #ff6600;
}
</style>