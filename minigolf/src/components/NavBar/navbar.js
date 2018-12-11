import firebase from "firebase";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      clilcked: false
    };
  },
  methods: {
    ...mapMutations(["setIsLoggedIn"]),
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
    ...mapGetters(["getLoggedIn"])
  }
};
