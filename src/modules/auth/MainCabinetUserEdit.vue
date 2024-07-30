<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auth__fixed" v-if="!guest">
            <a href="#" class="auth__fixed--items">Мои данные</a>
            <a href="#" class="auth__fixed--items">Депозит</a>
            <a href="#" class="auth__fixed--items">Мои ставки</a>
            <a href="#" class="auth__fixed--items">Изменить данные</a>
            <a href="#" class="auth__fixed--items">Политики и права</a>
            <a href="#" class="auth__fixed--items">Избранные</a>
            <a href="#" class="auth__fixed--items">Аукционы</a>
        </div>
        <div class="auth__userInfo container p-80 " :class="{'dealer' : !guest }">
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
                        <input type="text" placeholder="Имя" v-model="name" class="form-control">
                        <input type="text" placeholder="Фамилия"  v-model="familyName" class="form-control">
                    </div>
                    <div class="userform--each">
                        <input type="text" placeholder="Телефон" v-model="phoneNumber" disabled class="form-control">
                        <input type="email" placeholder="E-mail" v-model="email" class="form-control">
                    </div>
                </div>
                <div class="action">
                    <div class="btn btn-primary" @click="editUserInfo">Сохранить</div>
                </div>
                
            </div>
            <div class="user edit savepassword">
                <div class="title">Сбросить пароль</div>
                <div class="userform">
                    <div class="userform--each-input">
                        <input type="text" placeholder="Старый пароль" v-model="password" class="form-control">
                        <input type="text" placeholder="Новый пароль" v-model="new_password" class="form-control">
                        <input type="text" placeholder="Введите новый пароль еще раз" v-model="repeat_new_password" class="form-control">
                    </div>
                </div>
                <div class="action">
                    <div class="btn btn-primary" @click="editPasswordChange">Сохранить</div>
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
           
            password:null,
            new_password: null,
            repeat_new_password:null,
            avatar: null,
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
                    this.phoneNumber = json.phoneNumber;
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
                       
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }
                if(this.email) data.append('email', this.email);
                if(this.avatar) data.append('avatar', this.avatar);
                const response = await fetch(this.url+'api/cabinet/user/info-change', {
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
        async editPasswordChange(){
            if(this.password.length==0 || this.new_password.length==0 || this.repeat_new_password.length==0 || (this.new_password!=this.repeat_new_password )) return;
                try {
                    let token = localStorage.getItem('token');
                    const finalResult = {
                        "old_password": this.old_password,
                        "new_password": this.new_password,
                        "repeat_password":this.repeat_new_password,
                       
                }
                

                var data = new FormData()
                
                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }
               
                const response = await fetch(this.url+'api/cabinet/user/password-change', {
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
                }else if(response.status==404){
                    alert(json.message.ru);
                }
                console.log(json);
               
                
                
            
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
        }
    },
    created() {
        this.checkUser();
    },
}
</script>