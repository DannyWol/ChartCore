import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { /** 대시보드  */
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue')
  },
  { /** 전광판 */
    path: '/wallboard',
    name: 'wallboard',
    component: () => import('../views/WallBoard.vue')
  },
  {
    path: '/manageAuth',
    name: 'manageAuth',
    component: () => import('../views/ManageAuth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
