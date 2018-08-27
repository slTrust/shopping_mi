import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css' // 样式处理
import './assets/css/reset.css' // 样式重置
import './assets/fonts/iconfont.css' // 字体图标
import fetch from './api/fetch.js'

// 将请求方法放到Vue的原型上 这样每个组件里都能调用
Vue.prototype.$fetch = fetch
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
