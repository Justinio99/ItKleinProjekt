import LineExample from './config/LineChart'
export default {
  name: 'app',
  components: {
    LineExample
  },
  data(){
    return{
      selected: [],
    }
  },
  methods:{
    log(){
      console.log(this.selected)
    }
  }
}