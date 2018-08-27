import Home from './Home.vue'
import MiLogin from './MiLogin.vue'

// 路由的优化

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: MiLogin
  }
]
