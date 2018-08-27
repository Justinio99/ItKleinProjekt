/* eslint-disable */
import Flickity from 'vue-flickity';
import { mapMutations,mapGetters } from 'vuex';
  export default {
    components:{
      Flickity
    },
    data() {
      return {
        players:["Justin","Nina"],
        flickityOptions: {
          "pageDots": true,
          "resize": false,
          "prevNextButtons": false,
          "wrapAround": true,
          "draggable": false,
          "initialIndex": 0
        },
        whichTrack: 1

      }
    },


    methods:{
      ...mapMutations(['addToResult']),
      
      next() {
        this.$refs.flickity.next();
        this.whichTrack = this.whichTrack + 1 ;
        console.log(this.whichTrack);
           //Get Selected Slide
  //  console.log(this.$refs.flickity.selectCell(4));
   //Select Slide
  //  this.$refs.flickity.selectedIndex()
   //Next slide
  //  this.$refs.flickity.next();
      },

    },
   created(){
    
      let pLength = this.players.length
      for(var i = 0; i < pLength; i++){
        var index = this.players.indexOf(i);
        var array = this.players;
        if (index !== -1) array.splice(index, 1);
        var bahn1 = 1;   //prompt("wiä viu");
        this.players = array;
        //Mir bruchä ä function wo es neus attr zum obj hinzuäfügt und des bi jedärä bahn
        //  this.players.push({'name':this.players[i], 'banh1': bahn1});
1
      } 
      console.log(this.players);

     
    },
    computed:{
      ...mapGetters(['getResults'])
    }
      
  }