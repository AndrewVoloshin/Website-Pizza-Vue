import Vue from 'vue'
import Vuex from 'vuex'
import {vegPizzas,bestSellers,nonVegPizzas,sideDishes,desserts} from '@/menu.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActiveSidebar: false,
    isActiveButtonOrder:false,
    generalOrder:0,
    vegPizzas,
    bestSellers,
    nonVegPizzas,
    sideDishes,
    desserts
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
