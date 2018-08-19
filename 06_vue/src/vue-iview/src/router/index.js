import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {path: "/home", component: Home},
  {path: "/about", component: About},
  {path: "/", redirect: "/home"},
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
