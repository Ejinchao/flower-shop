import Vue from 'vue';
import Vant from 'vant';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import 'vant/lib/index.css';

Vue.prototype.$axios = axios;
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app');
