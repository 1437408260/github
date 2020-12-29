import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recommdation from '@/components/Recommdation'
import Login from '@/components/Login'
import Order from '@/components/Order'
import Shop from '@/components/Shop'
import Good from '@/components/Good'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Recommdation',
      name: 'Recommdation',
      component: Recommdation
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Good',
      name: 'Good',
      component: Good
    },
  ]
})
