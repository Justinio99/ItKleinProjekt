import { stat } from "fs";

/* eslint-disable no-param-reassign */

// initial state
const state = {

  currentTrack: 1
  };
  
  // getters
  const getters = {

    // Example
    // backButtonHide() {
    //   return state.client.nav.hideBackButton;
    // },

    getCurrentTrack(){
      return state.currentTrack;
    }
  
  };
  
  // actions
  const actions = {};
  
  // mutations
  const mutations = {

    nextTrack($state){
      $state.currentTrack += 1;
    }


  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };