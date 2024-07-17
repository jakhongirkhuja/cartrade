<template>
    <form class="formSort">
        <div class="switcher">
            <div class="switcher__each" @click="changeSlidingPosition(0)">Все марки</div>
            <div class="switcher__each" @click="changeSlidingPosition(1)">Новые</div>
            <div class="switcher__each" @click="changeSlidingPosition(2)">Б/У</div>
            <div class="sliding" :class="slidingClass"></div>
        </div>
        
        <label for="">
            <p>Выбрать марку</p>
            <select class="form-control" name="" id="">
                <option value="" selected disabled>Выбрать</option>
            </select>
        </label>
        <label for="">
            <p>Модель</p>
            <select class="form-control" name="" id="">
                <option value="" selected disabled>Выбрать</option>
            </select>
        </label>
        <label for="">
            <p>Год выпуска</p>
            <input type="text" class="form-control" placeholder="Год">
        </label>
        
        <div class="btn btn-primary w-100">Найти по запросу</div>
    </form>  
</template>
<script>
export default {
    props:['title'],
    data() {
        return {
            slidingClass:'',
        }
    },
    methods: {
        changeSlidingPosition(n){
            switch (n) {
                case 0:
                    this.slidingClass ='first';
                    break;
                case 1:
                    this.slidingClass ='second';
                    break;
                case 2:
                    this.slidingClass ='third';
                    break;    
                default:
                    this.slidingClass='';
                    break;
            }
        }
    },
}
</script>