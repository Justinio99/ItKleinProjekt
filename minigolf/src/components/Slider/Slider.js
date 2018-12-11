/* eslint-disable */
import Flickity from 'vue-flickity';
import { mapMutations, mapGetters, Store } from 'vuex';
import store from '../../store'
export default {
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        pageDots: false,
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
      activeUser: {},
      lastClicked: 'clicked1',
      wasPrevPlayer: false,
      

    };
  },

  methods: {
    ...mapMutations(['increaseUserHits', 'setUserActive', 'decreaseUserHits','saveInCache','setLocalUser']),

    nextTrack() {
 
      this.saveInCache();
      document.getElementById(this.lastClicked).style.background = 'none';
      this.currentHits = 0;
      this.$refs.flickity.next();
      this.whichTrack = this.whichTrack + 1;
    },
    lastTrack() {
      this.saveInCache();
      this.currentHits = 0;
      this.$refs.flickity.previous();
      this.whichTrack = this.whichTrack - 1;
    },


    nextPlayer() {
      this.setAllButtonsWhite();
      if(this.wasPrevPlayer){
        this.setUserActive(this.activeUser.id);
        const track = this.activeUser.track.filter(track => track.trackId  == this.whichTrack);
        document.getElementById(`clicked${track[0].hits}`).style.background = "red";
        this.wasPrevPlayer = false;
      }
      if (this.lastPlayer || this.getUsers.length == 1) {
        this.nextTrack();
        this.setUserActive(1); 
        this.setActiveUser();
        this.lastPlayer = false;
      } else {
        this.currentHits = 0;
        this.updateActiveUser();
        this.showHitInput = true;
      }

      if(this.getUsers[this.getUsers.length-1].track[17].played){
        this.$router.push('/ranking')
      }
    },

    previousPlayer() {
      this.wasPrevPlayer = true;
      this.lastTrack();
      this.setActiveUser(this.activeUser.id -1);
      const track = this.activeUser.track.filter(track => track.trackId  == this.whichTrack);
      document.getElementById(`clicked${track[0].hits}`).style.background = "yellow";

    },

    //Increase Hits per Track
    addHit(val) {
        this.increaseUserHits({
          userId: this.activeUser.id,
          trackId: this.whichTrack,
          valHits: val
        });
        this.currentHits = val;
        document.getElementById(this.lastClicked).style.background = 'none';
        var id = 'clicked'+val;
        document.getElementById(id).style.background = "green";
        this.lastClicked = id;
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
    },
    //Set Buttons unclicked
    setAllButtonsWhite(){
      for(var i = 1; i < 7; i++){
        document.getElementById("clicked"+i).style.background = 'none';
      }
    },
    //Update store with localData if exists
    checkCacheForUsers(){
      var localData = JSON.parse(localStorage.getItem('users'));
      store.commit("setLocalUser", localData);

      for(var i = 0; i < localData[0].track.length; i++){
        if(localData[0].track[i].played == true){
          this.whichTrack = localData[0].track[i].trackId +1;
        }
      }

    },
  
  },
  mounted() {
    this.$refs.flickity.selectCell(this.whichTrack -1);
  },
   created() {
     //Check if cache has data
     if(localStorage.getItem('users')!= 'null'){
      this.checkCacheForUsers();
      this.setUserActive(1);
      this.setActiveUser();

   
      
     }else{
      this.setUserActive(1);
      this.setActiveUser();
      this.showHitInput = true; 
     }
  
  },
  computed: { 
    ...mapGetters(['getUsers'])
  }
};
