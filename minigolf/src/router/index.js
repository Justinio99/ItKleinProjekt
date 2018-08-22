import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'
import LoginPage from '../pages/Login/Login.vue'
import Slider from '../components/Slider/Slider.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
