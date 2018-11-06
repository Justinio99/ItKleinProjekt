
/* eslint-disable no-param-reassign */

// initial state
const state = {

  currentTrack: 1,
  result: null
  };
  
  // getters
  const getters = {

   
    getCurrentTrack(){
      return state.currentTrack;
    },
    getResults(){
      return state.result
    }
  
  };
  
  // actions
  const actions = {};
  
  // mutations
  const mutations = {

    nextTrack($state){
      $state.currentTrack += 1;
    },
    addToResult($state,val){
      var val = parseInt(val);
      $state.result = $state.result + val;
    }


  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };