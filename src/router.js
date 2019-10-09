import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: { name: 'q1' } },
    {
      path: '/q1',
      name: 'q1',
      component: () => import(/* webpackChunkName: "Q1" */ '@/components/pages/Q1')
    },
    {
      path: '/q2',
      name: 'q2',
      component: () => import(/* webpackChunkName: "Q2" */ '@/components/pages/Q2')
    },
    {
      path: '/q3',
      name: 'q3',
      component: () => import(/* webpackChunkName: "Q3" */ '@/components/pages/Q3')
    },
    {
      path: '/q4',
      name: 'q4',
      component: () => import(/* webpackChunkName: "Q4" */ '@/components/pages/Q4')
    },
    {
      path: '/q5',
      name: 'q5',
      component: () => import(/* webpackChunkName: "Q5" */ '@/components/pages/Q5')
    },
    {
      path: '/preview',
      name: 'q6',
      component: () => import(/* webpackChunkName: "Preview" */ '@/components/pages/Q6')
    },
    {
      path: '/sent',
      name: 'q7',
      component: () => import(/* webpackChunkName: "sent" */ '@/components/pages/Q7')
    }
  ]
})
