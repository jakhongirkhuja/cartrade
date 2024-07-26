<template>
    <form >
        <h2>{{ title?? 'Оставьте заявку и мы свяжемся с вами в ближайшее время'}}</h2>
        
        <label for="">
            <select class="form-control mt-form" v-model="selectedMark" @change="callModel" id="carMark">
                <option value="0" selected disabled>Марка</option>
                <option  v-for="mark in marks" :value="mark.id" :key="mark.id">{{ mark.name }}</option>
            </select>
        </label>
        <label for="">
            <select class="form-control mt-form" :disabled="!activateSelect" v-model="selectModel" name="" id="carModel">
                <option value="0" selected disabled>Модель</option>
                <option v-for="carModel in carModels" :value="carModel.id" :key="carModel">{{ carModel.name }}</option>
            </select>
        </label>
        <label for="">
            <input type="text" class="form-control"  v-model="phoneNumber" placeholder="Номер телефона">
        </label>
        <label for="">
            <input type="text" class="form-control" v-model="email" placeholder="E-mail">
        </label>
        <div class="btn btn-primary w-100" @click="submitForm()">Отправить</div>
    </form>  
</template>
<script>
export default {
    props:['title'],
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT, 
            marks: [],
            carModels:[],
            selectedMark: 0,
            selectModel:0,
            activateSelect: false,
            email: null,
            phoneNumber: null,
        }
    },
    methods: {
        
        
        async loadMarks(){
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/loadMark/', {
                method: 'GET',
                headers: {
                "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
                this.marks = json;
                
            } catch (error) {
                console.error('Ошибка:', error);
            }


        },
        async submitForm(){
            if(this.selectedMark==0 || this.selectModel==0 ||this.phoneNumber.length!=12) return;
                try {
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "mark_id": this.selectedMark,
                        "model_id": this.selectModel,
                        "phoneNumber": this.phoneNumber,
                        "email": this.email,
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/enquery/guest', {
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
        async callModel(){
            if(this.selectedMark==0) return ;
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/loadModel/'+this.selectedMark, {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
                this.carModels = json;
                if(this.carModels.length>0){
                    this.activateSelect =true;
                }
                
            } catch (error) {
                console.error('Ошибка:', error);
            }
        },
    },
    created() {
        this.loadMarks();
    },
}
</script>
<style scoped>
    #carModel:disabled{
        opacity: 0.4;
    }
    #carModel:disabled:hover{
        border-color: silver;
    }
    .mt-form{
        margin-top: 25px;
    }
</style>