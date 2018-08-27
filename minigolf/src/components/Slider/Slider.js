/* eslint-disable */
import Flickity from 'vue-flickity';
import { mapMutations,mapGetters } from 'vuex';
  export default {
    components:{
      Flickity
    },
    data() {
      return {
        flickityOptions: {
          "pageDots": true,
          "resize": false,
          "prevNextButtons": false,
          "wrapAround": true,
          "draggable": false,
          "initialIndex": 0
        },
        whichTrack: 1,
        lastPlayer: false,
        currentHits: null,
        disableDecrease: false

      }
    },


    methods:{
      ...mapMutations(['increaseUserHits', 'setUserActive','decreaseUserHits']),
      
      next() {
        this.currentHits = 0;
        // this.updateActiveUser();
        this.$refs.flickity.next();
        this.whichTrack = this.whichTrack + 1 ;
           //Get Selected Slide
          //  console.log(this.$refs.flickity.selectCell(4));
          //Select Slide
          //  this.$refs.flickity.selectedIndex()
          //Next slide
          //  this.$refs.flickity.next();
      },

      addHit () {
        this.increaseUserHits({userId: this.activeUser.id, trackId: this.whichTrack});
        this.currentHits +=1;
        this.disableDecrease = false;
        if(this.activeUser.track[this.whichTrack -1].hits  == 7){
          console.log("zu viel");
          this.next();
        }
      },
      removeHit(){
        if(!this.currentHits == 0){
          this.decreaseUserHits({userId: this.activeUser.id, trackId: this.whichTrack});
          this.currentHits -=1;
          
        }else{
          this.disableDecrease = true;
        }
        
      },

      updateActiveUser() {
        if (this.lastPlayer){ this.setUserActive(this.activeUser.id + 1);
        if (this.getUsers[this.getUsers.length - 1].active === true){
          this.lastPlayer = true;
        }
      } else {
        this.next();
      }
      }

    },
   created(){
     this.setUserActive(1);
    },
    computed:{
      ...mapGetters(['getUsers']),
      activeUser() {
        return this.getUsers.filter(user => user.active === true)[0];
      }
    }
      
  }