import firebase from "firebase";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      clilcked: false,
      gameIsPlaying: false
    };
  },
  watch: {
    getUsers: function () {
      this.gameIsPlaying = true;
    }
  },
  methods: {
    ...mapMutations(["setIsLoggedIn"]),
    resetGame() {
      var confirm = confirm('Sämtliche Daten vom Aktuellen spiel werden gelöscht. Willlst du wirklich das Spiel zurücksetzen?')
      if (confirm) {

        localStorage.clear()
        window.location.reload(true)
        this.$router.push('/');
      }
    },
    showLogin() {
      if (this.clilcked) {
        this.$router.go(-1);
        this.clilcked = false;
      } else {
        this.$router.push("/Login");
        this.clilcked = true;
      }
    },

    redirect() {
      this.$router.push("statistik");
    },
    currentGame() {
      this.$router.push('/Traks');
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("you are logged out");
          this.setIsLoggedIn(false);
          this.$router.push("/");
        });
    },
    showHome() {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["getLoggedIn", 'getUsers'])
  }
};
