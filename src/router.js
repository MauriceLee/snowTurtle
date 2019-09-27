import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: () => import('@/components/Equipment/Equipment.vue')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('@/components/Todolist/Todolist.vue'),
      children: [
        {
          path: 'active',
          name: 'active'
        },
        {
          path: 'complete',
          name: 'complete'
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/Register/Register.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
