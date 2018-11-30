import { Line } from 'vue-chartjs'
import Vue from 'vue'
import firebase from 'firebase'
export default Vue.component('line-chart', {
  extends: Line,
  data() {
    return {
      selected: null,
      chartObj: {}
    }
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart()
  },
  watched:{
    selected(){
      switch(this.selected) {
        case "year":
            this.calcYear()
            break;
        case "threeMonths":
         this.calcThreeMonths()
            break;
        case "oneMonth":
            this.calcOneMonth()
            break;
      }
    }
  },
  methods:{
    calcYear(){},
    calcThreeMonths(){},
    calcOneMonth(){}
  }
})


  // {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  //   datasets: [
  //     {
  //       label: 'GitHub Commits',
  //       backgroundColor: '#f87979',
  //       data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
  //     }
  //   ]
  // }