import { mapMutations, mapGetters } from 'vuex';
import Podium from '../Podium/Podium.vue'  
export default {
    name: 'ranking',
    components:{
      Podium
    },
    data() {
      return {
        userResults: []
      }
    },
    created(){
        const users = this.getUsers;
       this.userResults = [];
        for (let i = 0; i < users.length; i++) {
            var result = 0;

              for (let j = 0; j < users[i].track.length; j++) {
                result += users[i].track[j].hits;
            }

            this.userResults.push({name: users[i].name, result: result}) 
            console.log('Hallo Justinio:  ', this.userResults.sort(this.dynamicSort("result")))
        }
    },

    methods:{
      ...mapMutations(['setClearState']),

      dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    },
    resetUser() {
      localStorage.clear()
      this.setClearState()
      this.$router.push('/home');
    }
    },
    computed: { 
        ...mapGetters(['getUsers'])
      }

  }