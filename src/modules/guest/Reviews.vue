<!-- eslint-disable vue/multi-word-component-names -->

<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="reviews">
        <BreadVue bread="Отзывы от наших клиентов" />
        <div class="reviews__block container p-80">
            <div class="reviews__each" v-for="(slide, index) in slides" :key="index">
                <div class="author fx">
                    <div class="avatar">
                        
                        <template v-if="slide.user && slide.user.avatar"> 
                            <img  :src="url+'/files/user/'+slide.user.avatar">
                        </template>
                        <template v-else>
                            <img src="/logo/logo_trade.svg" alt="avatar">
                        </template>
                       
                        
                        
                    </div>
                    <div class="info" >
                        <div class="name">{{ slide.fullName }}</div>
                        <div class="date">{{ new Date(slide.created_at).toLocaleDateString('de-DE') }}</div>
                        <div class="stars">
                            <svg v-for="n in slide.stars" :key="n" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#CB0000"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <p>{{ slide.body }}</p>
                </div>
            </div>
            <div class="reviews__form">
                <h2 class="heading text-center">Оставьте ваш отзыв</h2>
                <form>
                    <div class="row">
                        <input type="text"  class="form-control" v-model="fullname" placeholder="Имя и Фамилия" name="" id="">
                        <input type="text" class="form-control"  v-model="email" placeholder="E-mail" name="" id="">
                    </div>
                    <textarea name="" v-model="body" class="form-control"  rows="5" placeholder="Напишите отзыв" id=""></textarea>
                    <div class="btn btn-primary" @click="submitForm">Отправить</div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import BreadVue from "@/components/Bread.vue";
import { useToast } from "vue-toastification";
export default {
    components: {
        BreadVue,
    },
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT, 
            email: null,
            fullname: null,
            body: null,
            slides:[],
            image: 'https://s3-alpha-sig.figma.com/img/0eed/9d19/a089a4a10e8470b4e1d19282083fca1c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c43kVgcexb869qg2vgeLXbv0Wt9JVi~08nokel-WjARaBmb26OjQQaD8dbKKkPcu~5wQ7DWymulRZtSUN1xgeEhPUX5b5NlXWTw8S2ifOqaTb0y39fbxcABFI~~bj~vTmR-iOvgJjMuAiObVg9jkQCOzGa-4On7VNepLXDTVPkqQuMBIwPhVkCelC5iHKBgztKmnvnF1dQmnrd7nQCKXm1Jqy2xli4ap-5KaBt8jPY0pjhH8sn8fACDan4l5GNrnXVm3ITS29locHm93ig8YNKr5o6HHSLdaZP7OgliQxbwhyPjd-86kzgUxBhCYZzvgh30t6zqfEAOAV9jN56u0MQ__',
        }
    },
    methods: {
        async loadReviews(){
           
           try {
               let token = localStorage.getItem('token');
               const response = await fetch(this.url+'api/reviews/', {
               method: 'GET',
               headers: {
                   "Content-Type" : "application/json",
                   "accept" : "application/json",
                   'Authorization': 'Bearer '+token, 
               }
               });
               const json = await response.json();
             
               if(json.data.length>0){
                  this.slides = json.data;
               }
               
               
           } catch (error) {
               console.error('Ошибка:', error);
           }
       },
        async submitForm(){
            if(this.fullname.length==0 || this.body.length==0) return;
                    try {
                        // eslint-disable-next-line no-unused-vars
                        let token = localStorage.getItem('token');
                        const finalResult = {
                            "fullname": this.fullname,
                            "email": this.email,
                            "body": this.body,
                    }
                    

                    var data = new FormData()
                    
                    for (const key in finalResult) {
                        data.append(key, finalResult[key]);

                    }


                    const response = await fetch(this.url+'api/reviews', {
                        method: 'POST',
                        body: data,
                        headers: {
                            'Accept-Language': 'en-US,en;q=0.8',
                            "accept": "application/json",
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        },

                    });
                    const json = await response.json();
                    if(json.errors){
                        useToast().error(json.message, {
                            timeout: 5000
                        });
                        
                    }
                    if(response.status == 201){
                        
                        useToast().success("Отзыв был отправлен", {
                            timeout: 5000
                        });
                       
                    }
                    console.log(json);
                
                    
                    
                
                
            } catch (error) {
               
                useToast().warning(error, {
                            timeout: 5000
                        });
            }
        },
    },
    created() {
        this.loadReviews(); 
    },
}
</script>