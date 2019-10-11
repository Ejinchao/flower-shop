<!-- 生日提醒/添加提醒 -->
<template>
  <div>
    <van-nav-bar title="添加提醒"  left-arrow @click-left="tixing"></van-nav-bar>

    <van-tabs type="card" animated>
        <van-tab title="标签 1" >
          <van-cell-group>
            <van-field clearable  label="姓名"  placeholder="请输入用户名" />
            <van-field clearable  label="生日"  placeholder="点击设置生日"  />
            <van-field clearable  label="提醒"  placeholder="" />
            <van-field clearable  label="备注"  placeholder="预定餐厅，购买礼物等" />
          </van-cell-group>
          <van-button type="primary" size="large" color="#ffd700">保存</van-button>



        </van-tab>





        <van-tab title="标签 2">
          <van-cell-group>
            <van-field clearable  label="姓名"  placeholder="请输入用户名" />
            <van-field clearable  label="姓名"  placeholder="请输入用户名" />
            <van-field clearable  label="姓名"  placeholder="请输入用户名" />
            <van-field clearable  label="姓名"  placeholder="请输入用户名" />
            <van-field clearable  label="姓名"  placeholder="请输入用户名" />
          </van-cell-group>
          <van-button type="primary" size="large" color="#ffd700">保存</van-button>  

           




        </van-tab>
    </van-tabs>

    



  </div>
</template>

<script>
export default {
  data () {
    return {
        currentDate: new Date()
    };
  },
  methods:{
    tixing(){
        this.$router.go(-1)
    },
  }
}

</script>
<style  scoped>
.van-button--large {
    width: 85%;
    height: 45px;
    line-height: 45px;
    margin-left: 27px;
    margin-top: 23px;
}
.van-tabs--card {
    padding-top: 10px;
}
</style>