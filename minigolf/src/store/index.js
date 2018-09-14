import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {
  client,
  bahn,
} from './modules';


export default new Vuex.Store({
  modules: {
    bahn,
    client,
  },
});