<template>
  <div id="app">
    <navbar v-show="!loggedIn"></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/NavBar/navbar.vue';

export default {
  name: 'app',
  components: { navbar },
  data(){
    return{
      loggedIn: false
    }
  }
 
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
