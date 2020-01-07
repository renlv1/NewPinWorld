import Vue from 'vue'
import App from './App.vue'
import { i18n } from './i18n/config'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const lang = window.localStorage.getItem('lang') || 'cn'
Vue.prototype.$lang = lang.toLowerCase()

new Vue({
  render: h => h(App),
  i18n,
  router,
  store,
}).$mount('#app')
