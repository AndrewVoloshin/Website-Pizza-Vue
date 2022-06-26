import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/router/menu.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActiveSidebar: false,
    isActiveButtonOrder:false,
    generalOrder:0,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu
  }
})
