<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="container p-80">
            <div class="user__ads">
                <div class="title"><span>Пользователи</span></div>
                <ul class="users">
                    <li v-for="user in users">
                        <span class="name">{{ user.name }}</span>
                        <span class="familyName">{{ user.familyName }}</span>
                        <span class="phoneNumber">{{ user.phoneNumber }}</span>
                        <span class="role">{{ user.role }}</span>
                        
                        <div class="row"> <router-link :to="{ name: 'cabinet.edit.user.admin',params: {id: user.id} }"  >Редактировать</router-link> <span @click="deleteUser(user.id)">Удалить</span> </div>
                    </li>
                </ul>
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
            users: [],
            phoneNumber:null,
        }
    },
    methods: {
        async deleteUser(user_id){
            var x;
            if (confirm("Вы точно хотите удалить пользователя") == true) {
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
                    const response = await fetch(this.url+'api/cabinet/user/user-remove/'+user_id, {
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
                        this.loadUsers();
                        alert(json.ru);
                    }
                    console.log(json);
                } catch (error) {
                    console.error('Ошибка:', error);
                }
            } else {
                x = "You pressed Cancel!";
                // alert('canceld');
            }
            return x; 
        },  
        async loadUsers(){
           
           try {
               let token = localStorage.getItem('token');
               const response = await fetch(this.url+'api/cabinet/user/user-list', {
               method: 'GET',
               headers: {
                   "Content-Type" : "application/json",
                   "accept" : "application/json",
                   'Authorization': 'Bearer '+token, 
               }
               });
               const json = await response.json();
             
               if(json.data.length>0){
                  this.users = json.data;
               }
               
               
           } catch (error) {
               console.error('Ошибка:', error);
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
    },
    created() {
        this.userInfo();
        this.loadUsers();
    },
}
</script>
<style scoped>
.user__ads{
    background-color: white;
    padding: 20px;
    border-radius: 25px;
}
.user__ads .title{
    font-size: 23px;
    font-weight: 500;
}
.users{
    padding-top: 30px;
}
.users  li{
    display: flex;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid silver;
}
.users  li:hover{
    
    background-color: whitesmoke;
}
.users  li span{
    display: block;
    margin-right: 20px;
    flex: 1;
}
.users  li span.name{
    padding-left: 10px;
}
.users  li span.role{
    flex: 2;
}
.users .row a{
    margin-right: 15px;
    text-decoration: underline;
    cursor: pointer;
}
.users .row span{
    color: red;
    cursor: pointer;
}
</style>