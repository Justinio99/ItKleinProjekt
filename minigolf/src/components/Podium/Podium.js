export default {
    name: "Podium",
    props:{
        Players: Array
    },
    data() {
      return {
          players: null
      };
    },
    created(){
        this.players = this.Players
    },
    watch:{
        Players(){
        }
    }
 };