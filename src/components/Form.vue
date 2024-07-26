<template>
    <form >
        <h2>{{ title?? 'Получите доступ к аукционам по всему Узбекситану'}}</h2>
        <label for="">
            <input type="text" class="form-control" v-model="name" placeholder="Имя">
        </label>
        <label for="">
            <input type="text" class="form-control" v-model="familyName" placeholder="Фамилия">
        </label>
        <label for="">
            <input type="text" class="form-control" v-model="phoneNumber" placeholder="Номер телефона">
        </label>
        <label for="">
            <input type="text" class="form-control" v-model="email" placeholder="E-mail">
        </label>
        <div @click="submitForm" class="btn btn-primary w-100">Отправить</div>
    </form>  
</template>

<script>
export default {
    props:['title'],
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT, 
            name: null,
            familyName:null,
            activateSelect: false,
            email: null,
            phoneNumber: null,
        }
    },
    methods: {
        async submitForm(){
            if(this.name.length==0 || this.familyName.length==0 ||this.phoneNumber.length!=12) return;
                try {
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "name": this.name,
                        "familyName": this.familyName,
                        "phoneNumber": this.phoneNumber,
                        "email": this.email,
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/enquery/guestContact', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                console.log(json);
               
                
                
            
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
        },
    },
}
</script>