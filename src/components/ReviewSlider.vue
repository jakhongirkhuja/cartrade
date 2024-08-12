<template>
  <div class="reviews p-80" v-if="slides.length>0">
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
                    <img v-if="slide.avatar" :src="slide.avatar">
                    <img v-else src="/logo/logo_trade.svg" alt="avatar">
                    <div class="info text-left">
                        <h4>{{slide.fullName}}</h4>
                        <p><svg v-for="n in slide.stars" :key="n.id" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#CB0000"/>
                            </svg></p>
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
        url: import.meta.env.VITE_APP_REST_ENDPOINT, 
        slides: [],
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
      async loadReviews(){
           
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/reviews/', {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
              
                if(json.data.length>0){
                   this.slides = json.data;
                }
                
                
            } catch (error) {
                console.error('Ошибка:', error);
            }
        },
    },
    created() {
        this.loadReviews();
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
  