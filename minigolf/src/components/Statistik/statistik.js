import firebase from 'firebase'
import statistikChart from '../Chart/chart';
import moment from 'moment'
export default {
    name: 'statistik',
    components: {
        statistikChart
    },
    data() {
        return {
            selected: '',
            chartObj: {},
            currentUser: null,
            results: []
        }
    },
    created() {
        this.currentUser = firebase.auth().currentUser.uid;
        this.calcYear()
        console.log(this.currentUser);
    },
    beforeCreate() {
        this.calcYear()
    },
    methods: {
        handler() {
            switch (this.selected) {
                case "year":
                    this.calcYear();
                    break;
                case "threeMonths":
                    this.calcThreeMonths()
                    break;
                case "oneMonth":
                    this.calcOneMonth()
                    break;
            }
        },
        calcYear() {
            let currentYear = new Date();
            let today = moment();

            let lastYear = moment().subtract(1, 'year').isoWeek(today.isoWeek()).isoWeekday(today.isoWeekday());

            this.results = []
            const playedGames = firebase.firestore().collection('playedGames')
                .doc(this.currentUser)
                .collection(this.currentUser)
                .where('createdAt', '<', currentYear)
                .where('createdAt', '>', lastYear._d);

            playedGames.get().then((result) => {
                result.forEach((result) => {
                    this.results.push(result.data())
                })

            });
            this.chartObj = this.results;




        },
        calcThreeMonths() {
            let currentDate = new Date();
            const endDate = moment().subtract(3, 'months');


            //DB
            this.results = []
            const playedGames = firebase.firestore().collection('playedGames')
                .doc(this.currentUser)
                .collection(this.currentUser)
                .where('createdAt', '<', currentDate)
                .where('createdAt', '>', endDate._d);

            playedGames.get().then((result) => {
                result.forEach((result) => {
                    this.results.push(result.data())
                })

            });
            console.log(this.results);
            this.chartObj = this.results;
        },
        calcOneMonth() {
            let currentDate = new Date();
            const endDate = moment().subtract(1, 'months');
            const playedGames = firebase.firestore().collection('playedGames')
                .doc(this.currentUser)
                .collection(this.currentUser)
                .where('createdAt', '<', currentDate)
                .where('createdAt', '>', endDate._d);

            playedGames.get().then((result) => {
                result.forEach((result) => {
                    this.results.push(result.data())
                })

            });
            console.log(this.results);
            this.chartObj = this.results;
        }

    }
}


