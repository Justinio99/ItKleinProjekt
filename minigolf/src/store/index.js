import Vue from 'vue';
import Vuex from 'vuex';

import {
  client,
  bahn,
} from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bahn,
    client,
  },
});