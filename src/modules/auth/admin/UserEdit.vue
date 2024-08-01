<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        
        <div class="auth__userInfo container p-80 " >
            <div class="user edit">
                <div class="block row vertical_center">
                    <div v-if="user && user.avatar" class="avatar" v-bind:style="{ 'background-image': 'url(' + url+'/files/user/'+user.avatar + ')' }">  
                    </div>
                    <div v-else class="avatar" v-bind:style="{ 'background-image': 'url(/logo/logo_trade.svg)' }">  
                    </div>
                    
                    <div class="info fx-1">
                        <input type="file" v-on:change="uploadFileAvatar($event)" accept="image/*" id="upload" hidden/>
                        <label  for="upload" class="btn btn-primary">Выбрать файл</label>
                        <span>Выберите файл не больше 3MB, Минимальное разрешение 300x300 px в JPG или PNG формате</span>   
                    </div>
                </div>
                <div class="userform">
                    <div class="userform--each">
                        <label for="">Имя <input type="text" placeholder="Имя" v-model="name" class="form-control"></label>
                        <label for="">Фамилия <input type="text" placeholder="Фамилия"  v-model="familyName" class="form-control"></label>
                        <label for="">Телефон <input type="text" placeholder="Телефон" v-model="phoneNumber" class="form-control"></label>
                    </div>
                    <div class="userform--each">
                        <label for="">Баланс  <input type="text" placeholder="Баланс" v-model="balance" class="form-control"></label>
                        <label for="">E-mail <input type="email" placeholder="E-mail" v-model="email" class="form-control"></label>
                        <label for="">Роль 
                            <select name="" v-model="role" class="form-control" id="">
                                <option value="client">Клиент</option>
                                <option value="dealer">Дилер</option>
                                <option value="admin">Админ</option>
                            </select>
                        </label>
                        <label for="">Статус 
                            <select name="" v-model="status" class="form-control" id="">
                                <option value="true">Активний</option>
                                <option value="false">Деактивирован</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div class="action">
                    <div class="btn btn-primary" @click="editUserInfo">Сохранить</div>
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
            user: null,
            guest: true,
            name:null,
            familyName:null,
            phoneNumber:null,
            email:null,
            balance:null,
            password:null,
            new_password: null,
            repeat_new_password:null,
            avatar: null,
            role:null,
            status:null,
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',

        }
    },
    methods: {
        uploadFileAvatar(event) {
            var files = event.target.files || event.dataTransfer.files;
            if (!files.length) {
                return;
            }
            this.avatar = files[0];
        },

        async checkUser(){
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/user', {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
                }
                });
                const json = await response.json();
                if(response.status==200){
                    this.user = json;
                    this.name = json.name;
                    this.familyName = json.familyName;
                    this.email = json.email;
                    this.balance = json.balance;
                    this.phoneNumber = json.phoneNumber;
                    this.role = json.role;
                    this.status = json.status;
                }
            } catch (error) {
               
                console.log(error);
            }
        },
        async editUserInfo(){
            if(this.name.length==0 || this.familyName.length==0) return;
                try {
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "name": this.name,
                        "familyName": this.familyName,
                       "phoneNumber": this.phoneNumber,
                       "user_id": this.$route.params.id,
                       "status": this.status,
                       "role": this.role,
                       "balance": this.balance,

                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }
                if(this.email) data.append('email', this.email);
                if(this.avatar) data.append('avatar', this.avatar);
                const response = await fetch(this.url+'api/cabinet/user/user-change-info', {
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
                    alert('updated');
                }else{
                    alert(json.message);
                }
                console.log(json);
               
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
        },
    },
    created() {
        this.checkUser();
    },
}
</script>
<style>
    .userform--each label{
        flex: 1;
        padding: 0 10px;
    }
</style>