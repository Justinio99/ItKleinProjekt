import {
  mapMutations,
  mapGetters
} from 'vuex';
import firebase from 'firebase';
import moment from 'moment'
import Podium from '../Podium/Podium.vue'
export default {
  name: 'ranking',
  components: {
    Podium
  },
  data() {
    return {
      userResults: [],
      users: null,
      selectedValue: null,
      isLoggedIn: false,
      askForPlayer: false
    }
  },
  async created() {
    this.isLoggedIn = firebase.auth().currentUser;
    await this.setLocalStorage()
    this.userResults = [];
    for (let i = 0; i < this.users.length; i++) {
      var result = 0;

      for (let j = 0; j < this.users[i].track.length; j++) {
        result += this.users[i].track[j].hits;
      }

      this.userResults.push({
        name: this.users[i].name,
        result: result
      })

    }

   this.userResults.sort(this.dynamicSort("result"))
  },


  methods: {
    async setLocalStorage() {
      this.users = JSON.parse(localStorage.getItem('users'))
    },
    ...mapMutations(['setClearState']),

    dynamicSort(property) {
      var sortOrder = 1;
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    },
    resetUser() {
      localStorage.clear()
      this.setClearState()
      window.location.reload(true)
      this.$router.push('/');
    },
    saveToDatabase() {
      const myGame = this.users.filter((user) => user.id == this.selectedValue);

      var resultUser = null;
      for (let j = 0; j < myGame[0].track.length; j++) {
        resultUser += myGame[0].track[j].hits;
      }

      const firestore = firebase.firestore()
      firestore.collection('playedGames').doc(firebase.auth().currentUser.uid).collection(firebase.auth().currentUser.uid).doc().set({
        playedGame: myGame,
        caclHits: resultUser,
        userId: firebase.auth().currentUser.uid,
        createdAt: new Date()
      })

      
      this.$router.push('/statistik')
    }
  },
  computed: {
    ...mapGetters(['getUsers'])
  }

}
