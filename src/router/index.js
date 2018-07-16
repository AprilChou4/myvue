import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/Find'
import Vedio from '@/components/Vedio'
import Friend from '@/components/Friend'
import Account from '@/components/Account'
import MyCenter from '@/components/MyCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Find',
      component: Find
    },
    {
      path: '/vedio',
      name: 'Vedio',
      component: Vedio
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/mycenter',
      name: 'MyCenter',
      component: MyCenter
    }
  ]
})
