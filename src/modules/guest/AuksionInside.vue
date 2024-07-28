<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
    <div class="aukstion">
        <div class="car">
            <div class="container" v-if="car">

                <div class="car__type">
                    <span>{{ JSON.parse(car.car_body_type.name)[0] }}</span><span>год назад</span>
                </div>
                <h2 class="car__name">{{car.car_mark.name}} {{car.car_model.name}}</h2>
                <div class="car__info">
                    <p>{{car.title}}</p>
                    <p class="price">{{car.buy_price}} сум</p>
                </div>
                <div class="car__block">
                    <div class="car__block--info">
                        <div class="car__poster" v-bind:style="{ 'background-image': 'url(' + url+'/files/cars/'+car.images[0].image + ')' }">
                    
                        </div>
                        <div class="car__slider" ref="carSlider" @mousedown="handleMouseDown" @mouseleave="handleMouseLeave" @mouseup="handleMouseUp" @mousemove="handleMouseMove">
                            
                            <div class="car__slider--each"  v-bind:style="{ 'background-image': 'url(' + url+'/files/cars/'+imagecar.image + ')' }" v-for="imagecar in car.images"></div>
                        </div>
                        <div class="car__mobile">
                            <BetComponent></BetComponent>
                            
                        </div>
                        <div class="car__char bg__car">
                            <h4 class="title">Обзор</h4>
                            <div class="car__char--items">
                                <p>Марка</p>
                                <p>{{car.car_mark.name}}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Модель</p>
                                <p>{{car.car_model.name}}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Цвет</p>
                                <p>{{ JSON.parse(car.color.name)[0] }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Тип вождения</p>
                                <p>{{car.drive_types}}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Передача инфекции</p>
                                <p>{{ JSON.parse(car.transmission.name)[0] }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Состояние</p>
                                <p>{{ JSON.parse(car.condation.name)[0] }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Год</p>
                                <p>{{car.year}} год</p>
                            </div>
                            <div class="car__char--items">
                                <p>Пробег</p>
                                <p>{{car.mileage}}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Тип топлива</p>
                                <p>{{ JSON.parse(car.car_fuil_type.name)[0] }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Размер двигателя</p>
                                <p>{{car.engine_capacity}} л</p>
                            </div>
                            <div class="car__char--items">
                                <p>Двери</p>
                                <p>{{car.doors}}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Цилиндры</p>
                                <p>{{ car.cylinders }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>ВИН</p>
                                <p>{{car.vin}}</p>
                            </div>
                        </div>
                        <div class="car__body bg__car">
                            <h4 class="title">Описание</h4>
                            <p>
                                {{ car.body }}
                            </p>    
                        </div>
                        <div class="car__func bg__car">
                            <h4 class="title">Функции</h4>
                            <template  v-for="fun in JSON.parse(car.functions)">
                                <div class="car__func--items" v-if="fun.title.length>0">
                                    <h3>{{ fun.title }}</h3>
                                    <ul>
                                        <li v-for="body in fun.body.split(',')">{{ body }}</li>
                                    </ul>
                                </div>
                            </template>
                            
                        </div>
                    </div>
                    <div class="car__block--actions" v-if="loading">
                        <div class="owning" v-if="owner">
                            <div class="btn btn-primary w-100" @click="removeCar">Удалить объявление</div>
                            <div class="btn btn-primary-outline w-100">Редактировать объявление</div>
                        </div>
                        <div v-else>
                            <p class="title">Завершение аукциона через:</p>
                            <BetComponent></BetComponent>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import BetComponent from '@/components/BetComponent.vue';
export default {
    components: {
        BetComponent,
    },
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT, 
            owner: false,
            loading: false,
            resultCount: 4733,
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/ba1c/77b7/f508483313763af78e063463927acbac?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYKtLpDVn8pjL9fK4bngMlNRU4ErX~xXRUZr~DfHNgFE8BAchrFnQ4PlYQjHuA~Leffe17gvsF~Z~CaXGff9xVFT7QqTYihCklVAJw81bKKffPfKpSzLvuK8XLra-R7Fd4yG9u05FUl7ipMmUU5FQZ3Dy2ASR356v-C0v-02QnXKnDzYjBPi2-0QXNqSAjjI-7KR2UxymFG~3Z25N6vh7Db2Owj5eE91F3xpMPpxPCefsvOKkoRNKLcmdvQ9LfsK1HVsR6Kbx3j1NtPrHFGYziD6uaLKQ2uRVe3mJnuzyOPFLNRbJMhBx1263k-~GSe5Y5oIU4iC7VY5SB0I37hw8w__',
            isDown: false,
            startX: 0,
            scrollLeft: 0,
            car:null,
            images:['https://s3-alpha-sig.figma.com/img/91dc/8f0a/334d1aa1dca640d1260f281fb9c5a2d4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juFeEiPA8CoP36ZD5BrMo2roIkPOEOEy2v0J5tQuK4cPQRA4wLJAO2XdE4aLwxkAaBgRq1PjNAdOKQ2RkM8Ys8ExkVtQii2rpdj0yBObRDu9Ob9nk93KKJsQwcESVyp2WE~IS8Dxd8bIif9oo5Rz7dJXVeckMW97W3iHDzx8KsP6QE1l-Catp6i3-PRmJ01bZpFymvSLZK0JHf-kQ6alsZDFZP7-u1mZlLZbCfsHvGnt9igaS87E1NvDvQRiNCNF1t-WlmAVf17c81zAmNQ0PiTWQEqr89DymCAu8WzDYuttUWJmrOliGGS-OZtcUmbqrSdogPONQj3v4sNsC5j~Zg__']
        }
    },
    mounted() {
    //   this.adjustSlides();
    //   window.addEventListener('resize', this.adjustSlides);
    },
    beforeUnmount() {
    //   window.removeEventListener('resize', this.adjustSlides);
    },
    methods: {
        handleMouseDown(e) {
            this.isDown = true;
            this.$refs.carSlider.classList.add('active');
            this.startX = e.pageX - this.$refs.carSlider.offsetLeft;
            this.scrollLeft = this.$refs.carSlider.scrollLeft;
        },
        handleMouseLeave() {
            this.isDown = false;
            this.$refs.carSlider.classList.remove('active');
        },
        handleMouseUp() {
            this.isDown = false;
            this.$refs.carSlider.classList.remove('active');
        },
        handleMouseMove(e) {
            if (!this.isDown) return;
            e.preventDefault();
            const x = e.pageX - this.$refs.carSlider.offsetLeft;
            const walk = (x - this.startX) * 1; // Scroll-fast
            this.$refs.carSlider.scrollLeft = this.scrollLeft - walk;
        },
        async checkUser(){
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/user', {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
                if(response.status==200){

                   if(json.id==this.car.user_id){
                        this.owner = true;
                   }else{
                        this.owner = false;
                   }
                   this.loading = true;
                }
            } catch (error) {
                this.loading = true;
                console.log(error);
            }
        },
        async getCars(){
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/cabinet/car?id='+this.$route.params.id, {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
                if(response.status==200){
                   
                    this.car = json;
                    this.checkUser();
                }
            } catch (error) {
                console.log(error);
            }
        },
        async removeCar(){
            try {
                        // eslint-disable-next-line no-unused-vars
                        let token = localStorage.getItem('token');
                        const finalResult = {
                            
                            "mark_id": this.selectedMark,
                          
                            
                          
                    }
                  

                    var data = new FormData()
                    
                    for (const key in finalResult) {
                        data.append(key, finalResult[key]);

                    }
                    
                    const response = await fetch(this.url+'api/cabinet/car/delete/'+this.$route.params.id, {
                        method: 'POST',
                        body: data,
                        headers: {
                            'Accept-Language': 'en-US,en;q=0.8',
                            "accept": "application/json",
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        },

                    });
                    const json = await response.json();
                    if(json.errors){
                        alert(json.message);
                    }
                    if(response.status==200){
                        alert('auksion has been deleted');
                    }
                    this.$router.go(-1);
                    console.log(json);
                    // console.log(json);
                
                    
                    
                
                
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    },
    created() {
      
        this.getCars();

    },
}
</script>
<style>
    .swiper-slide {
        width: 160px!important;
   
   
  }
</style>
