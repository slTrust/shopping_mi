import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'  //样式处理
import './assets/css/reset.css' //样式重置
import './assets/fonts/iconfont.css' //字体图标


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
