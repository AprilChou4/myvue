// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

Vue.config.productionTip = false

// Vuex 进行状态管理
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  },
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

Vue.use(vuexI18n.plugin, store)

const translationsEn = {
  'content': 'This is some {type} content'
}
// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
// add translations directly to the application
Vue.i18n.add('en', translationsEn)
// set the start locale to use
Vue.i18n.set('en')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
