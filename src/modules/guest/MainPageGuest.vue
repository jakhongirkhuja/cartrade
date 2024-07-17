<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="mainPage">
       <div class="hero bg-gradient">
           <div class="hero__content container fx space_between">
               <div class="rectangle rectangle_left"></div>
               <div class="rectangle rectangle_left"></div>
               <div class="content">
                   <h1>Занимаетесь <br>перепродажей авто?</h1>
                   <img src="/img/car.png" alt="">
               </div>
               <div class="form">
                   <FormSort />
               </div>
               <div class="rectangle rectangle_right one"></div>
               <div class="rectangle rectangle_right"></div>
           </div>
       </div>
       <div class="services text-center p-80" style="background-color: #F9F9F9;">
           <h2 class="heading">Расширенный поиск по типу авто</h2>
           <div class="services__search container text-center ">
                <a href="#" class="services__search--items">
                    <div class="inside">
                        <img src="/img/kompakt.jpg" alt="">
                        <p>Компакт</p>
                    </div>
                    
                </a>
                <a href="#" class="services__search--items">
                    <div class="inside">
                        <img src="/img/sedan.jpg" alt="">
                        <p>Седан</p>
                    </div>
                    
                </a>
                <a href="#" class="services__search--items">
                    <div class="inside">
                        <img src="/img/vnedorojnik.jpg" alt="">
                        <p>Внедорожник</p>
                    </div>
                    
                </a>
                <a href="#" class="services__search--items">
                    <div class="inside">
                        <img src="/img/kabriolet.jpg" alt="">
                        <p>Кабриолет</p>
                    </div>
                    
                </a>
                <a href="#" class="services__search--items">
                    <div class="inside">
                        <img src="/img/kupe.jpg" alt="">
                        <p>Купе</p>
                    </div>
                    
                </a>
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
                                <svg v-for="n in 5" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z" fill="#CB0000"/>
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
                                <svg v-for="n in 5" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z" fill="#CB0000"/>
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
                                <svg v-for="n in 5" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z" fill="#CB0000"/>
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
                                <svg v-for="n in 5" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z" fill="#CB0000"/>
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
       
        <ReviewSlider />    
        <BuyEarly />
       
    </div>
</template>
<script>
import ReviewSlider from '@/components/ReviewSlider.vue';
import FormSort from '@/components/FormSort.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import BuyEarly from '@/components/BuyEarly.vue';
import ServiceSold from '@/components/ServiceSold.vue';
export default {
   components: {
           ReviewSlider,
           FormSort,
           ChooseUs,
           BuyEarly,
           ServiceSold,
   },
   data() {
        return {
            imageEaryle:'https://s3-alpha-sig.figma.com/img/f4b3/84d4/1dafdfe426668c8439a158835e201cce?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0sfYs27HusQEndMlPwNEOGwSQ~fGx651KCWEAH2QZyN2gWmaB9yhxsi23V108pIShS91n5goC8wkyzvDs2ilcqZ4VJ8kflFe1SDgI~DXWd6woQ1RfBrwKvOkyxf4OM2~IZ2GHAFnP-rzi439JFZIg1tFJ3bx9PwuLu4OsvFsUpj9I1rvZHCCDPwRkU7hh03w8PPFqFrk8VG99XalDPRNHnN8NRaIR4KVtAnMxmGZRSE3P-TtdTn2qnbaK5MuL5UDRLDov6qIv~plCfCyZ1knSLgMng2xrRjbCMos-04tBUegr-~WV5o-5SYG4~kV1CmkCX0fukWuNaVjmgwMa8FPA__',
        }
   },
}
</script>