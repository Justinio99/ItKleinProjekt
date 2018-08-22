
export default {
    name: 'Login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created(){
      // alert("Hallo")
    },
    methods:{
      testFunction(){
        alert("Hallo0");
      }
    },
    computed:{
      testFunction(){
        return "Hallo";
      }
    }
  }