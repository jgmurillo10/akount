import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import Debts from '@/components/Debts'
import Debt from '@/components/Debt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
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
      path: '/debts/:id',
      name: 'Debt',
      component: Debt
    }
  ]
})
