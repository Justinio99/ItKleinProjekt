import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/Login/login.vue'
import Slider from '../components/Slider/Slider.vue'
import Start from '@/components/Start/Start.vue'
import Signup from '../components/SignUp/signup.vue'
import Statistik from '../components/Statistik/statistik.vue'
import Ranking from '../components/ranking/ranking.vue'
import firebase from 'firebase'
import statistik from '../components/Statistik/statistik';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
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
      component: Statistik,
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
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = firebase.auth().currentUser; 
    if (firebase.auth().onAuthStateChanged(user)) {
      next()
    } else {
      next({name: 'login'})
    }
  }
  next()
})


export default router;