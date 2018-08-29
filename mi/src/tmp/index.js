// 默认路由方式
// import MiLogin from './MiLogin.vue'
// import MiHome from './MiHome.vue'
// import MiCategory from './MiCategory.vue'
// import MiCart from './MiCart.vue'
// import MiUser from './MiUser.vue'

// 路由懒加载+代码分割  异步路由加载
const MiLogin = () => import('./MiLogin.vue')
const MiHome = () => import('./MiHome.vue')
const MiCategory = () => import('./MiCategory.vue')
const MiCart = () => import('./MiCart.vue')
const MiUser = () => import('./MiUser.vue')
// 路由的优化

export default [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/login',
    name: 'login',
    component: MiLogin
  },
  {
    path: '/home',
    name: 'home',
    component: MiHome,
    // 自定义路由源信息
    meta: {
      index: 0
    }
  },
  {
    path: '/category',
    name: 'category',
    component: MiCategory,
    meta: {
      index: 1
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: MiCart,
    meta: {
      index: 2
    }
  },
  {
    path: '/user',
    name: 'user',
    component: MiUser,
    meta: {
      index: 3
    }
  }
]
