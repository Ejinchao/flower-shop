import axios from 'axios';
import Vue from 'vue'

let jsonInfo = localStorage.getItem('info')
let arr = JSON.parse(jsonInfo)
console.log(arr.data.token)
let token = arr.data.token
//添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(token){
      console.log('请求了token')
      // console.log(Cookies.get('token'))
      console.log(token)
      config.headers.common['authorization'] = "Bearer "+token;
      // console.log(config)
  }
  return config;
}, function (error) {
// 对请求错误做些什么
console.log('请求错误')
  return Promise.reject(error);
});
//添加请求响应器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log('获取到数据了')
  // console.log(response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
Vue.prototype.$axios=axios;





let base = process.env.API_ROOT;



export const POST=(url,params)=>{
  return axios.post(`${base}${url}`,params).then(res=>res.data)
}

export const GET=(url,params)=>{
  return axios.get(`${base}${url}`,{params:params}).then(res=>res.data)
}

export const PUT=(url,params)=>{
  return axios.put(`${base}${url}`,params).then(res=>res.data)
}

export const DELETE=(url,params)=>{
  return axios.delete(`${base}${url}`,{params:params}).then(res=>res.data)
}
