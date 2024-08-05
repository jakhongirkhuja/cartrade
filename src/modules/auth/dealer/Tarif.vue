<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class=" container p-80">
            <div class="tarif">
                <div class="tarif__each" v-for="(tarif, index) in tarifs" :key="tarif.id">
                    <div class="tarif__block">
                        <div class="title" :class="index%2!=0? 'second' : ''">{{ tarif.name }}</div>
                        <div class="body">
                            <div class="items" v-for="body in JSON.parse(tarif.body)" >
                                <img src="/icons/like.svg">
                                <span>{{ body }}</span>
                            </div>
                        </div>
                        <div class="price">
                            <p>{{ tarif.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} сум в месяц</p>
                        </div>
                        <div class="button">
                            
                            <div class="btn btn-primary w-100" :disabled="disabled[index]" @click="buyTarif(tarif.id, index)">Внести депозит</div>
                        </div>
                        <div class="month__choose" v-if="disabled[index]">
                            <div class="info">
                                Оплатить за месяц: 
                            </div>
                            <div class="select" >
                                <select name="" v-model="selectedItem[index]" class="form-control" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="6">6</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        </div>
                        <div class="button" v-if="disabled[index]">
                            <div class="btn btn-primary w-100" @click="buyTarifMonth(tarif.id, index)">Оплатить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
       
    },
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT, 
            avatar: null,
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',
            user: '',
            tarifs: [],
            disabled:[],
            selectedItem:[],
        }
    },
    methods: {
        async buyTarif(tarif_id, index){
            this.disabled[index] = true;
            // let tarifIds = JSON.parse(localStorage.getItem('tarif_ids'));
            // if (!tarifIds) {
            //     tarifIds = [];
            // }
            // if (!tarifIds.includes(tarif_id)) {
            //     tarifIds.push(tarif_id);
            //     localStorage.setItem('tarif_ids', JSON.stringify(tarifIds));
            // }
            
        },
        async userInfo(){
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/user/', {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
                if(response.status==200){
                    this.user= json;
                }
            } catch (error) {
                console.log(error);
            }
        },
      
        async buyTarifMonth(tarif_id, index){
            let tarif_price= 0;
            this.tarifs.forEach(tarif => {
                if(tarif.id == tarif_id){
                    tarif_price = tarif.price;
                }
                
            });
            let value = this.selectedItem[index];
            
            try {
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "value": value,
                        "tarif_id": tarif_id,
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/cabinet/user/user-tarif-choose', {
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
                    this.$router.push({ name: 'cabinet.main.dealer'})
                }
                // console.log(json);
               
                
                    
                
                
            } catch (error) {
                console.error('Ошибка:', error);
            }
            // if(this.user.balance<value*tarif_price){
            //     alert('У Вас недостаточно средств, пополните баланс')
            // }

        },
        async gettarifs(){
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/cabinet/tarifs', {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
               
                if(response.status==200){
                    this.tarifs= json;
                    // eslint-disable-next-line no-unused-vars
                    this.tarifs.forEach(tarif => {
                            this.disabled.push(false);
                            this.selectedItem.push(1);
                    });
                    
                }
            } catch (error) {
                console.log(error);
            }
        },
        
    },
    created() {
        this.userInfo();
        this.gettarifs();
    },
}
</script>
<style scoped>
    .notbutton{
        display: block;
        color: #CB0000;
        font-size: 16px;
        font-weight: 700;
        padding-right: 30px;
        padding-bottom: 30px;
        padding-top: 30px;
    }
    .paying{
        color: #CB0000;
        font-size: 16px;
        font-weight: 700;
        padding:10px;
        cursor: pointer;
    }
    .paying:hover{
        text-decoration: underline;
    }
</style>