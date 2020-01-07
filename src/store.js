import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMenuIndex: 0
  },
  getters: {
    currentMenuIndex: state => state.currentMenuIndex,
  },
  mutations: {
    SET_MENU_INDEX(state, currentMenuIndex) {
      state.currentMenuIndex = currentMenuIndex
    }
  },
  actions: {}
})
