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
            <select class="form-control" v-model="selectedMark" @change="callModel" id="carMark">
                <option value="0" selected disabled>Выбрать</option>
                <option  v-for="mark in marks" :value="mark.id" :key="mark.id">{{ mark.name }}</option>
            </select>
        </label>
        <label for="">
            <p>Модель</p>
            <select class="form-control" :disabled="!activateSelect" v-model="selectModel" name="" id="carModel">
                <option value="0" selected disabled>Выбрать</option>
                <option v-for="carModel in carModels" :value="carModel.id" :key="carModel">{{ carModel.name }}</option>
            </select>
        </label>
        <label for="">
            <p>Год выпуска</p>
            <input type="text" class="form-control" v-model="carYear" placeholder="Год">
        </label>
        
        <div class="btn btn-primary w-100" @click="searchByFilter">Найти по запросу</div>
    </form>  
</template>
<script>
export default {
    props:['title'],
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT, 
            slidingClass:'',
            marks: [],
            carModels:[],
            selectedMark: 0,
            selectModel:0,
            activateSelect: false,
            marksType: 0,
            carYear:null,
        }
    },
    
    methods: {
        changeSlidingPosition(n){
            switch (n) {
                case 0:
                    this.slidingClass ='first';
                    this.marksType= 0;
                    break;
                case 1:
                    this.slidingClass ='second';
                    this.marksType= 1;
                    break;
                case 2:
                    this.slidingClass ='third';
                    this.marksType= 2;
                    break;    
                default:
                    this.slidingClass='';
                    this.marksType= 0;
                    break;
            }
        },
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


        //     try {
        //       let token = localStorage.getItem('token');
             
        //       const response = await fetch(this.url+'api/v1/groups/groupDelete/'+this.modelUserId, {
        //       method: 'POST', // или 'PUT'
        //       body: JSON.stringify(finalResult), // данные могут быть 'строкой' или {объектом}!
        //       headers: {
        //        "Content-Type" : "application/json",
        //         "accept" : "application/json",
        //         'Authorization': 'Bearer '+token, 
        //       }
        //     });
        //     const json = await response.json();
            
        //     if(json.error){
              
        //       if(typeof json.message == 'object'){
        //             this.resError = json.message;
        //           }else{
        //             this.resStringError = json.message;
        //           }
        //     }else{
        //       this.resSuccess  = 'Successfully Deleted';
        //       this.requestApi(1);
        //       this.submitButton = false;
        //     }
            
        //   } catch (error) {
        //     console.error('Ошибка:', error);
        //   }

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
        searchByFilter(){
            this.$router.push({ name: 'main.auksionguest', query: 
            {
                'year': this.carYear, 
                'condition': this.marksType, 
                'mark': this.selectedMark,
                'model':this.selectModel,
             }})
        }
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
</style>