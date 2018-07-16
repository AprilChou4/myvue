import Vue from 'vue'
import Router from 'vue-router'
import MyCenter from '@/components/MyCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyCenter',
      component: MyCenter
    }
  ]
})
