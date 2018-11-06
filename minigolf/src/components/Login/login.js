import firebase from 'firebase'
  export default {
    data() {
      return {
        picture: 'https://www.mcbern.ch/fileadmin/logos/logo_mcbmw.png',
        email:'',
        password:''
      }
    },
    methods:{
      login(){
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then((user) =>{
          alert('you are now logged in');
        }).catch((err) =>{
          alert(err.message);
        })
      }
    }
 
  }