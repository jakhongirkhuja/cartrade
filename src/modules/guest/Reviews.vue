<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="reviews">
        <BreadVue bread="Отзывы от наших клиентов" />
        <div class="reviews__block container p-80">
            <div class="reviews__each" v-for="(item, index) in 6" :key="index">
                <div class="author fx">
                    <div class="avatar"><img :src="image" alt=""></div>
                    <div class="info" >
                        <div class="name">Алексей Ельцин</div>
                        <div class="date">8.08.2023</div>
                        <div class="stars">
                            <svg v-for="n in 5" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#CB0000"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <p>Сегодня продал своего «пузанчика» Ситроен С3 Пикассо через Carprice на ул Бутырская, 76. Результат превзошёл мои ожидания. Все быстро, четко и грамотно. За машину было не стыдно, но волнение присутствовало. В итоге - вполне адекватная сумма. Я доволен. Спасибо Carprice.</p>
                </div>
            </div>
            <div class="reviews__form">
                <h2 class="heading text-center">Оставьте ваш отзыв</h2>
                <form>
                    <div class="row">
                        <input type="text"  class="form-control" placeholder="Имя и Фамилия" name="" id="">
                        <input type="text" class="form-control" placeholder="E-mail" name="" id="">
                    </div>
                    <textarea name="" class="form-control"  rows="5" placeholder="Напишите отзыв" id=""></textarea>
                    <div class="btn btn-primary">Отправить</div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import BreadVue from "@/components/Bread.vue";
export default {
    components: {
        BreadVue,
    },
    data() {
        return {
            image: 'https://s3-alpha-sig.figma.com/img/0eed/9d19/a089a4a10e8470b4e1d19282083fca1c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c43kVgcexb869qg2vgeLXbv0Wt9JVi~08nokel-WjARaBmb26OjQQaD8dbKKkPcu~5wQ7DWymulRZtSUN1xgeEhPUX5b5NlXWTw8S2ifOqaTb0y39fbxcABFI~~bj~vTmR-iOvgJjMuAiObVg9jkQCOzGa-4On7VNepLXDTVPkqQuMBIwPhVkCelC5iHKBgztKmnvnF1dQmnrd7nQCKXm1Jqy2xli4ap-5KaBt8jPY0pjhH8sn8fACDan4l5GNrnXVm3ITS29locHm93ig8YNKr5o6HHSLdaZP7OgliQxbwhyPjd-86kzgUxBhCYZzvgh30t6zqfEAOAV9jN56u0MQ__',
        }
    },
}
</script>