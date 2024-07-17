<template>
    <form >
        <h2>{{ title?? 'Оставьте заявку и мы свяжемся с вами в ближайшее время'}}</h2>
        
        <label for="">
            <input type="text" class="form-control" placeholder="Марка">
        </label>
        <label for="">
            <input type="text" class="form-control" placeholder="Модель">
        </label>
        <label for="">
            <input type="text" class="form-control" placeholder="Номер телефона">
        </label>
        <label for="">
            <input type="text" class="form-control" placeholder="E-mail">
        </label>
        <div class="btn btn-primary w-100">Отправить</div>
    </form>  
</template>
<script>
export default {
    props:['title'],
}
</script>