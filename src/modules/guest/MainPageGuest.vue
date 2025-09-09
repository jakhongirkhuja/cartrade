<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="mainPage">
        <div class="hero bg-gradient">
            <div class="hero__content container fx space_between">
                <div class="rectangle rectangle_left"></div>
                <div class="rectangle rectangle_left"></div>
                <div class="content">
                    <h1>Продай авто быстро — заработай больше</h1>
                    <h2>Мы соединяем владельцев автомобилей, которые хотят выгодно продать машину, и инвесторов, которые
                        готовы вложиться в автомобили и зарабатывать на перепродаже. Всё прозрачно и безопасно — вы
                        выбираете роль и начинаете зарабатывать уже сегодня.</h2>
                    <div class="content__action">
                        <img src="/img/car.png" alt="">
                        <div class="content__action-btns">
                            <div class="btn btn-primary vibrate-once" @click="addClass(0)">Продать авто</div>
                            <router-link :to="{ name: 'main.index.dealer' }" class="btn btn-primary">
                                Стать инвестором
                            </router-link>
                        </div>
                    </div>
                    <small>100% прозрачные сделки • Безопасные расчёты • Гарантия выгоды</small>
                </div>

            </div>
        </div>
        <div class="services text-center p-80" style="background-color: #F9F9F9; display: none!important;">
            <h2 class="heading">Расширенный поиск по типу авто</h2>
            <div class="services__search container text-center ">
                <router-link :to="{ name: 'main.auksionguest', query: { type: 4 } }" class="services__search--items">
                    <div class="inside">
                        <img src="/img/kompakt.jpg" alt="">
                        <p>Компакт</p>
                    </div>

                </router-link>
                <router-link :to="{ name: 'main.auksionguest', query: { type: 8 } }" class="services__search--items">
                    <div class="inside">
                        <img src="/img/sedan.jpg" alt="">
                        <p>Седан</p>
                    </div>

                </router-link>
                <router-link :to="{ name: 'main.auksionguest', query: { type: 7 } }" class="services__search--items">
                    <div class="inside">
                        <img src="/img/vnedorojnik.jpg" alt="">
                        <p>Внедорожник</p>
                    </div>

                </router-link>
                <router-link :to="{ name: 'main.auksionguest', query: { type: 1 } }" class="services__search--items">
                    <div class="inside">
                        <img src="/img/kabriolet.jpg" alt="">
                        <p>Кабриолет</p>
                    </div>

                </router-link>
                <router-link :to="{ name: 'main.auksionguest', query: { type: 3 } }" class="services__search--items">
                    <div class="inside">
                        <img src="/img/kupe.jpg" alt="">
                        <p>Купе</p>
                    </div>

                </router-link>
            </div>
        </div>
        <ServiceSold />
        <ChooseUs />
        <div class="checking p-80 text-center">
            <h2 class="heading">Критерии при проверке автомобиля</h2>
            <div class="container">
                <div class="checking__container ">
                    <div class="checking__items fx">
                        <div class="inside">
                            <div class="ranks">
                                <svg v-for="n in 5" width="16" height="15" viewBox="0 0 16 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z"
                                        fill="#CB0000" />
                                </svg>
                            </div>
                            <h3>Техническое состояние</h3>
                            <ul>
                                <li>&#x2022; Мотор</li>
                                <li>&#x2022; Коробка передач</li>
                                <li>&#x2022; Подвеска</li>
                                <li>&#x2022; Рулевое управление</li>
                            </ul>
                        </div>
                        <div class="inside fx-1"></div>
                        <div class="inside">
                            <div class="ranks">
                                <svg v-for="n in 5" width="16" height="15" viewBox="0 0 16 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z"
                                        fill="#CB0000" />
                                </svg>
                            </div>
                            <h3>Сопутствующие факторы</h3>
                            <ul>
                                <li>&#x2022; Гарантия</li>
                                <li>&#x2022; Сервисная книжка</li>
                                <li>&#x2022; Перепробег</li>
                                <li>&#x2022; Кол-во свободных мест в ПТС</li>
                            </ul>
                        </div>
                    </div>
                    <div class="checking__items">
                        <img src="/img/bmw.jpg">
                    </div>
                    <div class="checking__items fx">
                        <div class="inside">
                            <div class="ranks">
                                <svg v-for="n in 5" width="16" height="15" viewBox="0 0 16 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z"
                                        fill="#CB0000" />
                                </svg>
                            </div>
                            <h3>Салон</h3>
                            <ul>
                                <li>&#x2022; Повреждения</li>
                                <li>&#x2022; Загрязнения</li>
                                <li>&#x2022; Порванные, перешитые, прожженные элементы</li>
                            </ul>
                        </div>
                        <div class="inside fx-1"></div>
                        <div class="inside">
                            <div class="ranks">
                                <svg v-for="n in 5" width="16" height="15" viewBox="0 0 16 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z"
                                        fill="#CB0000" />
                                </svg>
                            </div>
                            <h3>Кузов</h3>
                            <ul>
                                <li>&#x2022; Сколы</li>
                                <li>&#x2022; Вмятины</li>
                                <li>&#x2022; Царапины</li>
                                <li>&#x2022; Потертости</li>
                                <li>&#x2022; Окрашенные элементы</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="documents container">
            <h2 class="heading">Необходимые документы</h2>
            <div class="documents__files container row space_between text-center p-80">
                <div class="documents__files--itmes fx-1">
                    <img src="/icons/passportA.svg" alt="">
                    <p>Паспорт гражданина Узбекситана</p>
                </div>

                <div class="documents__files--itmes fx-1">
                    <img src="/icons/noA.svg" alt="">
                    <p>Техпаспорт</p>
                </div>
            </div>
        </div>
        <ReviewSlider />
        <!-- <BuyEarly /> -->
        <div class="brands container">
            <h2 class="heading">Выкуп автомобилей любых марок</h2>
            <div class="brands-slider">
                <Swiper :slides-per-view="6" :space-between="20" :loop="true"
                    :autoplay="{ delay: 2000, disableOnInteraction: true }" :navigation="false"
                    :pagination="{ clickable: true }" :breakpoints="{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 }
                    }" class="mySwiper">
                    <SwiperSlide v-for="(brand, index) in brands" :key="index">
                        <a href="#" class="brands__block--each">
                            <img :src="brand.logo" :alt="`Выкуп автомобилей ${brand.name}`" />
                            <p>

                                <span>{{ brand.name }}</span>
                            </p>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </div>
