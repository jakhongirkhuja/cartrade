<template>
    <div class="brands">
        <BreadVue bread="Выкуп автомобилей по маркам" />

        <div class="brands-slider">
            <Swiper :slides-per-view="6" :space-between="20" :loop="true"
                :autoplay="{ delay: 2000, disableOnInteraction: false }" :navigation="true" :breakpoints="{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 6 }
                }" class="mySwiper">
                <SwiperSlide v-for="(brand, index) in brands" :key="index">
                    <a href="#" class="brands__block--each fx">
                        <img :src="brand.logo" :alt="`Выкуп автомобилей ${brand.name}`" />
                        <p>
                            <span>Выкуп автомобилей</span>
                            <span>{{ brand.name }}</span>
                        </p>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
<script>
import BreadVue from "@/components/Bread.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
export default {
    components: {
        BreadVue,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
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
            image: 'https://s3-alpha-sig.figma.com/img/0eed/9d19/a089a4a10e8470b4e1d19282083fca1c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c43kVgcexb869qg2vgeLXbv0Wt9JVi~08nokel-WjARaBmb26OjQQaD8dbKKkPcu~5wQ7DWymulRZtSUN1xgeEhPUX5b5NlXWTw8S2ifOqaTb0y39fbxcABFI~~bj~vTmR-iOvgJjMuAiObVg9jkQCOzGa-4On7VNepLXDTVPkqQuMBIwPhVkCelC5iHKBgztKmnvnF1dQmnrd7nQCKXm1Jqy2xli4ap-5KaBt8jPY0pjhH8sn8fACDan4l5GNrnXVm3ITS29locHm93ig8YNKr5o6HHSLdaZP7OgliQxbwhyPjd-86kzgUxBhCYZzvgh30t6zqfEAOAV9jN56u0MQ__',
        }
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