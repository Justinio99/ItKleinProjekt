import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../pages/Login/Login.vue'
import Slider from '../components/Slider/Slider.vue'
import Start from '@/components/Start/Start.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/SliderTest',
      name: 'SliderTEst',
      component: Slider
    }

  ]
})
