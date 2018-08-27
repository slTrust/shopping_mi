import MiLogin from './MiLogin.vue'
import MiHome from './MiHome.vue'

// 路由的优化

export default [
  {
    path: '/home',
    name: 'home',
    component: MiHome
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
