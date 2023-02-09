import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/city/:cityname',
    name:'City',
    component:() =>import('../views/City.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
