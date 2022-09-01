import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShowPost from '../views/posts/Show.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'ShowPost',
    component: ShowPost,
    props : true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
