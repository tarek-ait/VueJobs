import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home', 
    component: Home 
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/jobs',
    name:'Jobs',
    component: Jobs
  },
  {
    path : '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props:true
  },
  // redirect
  {
    path:'/all-jobs',
    redirect: '/jobs'
  },
  // catch all 404 
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // base url of our project
  routes // passing out the route
})

export default router
