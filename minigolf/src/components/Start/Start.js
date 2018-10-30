import Button from '../Button/Button.vue'
export default {
  name: 'Start',
  components:{
    Button
  },
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
      this.$router.push('/slidertest');
    }
  }
}
