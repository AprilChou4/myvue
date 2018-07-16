// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

// Vuex 进行状态管理
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    linkIndex: ''
  },
  mutations: {
    changeLinkIndex (state, index) {
      state.linkIndex = index
    }
  },
  actions: {

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
