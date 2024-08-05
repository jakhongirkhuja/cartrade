<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
    <div class="authentication " :class="{ active: isActive }"> 
        <div class="authentication__form">
           
            <div class="authentication__form--self" >
                <svg class="close" width="20" height="21" @click="closeAuth" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_161_2127)">
                    <path d="M1.02843 20.5C0.764982 20.5 0.501533 20.3998 0.301372 20.1982C-0.100457 19.7963 -0.100457 19.1449 0.301372 18.7431L18.243 0.801372C18.6449 0.399543 19.2963 0.399543 19.6982 0.801372C20.1 1.2032 20.1 1.85467 19.6982 2.25675L1.75675 20.1982C1.55508 20.3986 1.29163 20.5 1.02843 20.5Z" fill="#121212"/>
                    <path d="M18.9714 20.5C18.7079 20.5 18.4447 20.3998 18.2443 20.1982L0.301372 2.25675C-0.100457 1.85467 -0.100457 1.2032 0.301372 0.801372C0.703201 0.399543 1.35467 0.399543 1.75675 0.801372L19.6982 18.7431C20.1 19.1449 20.1 19.7963 19.6982 20.1982C19.4965 20.3986 19.2333 20.5 18.9714 20.5Z" fill="#121212"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_161_2127">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                </svg>

                <h2>{{heading[regType]}}</h2>
                <p>{{underheading[regType]}}</p>
                <div class="role" v-if="regType==1">
                    
                    <div class="role__block">
                        <div class="role__each" @click="role=0" :class="role==0? 'active' : ''">Клиент</div>
                        <div class="role__each" @click="role=1" :class="role==1? 'active' : ''">Автодилер</div>
                        <div class="role__switch" :class="role==1? 'active' : ''"></div>
                    </div>
                    
                </div>
                <label for="name" v-if="regType==1">
                    <input type="text" id="name" v-model="name"   placeholder="Имя" class="form-control">
                </label>
                <label for="familyname" v-if="regType==1">
                    <input type="text" id="familyname"  v-model="familyname" placeholder="Фамилия" class="form-control">
                </label>
                <label for="phone">
                    <small class="info" v-if="phoneblock">смс отправлен: павторно можно отправить через {{ minutes }}:{{ seconds < 10 ? '0' : '' }}{{ seconds }}</small>
                    <input type="text" id="phone" always-fill-mask="true" @input="phoneCheck" :disabled="phoneblock" v-model="phone" placeholder="+998 (__) ___ - __ - __" class="form-control" v-mask="'+998 (##) ### - ## - ##'" />
                   
                    <!-- <input type="text" id="phone" v-model="phone" @input="maskInput"   placeholder="+998 (__) ___ - __ - __" class="form-control"> -->
                </label>
                <label for="confirmcode" v-if="regType!=0">
                    <input type="text" id="confirmcode" v-model="otp"  placeholder="Введите код из СМС" class="form-control">
                </label>
                <label for="password" v-if="regType!=2" class="fx">
                    <input :type="show? 'password' : 'text'" v-model="password" name="password" placeholder="******" id="password" class="form-control">
                    <svg @click="show=!show" v-if="show" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_161_2718)">
                        <path d="M11.1212 7.37873C10.975 7.23248 10.7372 7.23248 10.591 7.37873C10.4447 7.52498 10.4447 7.76348 10.591 7.90899C11.0155 8.3335 11.2502 8.89826 11.2502 9.49974C11.2502 10.7402 10.2407 11.7497 9.00023 11.7497C8.39874 11.7497 7.83399 11.5157 7.40948 11.0905C7.26323 10.9442 7.02547 10.9442 6.87922 11.0905C6.73297 11.236 6.73297 11.4745 6.87922 11.6208C7.44471 12.1878 8.19846 12.4998 9.00023 12.4998C10.6547 12.4998 12.0002 11.1543 12.0002 9.49978C12.0002 8.69797 11.6882 7.94422 11.1212 7.37873Z" fill="black"/>
                        <path d="M9.52273 6.55144C9.35247 6.52146 9.17848 6.49969 8.99999 6.49969C7.3455 6.49969 6 7.84519 6 9.49968C6 9.67817 6.02176 9.85219 6.05249 10.0224C6.08473 10.2039 6.243 10.3322 6.42075 10.3322C6.44251 10.3322 6.46424 10.3307 6.48674 10.3262C6.68998 10.2902 6.82649 10.0952 6.79049 9.89191C6.76725 9.7644 6.74999 9.63468 6.74999 9.49968C6.74999 8.25919 7.7595 7.24968 8.99999 7.24968C9.135 7.24968 9.26476 7.26694 9.39223 7.28944C9.59175 7.32994 9.79048 7.18893 9.82649 6.98569C9.86249 6.78246 9.72601 6.58744 9.52273 6.55144Z" fill="black"/>
                        <path d="M17.9111 9.2575C17.8263 9.15699 15.7976 6.78926 12.9993 5.33952C12.8178 5.24429 12.5891 5.31629 12.4938 5.50079C12.3986 5.68455 12.4706 5.91102 12.6551 6.0063C14.8106 7.12229 16.5326 8.86379 17.1213 9.4998C16.2273 10.468 12.7091 13.9998 9.00035 13.9998C7.74186 13.9998 6.4736 13.696 5.22935 13.096C5.04485 13.0053 4.81911 13.084 4.72911 13.2708C4.63838 13.4568 4.71713 13.681 4.90388 13.771C6.25011 14.4213 7.62862 14.7498 9.00038 14.7498C13.6211 14.7498 17.7386 9.94678 17.9119 9.74203C18.0303 9.60249 18.0296 9.39774 17.9111 9.2575Z" fill="black"/>
                        <path d="M11.4608 4.68169C10.6073 4.39443 9.77931 4.24969 9.00003 4.24969C4.37928 4.24969 0.261789 9.0527 0.0885391 9.25745C-0.0209724 9.38644 -0.0299724 9.57396 0.0675508 9.7142C0.119301 9.78845 1.35905 11.5487 3.50779 12.976C3.57153 13.0187 3.64279 13.039 3.71479 13.039C3.83556 13.039 3.9548 12.9805 4.0268 12.8702C4.14155 12.6985 4.0943 12.4652 3.92179 12.3512C2.34381 11.302 1.26381 10.0352 0.859549 9.51996C1.72281 8.58245 5.2643 4.99972 9.00003 4.99972C9.69827 4.99972 10.446 5.13173 11.2215 5.39195C11.418 5.46244 11.631 5.3537 11.6963 5.15644C11.7623 4.95996 11.6573 4.74772 11.4608 4.68169Z" fill="black"/>
                        <path d="M15.6399 2.85999C15.4936 2.71374 15.2559 2.71374 15.1096 2.85999L2.35969 15.61C2.21344 15.7562 2.21344 15.994 2.35969 16.1402C2.4332 16.213 2.52918 16.2498 2.62519 16.2498C2.7212 16.2498 2.81717 16.213 2.88995 16.1402L15.6399 3.39025C15.7861 3.244 15.7861 3.00624 15.6399 2.85999Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_161_2718">
                        <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <img src="/icons/eyeon.svg" @click="show=!show" v-if="!show" >
                    
                </label>
                <div class="actions" v-if="regType==0">
                    <label for="saveuser" class="containerc" >
                       
                        <input type="checkbox" name="" id="saveuser"> Запомнить
                        <span class="checkmark"></span>
                    </label>
                    <label for="" class="forgetpassword" @click="regType=2; this.phone=null;">Забыли пароль?</label>
                </div>
                <div class="btn btn-primary w-100" v-if="regType==0" @click="loginForm">Войти</div>
                <div class="btn btn-primary w-100" v-else-if="regType==1" @click="registerForm">Регистрация</div>
                <div class="btn btn-primary w-100" v-else @click="recoveryForm">Восстановить</div>
                <div class="line" v-if="regType==0"></div>
                <div class="reg_it" v-if="regType==0">
                    Не зарегестрированы? <span @click="regType=1">Создать аккаунт</span>
                </div>
            </div>
        </div>
        <div class="authentication__poster">
            <div class="bg"></div>
            <div class="hl l1"></div>
            <div class="hl l2"></div>
            <h3>Выкуп авто по рыночной цене</h3>
            <img src="/img/car.png" alt="">
            <div class="hl r1"></div>
            <div class="hl r2"></div>
        </div>
    </div>
