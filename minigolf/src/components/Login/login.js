import firebase from 'firebase'
import { mapMutations } from 'vuex';
  export default {
    data() {
      return {
        picture: 'https://www.mcbern.ch/fileadmin/logos/logo_mcbmw.png',
        email:'',
        password:'',
        
      }
    },
    created(){
    },
    methods:{
      ...mapMutations(['setIsLoggedIn']),
      login(){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((user) =>{
          alert('you are now logged in');
          this.setIsLoggedIn(true)
          this.$router.push('/')
         
        }).catch((err) =>{
          alert(err.message);
        })
      }
    }
  }