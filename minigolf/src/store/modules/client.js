/* eslint-disable no-param-reassign */

// initial state
const state = {
  users: []

  //    test:true
};

// getters
const getters = {
  getUsers() {
      return state.users;
  },

};

// actions
const actions = {
  setUpState({
      commit
  }, users) {
      for (let x = 0; x < users.length; x++) {
          const tracks = [];
          for (let i = 1; i <= 18; i++) {
              tracks.push({
                  trackId: i,
                  hits: 0,
                  played: false
              });
          }
          const newUser = {
              id: x + 1,
              name: users[x].name,
              track: tracks,
              active: false
          };
          commit('setUser', newUser);
      }
  },
 
};

// mutations
const mutations = {
  setUser($state, user) {
      $state.users.push(user);
  },
  //Increase and Descrase users Hits using val
  increaseUserHits($state, infos) {
      var currentUser = $state.users.filter(user => user.id === infos.userId)[0];
      currentUser.track.filter(track => track.trackId === infos.trackId)[0].hits = infos.valHits;
      currentUser.track.filter(track => track.trackId === infos.trackId)[0].played = true;
  },
  //Set user Active that we know which player is playing
  setUserActive($state, userId) {
      for (var i = 0; i < $state.users.length; i++) {
          $state.users[i].active = false;
      }
      if ($state.users.length == 1) {
          $state.users[0].active = true;
      } else {
          $state.users.filter(user => user.id === userId)[0].active = true;
      }

  },
  //The Data is stored in the cache after each Track is played
  saveInCache($state) {
      if ($state.users.length > 0) {
          localStorage.clear('users');
          localStorage.setItem('users', JSON.stringify($state.users));
      }
  },
    setLocalUser($state, localUser){
        console.log("This is the state", $state.users);
        console.log("this  is the Lstorage",localUser)
    $state.users = localUser;
    console.log("This is the after", $state.users);
    
  },
  setClearState(state) {
    state.users = [];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};