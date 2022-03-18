import Vue from 'vue'
import VueRouter from 'vue-router'
import PreloadCSV from '../views/PreloadedCSV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loaded from CSV',
    component: PreloadCSV
  },
  {
    path: '/api',
    name: 'Loaded from API',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreloadedAPI.vue')
  },
  {
    path: '/loadCSV',
    name: 'Load a CSV',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoadCSV.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
