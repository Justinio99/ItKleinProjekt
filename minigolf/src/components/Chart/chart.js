import { Line } from 'vue-chartjs'
import moment from 'moment'

export default {
  extends: Line,
  props: {
    data: Array,
    Time: String
  },
  mounted() {
    // this.renderChart({
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //   datasets: [
    //     {
    //       label: 'Hits',
    //       backgroundColor: '#054a0e',
    //       data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    //     }
    //   ]
    // })

  },

  watch: {
    data() {
      moment.locale('de-ch')
      const yearMonths = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
      const intMonth = moment().subtract(1, 'months');
      const lastMonth = [moment(intMonth,'MM').format('MMMM')];
      const oneMonth = [lastMonth, moment().format('MMMM')]
      var threeMonths = []
      for (let i = 3; i > 0; i--) {
        const intMonth = moment().subtract(i, 'months');
        threeMonths.push(moment(intMonth, 'MM').format('MMMM'))
      }
      //Render For year
      if (this.Time == 'year') {
        var dataArray = []
        for (let i = 0; i < this.data.length; i++) {
          dataArray.push(this.data[i].caclHits)
        }
        console.log(dataArray, 'dataarray');
        var data = {
          labels: yearMonths,
          datasets: [
            {
              label: 'Jahres Bilanz',
              backgroundColor: '#054a0e',
              data: dataArray
            }
          ]
        }
        this.renderChart(data)
      }

      //Render for 3 months
      if (this.Time == 'threeMonths') {
        var dataArray = []
        for (let i = 0; i < this.data.length; i++) {
          dataArray.push(this.data[i].caclHits)
        }
        var data = {
          labels: threeMonths,
          datasets: [
            {
              label: '3 Monate',
              backgroundColor: '#054a0e',
              data: dataArray
            }
          ]
        }
        this.renderChart(data)
      }
      if(this.Time == 'oneMonth'){
        var dataArray = []
        for (let i = 0; i < this.data.length; i++) {
          dataArray.push(this.data[i].caclHits)
        }
        
        var data = {
          labels: oneMonth,
          datasets: [
            {
              label: '1 Monat',
              backgroundColor: '#054a0e',
              data: dataArray
            }
          ]
        }
        this.renderChart(data)
      }
    }
  }
}

