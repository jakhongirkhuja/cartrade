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
        <div class="documents__list p-80 container">
            <h2 class="heading text-center">Что должен иметь дилер для Юр-х лиц</h2>
            <div class="documents__list--items">ИНН Компании</div>
            <div class="documents__list--items">Расчетный счет</div>
            <div class="documents__list--items">МФО</div>
            <div class="documents__list--items">Директора</div>
            <div class="documents__list--items">Наименование предприятия</div>
        </div>
    </div>
</template>
<script>
import BreadVue from "@/components/Bread.vue";
export default {
    components: {
        BreadVue,
    },
}
</script>