<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="contacts">
        <BreadVue bread="Наши контакты" />
        
        <div class="contacts__block p-80 container">
            <h2 class="heading text-center">Локации нашей компании</h2>
            <div class="contacts__map">
                <GoogleMap />
            </div>
            <h2 class="heading text-center">Контакты по которым вы можете с нами связаться</h2>
            <div class="contacts__form fx space_between">
                <div class="list">
                    <a href="#" class="list__items">
                        <img src="/icons/loc.svg" alt="">
                        <span>г.Ташкент, Яшнабадский р-н, ул.Махтумкули 96, МФИ Чулпон</span>
                    </a>
                    <a href="mailto:NJm250772@gmail.com" class="list__items">
                        <img src="/icons/message.svg" alt="">
                        <span>NJm250772@gmail.com</span>
                    </a>
                    <a href="tel:+998880093377" class="list__items">
                        <img src="/icons/call.svg" alt="">
                        <span>+998880093377</span>
                    </a>
                </div>
                <div class="form">
                    <FormVue></FormVue>
                </div>
            </div>
            
            
        </div>
    </div>
</template>
<script>
import BreadVue from "@/components/Bread.vue";
import FormVue from '@/components/Form.vue';
import GoogleMap from '@/components/GoogleMap.vue';
export default {
    components: {
        BreadVue,
        FormVue,
        GoogleMap
    },
}
</script>