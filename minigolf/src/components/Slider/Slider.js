import Flickity from 'vue-flickity';
  export default {
    components:{
      Flickity
    },
    data() {
      return {
        results:[],
        flickityOptions: {
          "autoPlay": 5000,
          "pageDots": true,
          "resize": false,
          "prevNextButtons": false,
          "wrapAround": true
        }
      }
    },
    methods:{
      next() {
        this.$refs.flickity.next();
      },
  
      previous() {
        this.$refs.flickity.previous();
      }
    }
      
  }