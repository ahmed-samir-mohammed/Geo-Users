import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/GMap'
import SignUp from '@/components/auth/SignUp'
import LogIn from '@/components/auth/LogIn'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Check to see if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // user signed in, proceed to route
      next()
    } else {
      // no user signed in, proceed to route
      next({name: 'LogIn'})
    }
  } else {
    next()
  }
})

export default router