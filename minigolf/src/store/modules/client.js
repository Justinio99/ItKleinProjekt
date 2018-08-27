/* eslint-disable no-param-reassign */

// initial state
const state = {
  users: []

  //    test:true
}

// getters
const getters = {

  getUsers () {
    return state.users
  }

}

// actions
const actions = {

  setUpState ({commit}, users) {
   
    const tracks = []
    for (let i = 1; i <= 18; i++) {
      tracks.push({trackId: i, hits: 0})
    }
    for (let x = 0; x < users.length; x++) {
      const newUser = {
        id: x + 1,
        name: users[x].name,
        track: tracks,
        active: false
      }
      commit('setUser', newUser)
    }
  }
}

// mutations
const mutations = {
  setUser ($state, user) {
    $state.users.push(user)
  },
  increaseUserHits ($state, infos) {
    $state.users.filter(user => user.id === infos.userId)[0].track.filter(track => track.trackId === infos.trackId)[0].hits += 1
  },
  decreaseUserHits ($state, infos) {
    $state.users.filter(user => user.id === infos.userId)[0].track.filter(track => track.trackId === infos.trackId)[0].hits -= 1
  },
  setUserActive ($state, userId) {

    for(var i = 0; i < $state.users.length; i++){
      $state.users[i].active = false
    }
    $state.users.filter(user => user.id === userId)[0].active = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
