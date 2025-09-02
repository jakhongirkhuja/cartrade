<template>
    <div class="documents">
        <BreadVue bread="Необходимые документы" />
        <div class="documents__files container row space_between text-center p-80">
            <div class="documents__files--itmes fx-1">
                <img src="/icons/passportA.svg" alt="">
                <p>Паспорт гражданина Узбекситана</p>
            </div>
            <div class="documents__files--itmes fx-1">
                <img src="/icons/propiskaA.svg" alt="">
                <p>Прописка по месту</p>
            </div>
            <div class="documents__files--itmes fx-1">
                <img src="/icons/noA.svg" alt="">
                <p>Номер Гос.регистрации</p>
            </div>
        </div>
        <!-- <div class="documents__list p-80 container">
            <h2 class="heading text-center">Что должен иметь дилер для Юр-х лиц</h2>
            <div class="documents__list--items" @click="toogleElement">
                <div class="title"><span>Оформлен кредит</span> <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z" fill="#060E29"/>
                </svg></div>
                <div class="body">asdasdasdasd asdasd asdasdasdasdasdasd asdasd asdasdasdasd asdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasd asdasdasdasdasdasd asdasd</div>
            </div>
            <div class="documents__list--items" @click="toogleElement">
                <div class="title">
                    <span>Оформлен на другое лицо </span><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z" fill="#060E29"/>
                    </svg>
                </div>
                <div class="body">
                    asdadd asd aa ds
                </div>
            </div>
            <div class="documents__list--items" @click="toogleElement">
                <div class="title"><span>Оформлен на Юр-е лицо</span><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z" fill="#060E29"/>
                    </svg> </div>
                    <div class="body"> asd a da da da ad a </div>
            </div>
            <div class="documents__list--items" @click="toogleElement">
                <div class="title">
                    <span>Оформлен на Ип  </span><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z" fill="#060E29"/>
                    </svg>
                </div>
                <div class="body">adasd s</div>
            </div>
            <div class="documents__list--items" @click="toogleElement">
                <div class="title"><span>С электронным ПТС</span><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768156 27.0948 0.0768156 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17H15V13H14V17Z" fill="#060E29"/>
                    </svg></div>
                    <div class="body">adsad </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import BreadVue from "@/components/Bread.vue";
export default {
    components: {
        BreadVue,
    },
    methods: {
        toogleElement(event) {
            event.currentTarget.classList.toggle('active');
        }
    },
}
</script>