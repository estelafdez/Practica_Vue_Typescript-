import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/homeView.vue'
import ProfileView from '../views/profileView.vue'
import ProductsView from '../views/products.vue'
import LoginView from '../views/loginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },

 {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/details.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