</template>
<script>
import ReviewSlider from '@/components/ReviewSlider.vue';
import FormSort from '@/components/FormSort.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import BuyEarly from '@/components/BuyEarly.vue';
import ServiceSold from '@/components/ServiceSold.vue';
import { useAuthStore } from '../../stores/auth';
import { usePopUpStore } from '../../stores/popup';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
export default {
    components: {
        ReviewSlider,
        FormSort,
        ChooseUs,
        BuyEarly,
        ServiceSold,
        Swiper,
        SwiperSlide,

    },
    data() {

        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            marks: [],
            brands: [
                { name: "Kia", logo: "/logo/kia.png" },
                { name: "Chevrolet", logo: "/logo/chevrolet.png" },
                { name: "ВАЗ (Lada)", logo: "/logo/vaz.png" },
                { name: "BMW", logo: "/logo/bmw.png" },
                { name: "Suzuki", logo: "/logo/suzuki.png" },
                { name: "Toyota", logo: "/logo/toyota.png" },
                { name: "Honda", logo: "/logo/honda.png" },
                { name: "Lifan", logo: "/logo/lifan.png" },
                { name: "Jaguar", logo: "/logo/jaguar.png" },
                { name: "Jeep", logo: "/logo/jeep.png" },
                { name: "Mercedes", logo: "/logo/mer.png" },
                { name: "Land Rover", logo: "/logo/landrover.png" },
                { name: "Lexus", logo: "/logo/lexus.png" },
                { name: "Nissan", logo: "/logo/nissan.png" },
                { name: "Citroen", logo: "/logo/citroen.png" },
                { name: "Mazda", logo: "/logo/mazda.png" },
                { name: "Porsche", logo: "/logo/porsche.png" },
                { name: "MINI", logo: "/logo/mini.png" },
                { name: "Mitsubishi", logo: "/logo/mitsubishi.png" },
                { name: "Subaru", logo: "/logo/subaru.png" },
                { name: "Opel", logo: "/logo/opel.png" },
                { name: "Peugeot", logo: "/logo/peugiot.png" },
                { name: "Volkswagen", logo: "/logo/volswagen.png" },
                { name: "Renault", logo: "/logo/reanult.png" },
                { name: "Skoda", logo: "/logo/skoda.png" },

                { name: "Infiniti", logo: "/logo/infinity.png" },
                { name: "Volvo", logo: "/logo/volvo.png" },
                { name: "ГАЗ", logo: "/logo/gaz.png" },

                { name: "Hyundai", logo: "/logo/hyundai.png" },
                { name: "Ford", logo: "/logo/ford.png" }
            ],
            imageEaryle: 'https://s3-alpha-sig.figma.com/img/f4b3/84d4/1dafdfe426668c8439a158835e201cce?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0sfYs27HusQEndMlPwNEOGwSQ~fGx651KCWEAH2QZyN2gWmaB9yhxsi23V108pIShS91n5goC8wkyzvDs2ilcqZ4VJ8kflFe1SDgI~DXWd6woQ1RfBrwKvOkyxf4OM2~IZ2GHAFnP-rzi439JFZIg1tFJ3bx9PwuLu4OsvFsUpj9I1rvZHCCDPwRkU7hh03w8PPFqFrk8VG99XalDPRNHnN8NRaIR4KVtAnMxmGZRSE3P-TtdTn2qnbaK5MuL5UDRLDov6qIv~plCfCyZ1knSLgMng2xrRjbCMos-04tBUegr-~WV5o-5SYG4~kV1CmkCX0fukWuNaVjmgwMa8FPA__',
        }
    },
    methods: {
        addClass(type) {
            const authStore = useAuthStore();

            authStore.setActive(true, type);
            const anotherpop = usePopUpStore();
            anotherpop.toggleActive(true);
        },
        async loadMarks() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/loadMark/', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                this.marks = json;

            } catch (error) {
                console.error('Ошибка:', error);
            }


            //     try {
            //       let token = localStorage.getItem('token');

            //       const response = await fetch(this.url+'api/v1/groups/groupDelete/'+this.modelUserId, {
            //       method: 'POST', // или 'PUT'
            //       body: JSON.stringify(finalResult), // данные могут быть 'строкой' или {объектом}!
            //       headers: {
            //        "Content-Type" : "application/json",
            //         "accept" : "application/json",
            //         'Authorization': 'Bearer '+token, 
            //       }
            //     });
            //     const json = await response.json();

            //     if(json.error){

            //       if(typeof json.message == 'object'){
            //             this.resError = json.message;
            //           }else{
            //             this.resStringError = json.message;
            //           }
            //     }else{
            //       this.resSuccess  = 'Successfully Deleted';
            //       this.requestApi(1);
            //       this.submitButton = false;
            //     }

            //   } catch (error) {
            //     console.error('Ошибка:', error);
            //   }

        }
    },
    created() {
        // this.loadMarks();
    },
}
</script>
<style scoped>
.mySwiper {
    width: 100%;
    padding: 20px 0;
}

.brands__block--each {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.brands__block--each img {
    max-width: 60px;
    margin-bottom: 5px;
}

.brands__block--each p {
    font-size: 14px;
}
</style>