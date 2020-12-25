import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/router/permission"
import "@/assets/css/common.css"
import common from '@/prototype/index'


Vue.config.productionTip = false
Vue.use(ElementUI, {size: 'small'})
Vue.use(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
