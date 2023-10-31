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
    path: '/Website-Pizza-Vue',
    component: HomeView
  },
  {
    path: '/Website-Pizza-Vue/menu',
    component: Menu
  },
  {
    path: '/Website-Pizza-Vue/order',
    component: Order
  },
  {
    path: '/Website-Pizza-Vue/login',
    component: Login
  },
  {
    path: '/Website-Pizza-Vue/register',
    component: Register
  },
  {
    path: '/Website-Pizza-Vue/orders',
    component: Orders
  },
  {
    path: '/Website-Pizza-Vue/checkout',
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
