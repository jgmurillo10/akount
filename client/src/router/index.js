import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Debts from '@/components/Debts'
import Incomes from '@/components/Incomes'
import Overview from '@/components/Overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/debts',
      name: 'Debts',
      component: Debts
    },
    {
      path: '/incomes',
      name: 'Incomes',
      component: Incomes
    },
    {
      path: '/',
      name: 'Overview',
      component: Overview
    }
  ]
})
