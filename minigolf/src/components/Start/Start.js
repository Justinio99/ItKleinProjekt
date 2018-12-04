
export default {
  name: 'Start',
  
  data () {
    return {
      players: [{name: '', id: 1}]
    }
  },
  methods: {
    addPlayer () {
      this.players.push({name: '', id: this.players.length + 1});   
    },
    startGame () {
      localStorage.setItem('users','null');
      this.$store.dispatch('setUpState', this.players);
      this.$router.push('/Traks');
    }
  }

}
