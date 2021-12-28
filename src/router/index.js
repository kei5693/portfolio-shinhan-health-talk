import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*
  {
    path: '/View/ViewPage/1',
    name: 'ViewPage01',
    component: () => import('../components/list/ViewPage01.vue')
  },
  {
    path: '/View/ViewPage/2',
    name: 'ViewPage02',
    component: () => import('../components/list/ViewPage02.vue')
  },
  {
    path: '/View/ViewPage/3/',
    name: 'ViewPage03',
    component: () => import('../components/list/ViewPage03.vue')
  },
  {
    path: '/View/ViewPage/4',
    name: 'ViewPage04',
    component: () => import('../components/list/ViewPage04.vue')
  },
  {
    path: '/View/ViewPage/5',
    name: 'ViewPage05',
    component: () => import('../components/list/ViewPage05.vue')
  },
  */
  {
    path: '/*',
    redirect: { name: 'Home', }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
