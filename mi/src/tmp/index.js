import MiLogin from './MiLogin.vue'
import MiHome from './MiHome.vue'
import MiCategory from './MiCategory.vue'
import MiCart from './MiCart.vue'
import MiUser from './MiUser.vue'

// 路由的优化

export default [
  {
    path: '/login',
    name: 'login',
    component: MiLogin
  },
  {
    path: '/home',
    name: 'home',
    component: MiHome
  },
  {
    path: '/category',
    name: 'category',
    component: MiCategory
  },
  {
    path: '/cart',
    name: 'cart',
    component: MiCart
  },
  {
    path: '/user',
    name: 'user',
    component: MiUser
  }
]
