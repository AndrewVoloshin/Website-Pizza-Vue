import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Menu from '@/views/MenuView.vue'
import Login from '@/views/LogInView.vue'
import Register from '@/views/RegisterView.vue'
import Order from '@/views/OrderView.vue'
import Orders from '@/views/OrdersView.vue'
import Checkout from '@/views/CheckoutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    // name: 'menu',
    component: Menu
  },
  {
    path: '/order',
    // name: 'menu',
    component: Order
  },
  {
    path: '/login',
    // name: 'menu',
    component: Login
  },
  {
    path: '/register',
    // name: 'menu',
    component: Register
  },
  {
    path: '/orders',
    // name: 'menu',
    component: Orders
  },
  {
    path: '/checkout',
    // name: 'menu',
    component: Checkout
  },
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
