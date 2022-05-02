import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './assets/tailwind.css'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'
import vuetify from './plugins/vuetify'
import router from './router'

import http from '@/plugins/axios'
import { useUserStore } from './store/users'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  pinia,
  vuetify,
  router,
  store: useUserStore,
  
  render: h => h(App)
}).$mount('#app')
