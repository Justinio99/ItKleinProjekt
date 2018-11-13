import firebase, { firestore } from 'firebase'

export default {
      name: 'signup',
    data() {
      return {
        picture: 'https://www.mcbern.ch/fileadmin/logos/logo_mcbmw.png',
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

          const firestore = firebase.firestore();

          firestore.collection('users').doc(user.user.uid).set({
            firstname: this.firstname,
            lastname: this.lastname,
            isClubMember: this.isClubMember
          })
          console.log(user)
          alert('you are ready to go');
          this.$router.push('/login');
        }).catch((err) =>{
          alert(err.message);
        })
      }
    },

  }
