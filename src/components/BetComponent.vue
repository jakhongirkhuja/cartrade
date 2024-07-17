<template>
   <div class="btn btn-primary-outline timer">1:56:32</div>
    <input type="text"  placeholder="Введите сумму" class="form-control price">
    <div class="btn btn-primary w-100 bet" >Сделать ставку</div>
    <div class="btn btn-primary w-100 buy">Купить по 1.700.000 $</div>
    <div class="form__block">
        <FormVue title="Оставьте заявку и мы свяжемся с вами в ближайшее время"></FormVue>
    </div>
</template>
<script>
import FormVue from '@/components/Form.vue';
export default {
    components: {
        FormVue,
    },
}
</script>