import {Line} from 'vue-chartjs'
import moment from 'moment'


export default ({
  //Fächerschnitt in Semester vergleichen 
    extends: Line,
    props:{
      SelectedInterval: Array,
      
    },  
  data () {
    return {
      gradient: null,
      gradient2: null,
      gradient3: null,
      month: null,
      currentInterval: []
    }
  },
  created(){
    this.month = new Date().getMonth() - 1;
    const date = moment("MMM")
  },
  watch:{
    SelectedInterval(){
      alert()
      switch(this.SelectedInterval) {
        case "year":
            this.currentInterval = ["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sept","Okt","Nov","Dez"]
            break;
        case "threeMonths":
            this.currentInterval = [this.month , moment.months(this.month -1), moment.months(this.month -2)]
            break;
        case "oneMonth":
            this.currentInterval = [this.month]
            break;
      }
      this.redo()
    }
  },
  mounted () {
  

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient3.addColorStop(0, 'rgba(18, 125, 37, 0.9)')

    this.renderChart({
        labels: this.currentInterval,
      datasets: [
        {
          label: 'Jahr',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 2,
          pointBorderColor: 'white',
          data: [4,2,6,3,5,6]
        },
        {
          label: 'Last 3 Month',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 2,
          data: [6,4.5,3,6]
        },
        {
          label: 'Last Month',
          borderColor: '#2e5408',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 2,
          data: [3.5,4.5,2,5.5]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  },
  methods:{
    redo(){

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient3.addColorStop(0, 'rgba(18, 125, 37, 0.9)')

    this.renderChart({
        labels: this.currentInterval,
      datasets: [
        {
          label: 'Jahr',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 2,
          pointBorderColor: 'white',
          data: [4,2,6,3,5,6]
        },
        {
          label: 'Last 3 Month',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 2,
          data: [6,4.5,3,6]
        },
        {
          label: 'Last Month',
          borderColor: '#2e5408',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 2,
          data: [3.5,4.5,2,5.5]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
    }
  }
})