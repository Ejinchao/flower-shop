<!-- 注册 -->
<template>
  <div>
       <van-nav-bar title="注册"><van-icon name="arrow-left" slot="left" @click="registered" /></van-nav-bar>

      <van-divider dashed><img src="../img/logo.png" alt=""></van-divider>


      <van-cell-group>
        <van-field  v-model="userName"  label="用户名" placeholder="请输入用户名" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"   />
    </van-cell-group>


    <van-divider><van-button round  type="primary" size="large" @click="btn">注册</van-button></van-divider>

  </div>
</template>

<script>
import axios from "axios";
// import api from "../api/api_li";

export default {
  data () {
    return {
        userName:'',
        password:'',
        nickName:'你好',
        avatar:'aa.jpg'
        
    };
  },
  methods:{
        onInput(){

        },
        registered(){
            this.$router.go(-1)
        },
        btn(){
            let params = {
                userName: this.userName,
                password: this.password,
                nickName: this.nickName,
                avatar: this.avatar
            }
            let url =`http://api.cat-shop.penkuoer.com/api/v1/auth/reg`
            this.$axios.post(url,params).then((res) => {
                console.log(res.data)
                if (res.data.code == 'success'){
                  alert('注册成功')
                  this.$router.push('/login') 
                }
            })
        }
  },
    
}

</script>
<style  scoped>
.van-divider img{
    width: 200px;
    margin-left: 30px
}
</style>