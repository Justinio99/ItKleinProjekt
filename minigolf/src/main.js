// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false
/* eslint-disable no-new */

const config = {
  apiKey: "AIzaSyAFp5CCNfNwObPjYf3FdbtBwUoGl245OJg",
  authDomain: "minigolf-club-bern.firebaseapp.com",
  databaseURL: "https://minigolf-club-bern.firebaseio.com",
  projectId: "minigolf-club-bern",
  storageBucket: "minigolf-club-bern.appspot.com",
  messagingSenderId: "39177503999"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

Vue.use(ToggleButton)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

export default firebase.firestore();