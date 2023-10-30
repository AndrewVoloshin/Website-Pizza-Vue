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
    path: '/Website-on-Vue',
    component: HomeView
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/orders',
    component: Orders
  },
  {
    path: '/checkout',
    component: Checkout
  },
]

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
