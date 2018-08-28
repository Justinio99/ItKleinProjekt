import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import {
  client,
  bahn,
} from './modules';

Vue.use(Vuex);
Vue.use(Vuetify);

export default new Vuex.Store({
  modules: {
    bahn,
    client,
  },
});