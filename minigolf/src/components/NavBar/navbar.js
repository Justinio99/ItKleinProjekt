import firebase from 'firebase'
  export default {
    components:{
      
    },
    data() {
      return {
        clilcked: false,
      }
    },
    methods:{
      showLogin(){
        if(this.clilcked){
          this.$router.go(-1);
          this.clilcked = false;
        }else{
          this.$router.push('/Login');
          this.clilcked = true;
        }
        
        
      },
      logout(){
        firebase.auth().signOut().then(() =>{
          alert('you are logged out')
          this.$router.push('/home');
          
        })
      }
    }
 
  }