</template>
<script>
import {mask} from 'vue-the-mask'
import { useToast, POSITION } from "vue-toastification";
import { useAuthStore } from '../stores/auth';
import { watch, ref } from 'vue';
export default {
    setup() {
        const authStore = useAuthStore(); // Access your Pinia store instance
        const regType = ref(0);
        // Use a ref to wrap isActive for reactive watching
        const isActive = ref(authStore.isActive);
        const istype = ref(authStore.type);
       
        // Watch isActive using a getter function
        watch(
        () => authStore.isActive,
        // eslint-disable-next-line no-unused-vars
        (newValue, oldValue) => {
            console.log('isActive changed:', newValue);
            isActive.value = newValue; // Update isActive ref
            // Perform actions based on isActive changes
        }
        );
        watch(
            () => authStore.type,
            (newValue, oldValue) => {
                console.log('type changed:', newValue);
                istype.value = newValue; // Update istype ref
                regType.value = newValue; // Update regType ref
            }
        );

        const closeAuth = () => {
            
            authStore.setActive(false,0); // Update isActive state in the store
        };

        // You can return data and methods to the template if needed
        return {
            isActive,
            istype,
            regType,
            closeAuth,
        };
    },
    directives: {mask},
    // components: {
    //     directives: {mask}
    // },
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            phoneblock: false,
            timeLeft: 300, // 5 minutes in seconds
            interval: null,
            role: 0,
            heading:[
                'Войдите в аккаунт',
                'Регистрация',
                'Сброс пароля'
            ],
            underheading:[
                'Войдите в аккаунт для дальнейшего оформления заказа и его отслеживания ',
                'Зарегистрируйте свой мобильный номер телефона в нашем сервисе ',
                'Напишите номер телефона и мы отправим вам СМС с кодом подтверждения',
            ],
            
            show: true,
            phone: '',
            name:'',
            familyname:'',
            password:'',
            otp:'',
            insideNew: false,
            verify_number:null,
        }
    },
    computed: {
        minutes() {
            return Math.floor(this.timeLeft / 60);
        },
        seconds() {
            return this.timeLeft % 60;
        },
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        startCountdown() {
            this.interval = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--;
                } else {
                clearInterval(this.interval);
                }
            }, 1000);
        },
        closeAuth() {
            const authStore = useAuthStore();
            authStore.setActive(false,0); // Assuming setActive manages the isActive state in the store
            this.phoneblock = false;
            clearInterval(this.interval);
            this.timeLeft = 300;
            this.regType =0;
        },
        phoneCheck(event){
            let phone = event.target.value.replace(/\D/g, "");
            if(phone.length==12 && (this.regType==1 || this.regType==2) && !this.insideNew){
                this.insideNew = true;
                this.phoneblock = true;
                this.inside = true;
                this.startCountdown();
                this.sendSMSForm();
            }
        },
        async loginForm(){
            const phoneNumber = this.phone.replace(/\D/g, "");
            if(phoneNumber.length!=12 || this.password.length<=5) return;
            
            try {
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "password": this.password,
                        "phoneNumber": phoneNumber,
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/login', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if(json.error){
                   
                    useToast().error(json.message.ru, {
                            timeout: 5000,
                            position: POSITION.TOP_LEFT,
                        });
                }else{
                    useToast().success(json.message.response.ru, {
                            timeout: 5000
                        });
                   
                    localStorage.setItem('token',json.message.token );
                    // this.$router.push({name: 'cabinet.main', refresh: true });
                    this.closeAuth();
                    if(json.message.user.role=='dealer'){
                        window.location.replace("http://localhost:5173/cabinet-dealer");
                        
                    }else if(json.message.user.role=='admin'){
                        window.location.replace("http://localhost:5173/cabinet/admin");
                    }else{
                        window.location.replace("http://localhost:5173/cabinet");
                    }
                    
                }
                
               
                
                
            
            
          } catch (error) {
            useToast().error(error, {
                            timeout: 5000
                        });
           
          }
        },
        async registerForm(){
            const phoneNumber = this.phone.replace(/\D/g, "");
            if(this.name.length==0 || this.familyname.length==0 || this.password.length==0 || phoneNumber.length!=12) return;
                try {
                    
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        'name': this.name,
                        'familyName': this.familyname,
                        'password': this.password,
                        'verify_number': this.otp,
                        'role':this.role,
                        "phoneNumber": phoneNumber,
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/register', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if(json.error){
                    alert(json.message.ru);
                }else{
                    
                    alert(json.message.response.ru);
                    localStorage.setItem('token',json.message.token );
                    this.$router.push({name: 'cabinet.main', refresh: true });
                    this.closeAuth();
                    if(this.role==0){
                        window.location.replace("http://localhost:5173/cabinet");
                    }
                    if(this.role==1){
                        window.location.replace("http://localhost:5173/cabinet-dealer");
                    }
                    
                }
                this.phoneblock = false;
                this.insideNew = false;
                
               
                
                
            
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
        },
        async recoveryForm(){
            const phoneNumber = this.phone.replace(/\D/g, "");
            if(phoneNumber.length!=12) return;
                try {
                    
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        'verify_number': this.otp,
                        "phoneNumber": phoneNumber,
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/reset-password', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if(json.error){
                    alert(json.message.ru);
                }else{
                    
                    alert(json);
                    this.regType = 0;
                }
                this.phoneblock = false;
                this.insideNew = false;
                
               
                
                
            
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
        },
        async sendSMSForm(){
            const phoneNumber = this.phone.replace(/\D/g, "");
            if(phoneNumber.length!=12) return;
            if(this.timeLeft<3) return;
            
            try {
                    let token = localStorage.getItem('token');
                    const finalResult = {
                       
                        "phoneNumber": phoneNumber,
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/register/send-sms', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if(json.error){
                    alert(json.message.ru);
                }else{
                    console.log(json);
                    alert(json.verify_number);
                    
                }
                this.insideNew = false;
                
               
                
                
            
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
        }
    },
    created() {
       
        
       
    },
    watch: {
        
    }
}
</script>
<style scoped>
    .info{
        color: red;
    }
</style>