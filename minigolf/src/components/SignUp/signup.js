import firebase from 'firebase'

  export default {
      name: 'signup',
    data() {
      return {
      
        email:'',
        password:'',
        firstname: '',
        lastname: '',
        isClubMember: false

      }
    },
    methods:{
      signUp(){
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.email, this.password).then((user) => {
          alert('Your account has been created')
        }).catch((err) =>{
          alert(err.message);
        })
      }
    },
 
  }