import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./pages/home/home.vue')
    },
    {
      path: '/PinWorld',
      name: 'PinWorld',
      component: () => import('./pages/PinWorld/PinWorld.vue')
    },
    {
      path: '/PinWorld/detail/:id',
      name: 'PinWorldDetail',
      component: () => import('./pages/PinWorld/detail.vue')
    },
    {
      path: '/economicSystem',
      name: 'economicSystem',
      component: () => import('./pages/EconomicSystem/EconomicSystem.vue')
    },
    {
      path: '/TradingCenter',
      name: 'TradingCenter',
      component: () => import('./pages/TradingCenter/TradingCenter.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./pages/download/download.vue')
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: () => import('./pages/AboutUs/AboutUs.vue')
    }
  ]
})
