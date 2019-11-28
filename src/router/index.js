import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
import ListPokes from '@/components/Pokes/List'
import ListTime from '@/components/Time/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/pokes',
      name: 'ListPokes',
      component: ListPokes
    },
    {
      path: '/time',
      name: 'ListTime',
      component: ListTime
    }
  ]
})
