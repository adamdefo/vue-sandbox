import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Films from '@/components/Films'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/films',
      name: 'Films',
      component: Films
    }
  ]
})
