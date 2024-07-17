<template>
  <div class="reviews p-80">
  <h2 class="heading text-center">Отзывы от наших клиентов</h2>
  <div class="">
    <swiper
      class="custom-swiper"
     
      :slides-per-view="slidesPerView"
      :loop="true"
      :initialSlide="2"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
        }"
        :modules="modules"
      @resize="adjustSlides"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="author">
                <div class="user fx">
                    <img :src="slide.avatar">
                    <div class="info text-left">
                        <h4>{{slide.name}}</h4>
                        <p>{{slide.role}}</p>
                    </div>
                </div>
                <div class="comment text-left">
                    <p>{{slide.body}}</p>
                </div>
            </div>
      </swiper-slide>
     
        </swiper>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/swiper-bundle.css';
  import 'swiper/css/pagination';
  export default {
    components: {
      Swiper,
      SwiperSlide,
      
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
    data() {
      return {
        slides: [{
                name: 'Brooklyn Simmons',
                role:'google отзывы',
                avatar:'https://s3-alpha-sig.figma.com/img/ae2d/b47f/f72ccee032491ca04c9107acf05265b4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqCQMQXLEFQJq7DRVzAsy1clXJQX0RIL6wehkmhsdl-~C~an8wN4lGBKKGTn90CjIbDfA7bP4S336D-JI5nvXPtOnvrj~wllPefXMkhRCYqaXOMaDHXON7ViNbCKWWgZ8XmWJavAwt1M8Eil51DmNyTiXZVJlF9UeMI5oC6Ng3~LOaNbys4pXYYEzvWDoxnX4cFhtdticRbxJl~DgZfhAWaWtngOVrX0dFUteyeLOApBz5g4ltUY0O71rJGyA56FoNdSMsK66lJlDJr761QneLZz6dqg6TCjOmRwzjGdkBkdKlaULs5tPt6fNm~MIte16G3rJbiuRc7iXHd5PVWTVA__',
                body:"Aliquam lorem ante, dapibus in, viverra nisi quis, feugiat a, tellus. Phasellus viverra deo nulla ut metus varius qui laoreet. Quisque sum rutrum. Aenean imperdiet. Etiam ultricies cum sociis.",
            },
            {
                name: 'Brooklyn Simmons',
                role:'google отзывы',
                avatar:'https://s3-alpha-sig.figma.com/img/ae2d/b47f/f72ccee032491ca04c9107acf05265b4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqCQMQXLEFQJq7DRVzAsy1clXJQX0RIL6wehkmhsdl-~C~an8wN4lGBKKGTn90CjIbDfA7bP4S336D-JI5nvXPtOnvrj~wllPefXMkhRCYqaXOMaDHXON7ViNbCKWWgZ8XmWJavAwt1M8Eil51DmNyTiXZVJlF9UeMI5oC6Ng3~LOaNbys4pXYYEzvWDoxnX4cFhtdticRbxJl~DgZfhAWaWtngOVrX0dFUteyeLOApBz5g4ltUY0O71rJGyA56FoNdSMsK66lJlDJr761QneLZz6dqg6TCjOmRwzjGdkBkdKlaULs5tPt6fNm~MIte16G3rJbiuRc7iXHd5PVWTVA__',
                body:"Aliquam lorem ante, dapibus in, viverra nisi quis, feugiat a, tellus. Phasellus viverra deo nulla ut metus varius qui laoreet. Quisque sum rutrum. Aenean imperdiet. Etiam ultricies cum sociis.",
            },
            {
                name: 'Brooklyn Simmons',
                role:'google отзывы',
                avatar:'https://s3-alpha-sig.figma.com/img/ae2d/b47f/f72ccee032491ca04c9107acf05265b4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqCQMQXLEFQJq7DRVzAsy1clXJQX0RIL6wehkmhsdl-~C~an8wN4lGBKKGTn90CjIbDfA7bP4S336D-JI5nvXPtOnvrj~wllPefXMkhRCYqaXOMaDHXON7ViNbCKWWgZ8XmWJavAwt1M8Eil51DmNyTiXZVJlF9UeMI5oC6Ng3~LOaNbys4pXYYEzvWDoxnX4cFhtdticRbxJl~DgZfhAWaWtngOVrX0dFUteyeLOApBz5g4ltUY0O71rJGyA56FoNdSMsK66lJlDJr761QneLZz6dqg6TCjOmRwzjGdkBkdKlaULs5tPt6fNm~MIte16G3rJbiuRc7iXHd5PVWTVA__',
                body:"Aliquam lorem ante, dapibus in, viverra nisi quis, feugiat a, tellus. Phasellus viverra deo nulla ut metus varius qui laoreet. Quisque sum rutrum. Aenean imperdiet. Etiam ultricies cum sociis.",
            },
            {
                name: 'Brooklyn Simmons',
                role:'google отзывы',
                avatar:'https://s3-alpha-sig.figma.com/img/ae2d/b47f/f72ccee032491ca04c9107acf05265b4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqCQMQXLEFQJq7DRVzAsy1clXJQX0RIL6wehkmhsdl-~C~an8wN4lGBKKGTn90CjIbDfA7bP4S336D-JI5nvXPtOnvrj~wllPefXMkhRCYqaXOMaDHXON7ViNbCKWWgZ8XmWJavAwt1M8Eil51DmNyTiXZVJlF9UeMI5oC6Ng3~LOaNbys4pXYYEzvWDoxnX4cFhtdticRbxJl~DgZfhAWaWtngOVrX0dFUteyeLOApBz5g4ltUY0O71rJGyA56FoNdSMsK66lJlDJr761QneLZz6dqg6TCjOmRwzjGdkBkdKlaULs5tPt6fNm~MIte16G3rJbiuRc7iXHd5PVWTVA__',
                body:"Aliquam lorem ante, dapibus in, viverra nisi quis, feugiat a, tellus. Phasellus viverra deo nulla ut metus varius qui laoreet. Quisque sum rutrum. Aenean imperdiet. Etiam ultricies cum sociis.",
            },
            {
                name: 'Brooklyn Simmons',
                role:'google отзывы',
                avatar:'https://s3-alpha-sig.figma.com/img/ae2d/b47f/f72ccee032491ca04c9107acf05265b4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqCQMQXLEFQJq7DRVzAsy1clXJQX0RIL6wehkmhsdl-~C~an8wN4lGBKKGTn90CjIbDfA7bP4S336D-JI5nvXPtOnvrj~wllPefXMkhRCYqaXOMaDHXON7ViNbCKWWgZ8XmWJavAwt1M8Eil51DmNyTiXZVJlF9UeMI5oC6Ng3~LOaNbys4pXYYEzvWDoxnX4cFhtdticRbxJl~DgZfhAWaWtngOVrX0dFUteyeLOApBz5g4ltUY0O71rJGyA56FoNdSMsK66lJlDJr761QneLZz6dqg6TCjOmRwzjGdkBkdKlaULs5tPt6fNm~MIte16G3rJbiuRc7iXHd5PVWTVA__',
                body:"Aliquam lorem ante, dapibus in, viverra nisi quis, feugiat a, tellus. Phasellus viverra deo nulla ut metus varius qui laoreet. Quisque sum rutrum. Aenean imperdiet. Etiam ultricies cum sociis.",
            },],
        slidesPerView: 2,
      };
    },
    mounted() {
      this.adjustSlides();
      window.addEventListener('resize', this.adjustSlides);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.adjustSlides);
    },
    methods: {
      adjustSlides() {
        // this.slidesPerView = window.innerWidth <= 640 ? 1 : 2;
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-swiper{
    
  }
  /* Basic Styles */
  .swiper{
    padding: 0 5% !important;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 51px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #6767673D;
    box-shadow: 0px 18px 20px 0px #171A210D;
    margin-bottom: 60px;
   
   
  }
  .swiper {
  --swiper-navigation-color: #CB0000 !important;
  --swiper-pagination-color: #CB0000 !important;
  --swiper-pagination-bottom: -5px;
}

  .author .user img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: block;
    margin-right: 25px;
    margin-bottom: 28px;
  }
  .author .user .info h4{
    font-size: 16px;
    color: #CB0000;
  }
  .author .user .info p{
    font-size: 12px;
    font-weight: 500;
    color: #5F6973;
  }
  .author .comment p{
    font-size: 17px;
    padding-left: 100px;
  }
  </style>
  