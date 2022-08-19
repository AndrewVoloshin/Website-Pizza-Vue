import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret,faRss } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF,faTwitter,faInstagram,faYoutube)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuelidate)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
