/* eslint-disable */
import Flickity from 'vue-flickity';
import { mapMutations, mapGetters } from 'vuex';
export default {
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        pageDots: true,
        resize: false,
        prevNextButtons: false,
        wrapAround: true,
        draggable: false,
        initialIndex: 0
      },
      whichTrack: 1,
      lastPlayer: false,
      currentHits: 0,
      disableDecrease: false,
      showHitInput: false,
      activeUser: {}
    };
  },

  methods: {
    ...mapMutations(['increaseUserHits', 'setUserActive', 'decreaseUserHits','saveInCache','getLocalUsers']),

    nextTrack() {
      this.saveInCache();
      this.currentHits = 0;
      this.$refs.flickity.next();
      this.whichTrack = this.whichTrack + 1;
      //Get Selected Slide
      //  console.log(this.$refs.flickity.selectCell(4));
      //Select Slide
      //  this.$refs.flickity.selectedIndex()
      //Next slide
      //  this.$refs.flickity.next();
    },

    nextPlayer() {
      if (this.lastPlayer) {
        this.nextTrack();
        this.setUserActive(1);
        this.setActiveUser();
        this.lastPlayer = false;
      } else {
        this.currentHits = 0;
        this.updateActiveUser();
        this.showHitInput = true;
      }
    },
    //Increase Hits per Track
    addHit() {
      if (this.activeUser.track[this.whichTrack - 1].hits !== 7) {
        this.increaseUserHits({
          userId: this.activeUser.id,
          trackId: this.whichTrack
        });
        this.currentHits += 1;
        this.disableDecrease = false;
      } else {
        this.nextPlayer();
      }
    },
    //Decrease Hits per Track
    removeHit() {
      if (!this.currentHits == 0) {
        this.decreaseUserHits({
          userId: this.activeUser.id,
          trackId: this.whichTrack
        });
        this.currentHits -= 1;
      } else {
        this.disableDecrease = true;
      }
    },
    //Update the User which is currently playing
    updateActiveUser() {
      if (!this.lastPlayer) {
        this.setUserActive(this.activeUser.id + 1);
        this.setActiveUser();
        if (this.getUsers[this.getUsers.length - 1].active === true) {
          this.lastPlayer = true;
        }
      } else {
        this.nextTrack();
      }
    },
    setActiveUser() {
      this.activeUser = this.getUsers.filter(user => user.active === true)[0];
    }
  },
   created() {
     //Get the Users from LocalStorage
    this.getLocalUsers();
    this.setUserActive(1);
    this.setActiveUser();
    this.showHitInput = true; 
  },
  computed: {
    ...mapGetters(['getUsers'])
  }
};
