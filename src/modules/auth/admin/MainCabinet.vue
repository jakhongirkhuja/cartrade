<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auth__userInfo container p-80">
            <div class="user row">
                <div v-if="avatar" class="avatar" v-bind:style="{ 'background-image': 'url(' + url+'/files/user/'+avatar + ')' }">  
                </div>
                <div v-else class="avatar" v-bind:style="{ 'background-image': 'url(/logo/logo_trade.svg)' }">  
                </div>
                <div class="info fx-1">
                    <div class="name row space_between">{{familyName}} {{ name }} 
                        <router-link :to="{ name: 'cabinet.list.user.admin' }" class="list_user" >Пользователи</router-link>
                     </div>
                    <div class="body ">
                        <div class="phoneNumber form-control">+{{phoneNumber? phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5') : ''}}</div>
                        <div class="email form-control">{{email}}</div>
                    </div>
                </div>
            </div>
            <div class="user__ads">
                <div class="title"><span>Объявления</span> <span @click="$router.push({ name:'cabinet.add.auksion'})" class="btn btn-primary">Добавить</span> </div>
                <div class="user__ads__block">
                    <div class="aukstion__block container">
                    <template v-if="cars.length>0">
                        <div class="aukstion__block--items" v-for="car in cars" :key="car.id">
                            <a href="#" class="poster" v-bind:style="{ 'background-image': 'url(' + url+'/files/cars/'+car.images[0].image + ')' }"></a>
                            <div class="info">
                                <h2 class="info__title"><a href="#">{{car.car_mark.name}} {{car.car_model.name}} - {{car.year}}</a></h2>
                                
                                <div class="info__features row">
                                    <div class="items" >{{ JSON.parse(car.car_fuil_type.name)[0] }}</div>
                                    <div class="items" >{{ JSON.parse(car.transmission.name)[0] }}</div>
                                    <div class="items" >{{ car.mileage}}</div>
                                    <div class="items" >{{ JSON.parse(car.condation.name)[0] }}</div>
                                    <div class="items" >{{ JSON.parse(car.car_body_type.name)[0] }}</div>
                                    <div class="items" >{{ JSON.parse(car.color.name)[0] }}</div>
                                    <div class="items" >{{ car.year}} г</div>
                                    <!-- <div class="items" v-for="feature in features" :key="feature">{{ feature }}</div> -->
                                </div>
                                <div class="status">
                                    <label :class="{'checked': car.auksion.status}">
                                        Статус: 
                                        <input type="checkbox" v-model="car.auksion.status" @change="handleCheck(car.auksion)" />
                                        <span class="custom-checkbox"></span>
                                        {{ car.auksion.status? 'Активний' :'Отключен' }}
                                    </label>
                                </div>
                            </div>
                            <div class="actions">
                                <div class="actions__price--origin fx">
                                    <div class="info">Начальная ставка:</div>
                                    <div class="price">{{car.start_price}} сум</div>
                                </div>
                                <div class="actions__price--blits fx">
                                    <div class="info">Блиц - цена: </div>
                                    <div class="price">{{car.buy_price}} сум</div>
                                </div>
                                <div class="action__price--bet">
                                    <router-link :to="{ name: 'cabinet.edit.auksion', params: { id: car.id } }" class="btn btn-primary">Редактировать</router-link>
                                    <span class="delete" @click="removeCar(car.id)">Удалить</span>
                                </div>
                            </div>
                            <div class="mobile__view">
                                <div class="charakter fx">
                                    <div class="items fx">
                                        <img src="/icons/trail.svg" alt="">
                                        <p>{{car.mileage}}</p>
                                    </div>
                                    <div class="items fx">
                                        <img src="/icons/fuil.svg" alt="">
                                        <p>{{JSON.parse(car.car_fuil_type.name)[0]}}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </template>
                    <template v-else>
                        Пусто
                    </template>
                    
            <div class="auksion__block--pagination" v-if="cars.length>0">
                <ul class="pagination">
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
            </div>
        </div>
                </div>
            </div>
            <div class="user__ads">
                <div class="title"><span>Отзывы</span> <span></span> </div>
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
                        <div class="status" style="margin-top: 10px;">
                            <label :class="{'checked': slide.status}">
                                Статус: 
                                <input type="checkbox" v-model="slide.status" @change="handleCheckReview(slide.id)" />
                                <span class="custom-checkbox"></span>
                                {{ slide.status? 'Активний' :'Отключен' }}
                            </label>
                        </div>
                    </div>
                    <div class="actions">
                        
                        <div class="delete text-center" @click="handleDeleteReview(slide.id)" style="margin-top: 20px;">Удалить</div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT, 
            avatar: null,
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',
            name: '',
            familyName:'',
            email: null,
            slides:[],
            cars: [],
            phoneNumber:null,
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
        async removeCar(car_id){
            try {
                // eslint-disable-next-line no-unused-vars
                let token = localStorage.getItem('token');
                const finalResult = {
                    "mark_id": this.selectedMark, 
                }
                var data = new FormData();
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }
                const response = await fetch(this.url+'api/cabinet/car/delete/'+car_id, {
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
                    alert(json.message);
                }
                if(response.status==200){
                    alert('auksion has been deleted');
                }
                console.log(json);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        },
        async handleCheckReview(id){
            try {
                    // eslint-disable-next-line no-unused-vars
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "auksion_id": 2,
                        
                }

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/cabinet/reviews/change-status/'+id, {
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
                    alert(json.message);
                }
                if(response.status == 200){
                    alert("Обновлен");
                }
            } catch(error){
                console.log(error);
            }
        },
        async handleDeleteReview(id){
            try {
                    // eslint-disable-next-line no-unused-vars
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "auksion_id": 2,
                        
                }

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/cabinet/reviews/delete/'+id, {
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
                    alert(json.message);
                }
                if(response.status == 200){
                    alert("Удален");
                    this.loadReviews();
                }
            } catch(error){
                console.log(error);
            }
        },
        async handleCheck(auksion) {
               
            try {
                    // eslint-disable-next-line no-unused-vars
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "auksion_id": auksion.id,
                        
                }

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url+'api/cabinet/auksion/change-status', {
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
                    alert(json.message);
                }
                if(response.status == 200){
                    alert("Обновлен");
                }
            } catch(error){
                console.log(error);
            }
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
                    console.log(json);
                    this.avatar= json.avatar;
                    this.name = json.name;
                    this.familyName  = json.familyName;
                    this.email = json.email;
                    this.phoneNumber = json.phoneNumber;
                }
            } catch (error) {
                console.log(error);
            }
        },
        async getCars(){
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/cabinet/car', {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
                if(response.status==200){
                   
                    this.cars = json.data;

                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.userInfo();
        this.getCars();
        this.loadReviews();
    },
}
</script>
<style scoped>
/* Custom checkbox styling */
label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 13px;
}

input[type="checkbox"] {
  display: none; /* Hide default checkbox */
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  margin-right: 5px;
  margin-left: 5px;
  
  transition: background-color 0.2s, border-color 0.2s;
}

.checked .custom-checkbox {
  background-color: #42b983;
  border-color: #42b983;
}

.checked .custom-checkbox::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 5px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.delete{
    color: red;
    cursor: pointer;
    padding: 5px 0;
}
.delete:hover{
    text-decoration: underline;
}
.list_user{
    font-size: 14px;
    text-decoration: underline;
}
</style>