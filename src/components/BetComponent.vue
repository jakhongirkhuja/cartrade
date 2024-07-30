<template>
   <div class="btn btn-primary-outline timer"><span :class="mustSmall? 'small' : ''">{{ displayTime }}</span></div>
    <input v-if="!auksionOver && auth" type="text"  placeholder="Введите сумму" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"  class="form-control price">
    <div v-if="!auksionOver && auth" class="btn btn-primary w-100 bet" @click="betAuksion()">Сделать ставку</div>
    <p v-if="!auth" style="font-size: 14px; padding-bottom: 20px;">Чтобы сделать ставку нужно пройти регистрацию как дилер</p>
    <div v-if="!auksionOver"  class="btn btn-primary w-100 buy" @click="buyAuksion()">Купить по {{price? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : 0}} сум</div>
    
    <div class="form__block">
        
        <FormVue title="Оставьте заявку и мы свяжемся с вами в ближайшее время"></FormVue>
    </div>
</template>
<script>
import FormVue from '@/components/Form.vue';
export default {
    props: {
        buy_price:{
            type: String,
        },
        timeStart: {
            type: String,
            required: true
        },
        timeEnd: {
            type: String,
            required: true
        },
        auth: {
            type: Boolean
        }
    },
    components: {
        FormVue,
    },
    data() {
        return {
            price : 0,
            displayTime: 'Загрузка...',
            intervalId: null,
            mustSmall:false,
            auksionOver : false,
        }
    },
    mounted() {
        this.startCountdown();
    },
    beforeUnmount() {
        if (this.intervalId) {
        clearInterval(this.intervalId);
        }
    },
    methods: {
        formatTime(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${day}:${month}:${year} ${hours}:${minutes}:${seconds}`;
        },
        calculateCountdown(endTime) {
            const now = new Date().getTime();
            const distance = endTime - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds, distance };
        },
        startCountdown() {
            const timeEnd = new Date(this.timeEnd).getTime();
            const timeStart = new Date(this.timeStart).getTime();

            const now = new Date().getTime();

            if (now < timeStart) {
                this.displayTime = `Время старта: ${this.formatTime(new Date(timeStart))}`;
                this.mustSmall = true;
            } else {
                this.intervalId = setInterval(() => {
                    const { days, hours, minutes, seconds, distance } = this.calculateCountdown(timeEnd);

                    if (distance < 0) {
                        clearInterval(this.intervalId);
                        this.mustSmall = true;
                        this.displayTime = 'Аукцион закончился';
                        this.auksionOver = true;
                    } else {
                        this.displayTime = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
                    }
                }, 1000);
            }
        },
        async betAuksion(){
            let id =this.$route.params.id;
        }

    },
    created() {
        this.price = this.buy_price;
    },
}
</script>