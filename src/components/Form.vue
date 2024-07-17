<template>
    <form >
        <h2>{{ title?? 'Получите доступ к аукционам по всему Узбекситану'}}</h2>
        <label for="">
            <input type="text" class="form-control" placeholder="Имя">
        </label>
        <label for="">
            <input type="text" class="form-control" placeholder="Фамилия">
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