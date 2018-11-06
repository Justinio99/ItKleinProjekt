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
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/SliderTest',
      name: 'SliderTEst',
      component: Slider
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/statistik',
      name: 'statistik',
      component: Chart,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to,from,next) =>{
let currentUser = firebase.auth().currentUser;
let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

if(requiresAuth && !currentUser) next('login');
else if (!requiresAuth && currentUser) next('/');
else next();
})



export default router;