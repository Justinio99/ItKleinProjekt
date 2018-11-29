import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/Login/login.vue'
import Slider from '../components/Slider/Slider.vue'
import Start from '@/components/Start/Start.vue'
import Signup from '../components/SignUp/signup.vue'
import Chart from '../components/Chart/chart.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Start',
      component: Start,
      meta: {
        requiresAuth: false
      } 
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/SliderTest',
      name: 'SliderTEst',
      component: Slider,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/statistik',
      name: 'statistik',
      component: Chart,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart,
      meta: {
        requiresAuth: false
      }
    }
  ]
})


// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//      if (firebase.auth().onAuthStateChanged(user)) {
//    next({
//      path: '/Login'
//    })
//   } else next()

// }
// }
// );


export default router;