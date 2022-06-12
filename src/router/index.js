import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/apps/Dashboard.vue'
import Registration from '../views/Registration.vue'
import LogIn from '../views/LogIn.vue'
import MyAccount from '../views/apps/MyAccount.vue'
import Measurement from '../views/apps/Measurement.vue'
import Measurements from '../views/apps/Measurements.vue'

import store from '../store'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/measurements/:id',
    name: 'Measurement',
    component: Measurement,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/measurements',
    name: 'Measurements',
    component: Measurements,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('log-in')
  } else {
    next()
  }
})

export default router
