import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vant from 'vant';
import "vant/lib/index.css"

import "./assets/css/style.css";

//Vue.prototype.$axios = axios
Vue.use(VueAxios,axios)
axios.defaults.baseURL='/api'
Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
