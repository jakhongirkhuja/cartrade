<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auth__userInfo container p-80">
            <div class="user row">
                <h3>transactions</h3>
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
            name: '',
            familyName:'',
            email: null,
            cars: [],
            user_id: null,
            phoneNumber:null,
            tarif: null,
        }
    },
    methods: {
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
                    console.log(json);
                    this.avatar= json.avatar;
                    this.name = json.name;
                    this.familyName  = json.familyName;
                    this.email = json.email;
                    this.phoneNumber = json.phoneNumber;
                    this.user_id = json.id;
                    this.getTarif(json.tarif_id); 
                }
            } catch (error) {
                console.log(error);
            }
        },
        
    },
    created() {
        this.userInfo();
       
    },
}
</script>
<style scoped>
   
</style>