import Home from './Home.vue'

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
  }
]
