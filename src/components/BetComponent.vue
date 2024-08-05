<template>
   <div class="btn btn-primary-outline timer"><span :class="mustSmall? 'small' : ''">{{ displayTime }}</span></div>
   <p v-if="!auksionOver && maxPrice" class="maxPrice">последняя сумма ставки: <span>{{ maxPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} сум </span></p> 
   <input v-if="!auksionOver && auth && !auksionNotStarted" type="text"  v-model="bid_price" placeholder="Введите сумму" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"  class="form-control price">
    <div v-if="!auksionOver && auth && !auksionNotStarted" class="btn btn-primary w-100 bet" @click="betAuksion()">Сделать ставку</div>
    <p v-if="!auth" style="font-size: 14px; padding-bottom: 20px;">Чтобы сделать ставку нужно пройти регистрацию как дилер</p>
    <template v-if="!auksionOver">
         
            <div v-if="maxPrice<price"  class="btn btn-primary w-100 buy" @click="buyAuksion()">Купить по {{price? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : 0}} сум</div>
       
    </template>
    
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
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            price : 0,
            displayTime: 'Загрузка...',
            intervalId: null,
            mustSmall:false,
            auksionOver : false,
            auksionNotStarted: false,
            bid_price:null,
            maxPrice: 0,
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
                this.auksionNotStarted = true;
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
            if(this.bid_price==0 || this.bid_price==null || this.bid_price<=this.maxPrice) return;
            try {
                let token = localStorage.getItem('token');
                    const finalResult = {
                        "auksion_id": id,
                        "bid_price": this.bid_price,
                        
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }
                const response = await fetch(this.url+'api/cabinet/auksion/bet', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if(response.status==200){
                    alert('сумма ставки '+json.bid_price);
                    this.maxPrice = json.bid_price;
                }else if(response.status==403){
                    alert(json.message.ru);
                }
                console.log(json);
            }catch (error) {
                console.log(error);
            }
        },
        async buyAuksion(){
            let id =this.$route.params.id;
            
            try {
                let token = localStorage.getItem('token');
                    const finalResult = {
                        "auksion_id": id,
                       
                        
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }
             
                const response = await fetch(this.url+'api/cabinet/auksion/buy', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if(response.status==200){
                     this.$router.push({name: 'cabinet.main.dealer' });
                }else if(response.status==403){
                    alert(json.message.ru);
                }
                console.log(json);
            }catch (error) {
                console.log(error);
            }
        },
        async getMaxPriceAuksion(){
            let id =this.$route.params.id;
            try {
                let token = localStorage.getItem('token');
                 
                const response = await fetch(this.url+'api/cabinet/auksion/lastPrice/'+id, {
                    method: 'GET',
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if(response.status==200){
                    this.maxPrice = json.bid_price;
                }else{
                    // alert(json.message);
                }
                console.log(json);
            }catch (error) {
                console.log(error);
            }
        }

    },
    created() {
        this.price = this.buy_price;
        this.getMaxPriceAuksion();
    },
}
</script>
<style scoped>
.maxPrice{
    font-size: 15px;
    text-align: left;
    padding-bottom: 15px;
}
.maxPrice span{
    display: block;
    color: red;
    font-size: 18px;
    font-weight: 600;
}
</style>