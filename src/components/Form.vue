<template>
    <form>
        <h2 class="text-black">{{ title ?? 'Получите доступ к автомобилям по всему Узбекистану' }}</h2>
        <label for="">
            <input type="text" class="form-control" v-model="name" placeholder="Имя">
        </label>
        <label for="">
            <input type="text" class="form-control" v-model="familyName" placeholder="Фамилия">
        </label>
        <label for="">
            <input type="text" always-fill-mask="true" class="form-control" v-mask="'+998 (##) ### - ## - ##'"
                v-model="phoneNumber" placeholder="+998 (__) ___ - __ - __">
        </label>
        <label for="">
            <input type="text" class="form-control" v-model="email" placeholder="E-mail">
        </label>
        <button type="button" :disabled="deactive" @click="submitForm" class="btn btn-primary w-100">Отправить</button>
    </form>
</template>

<script>
import { mask } from 'vue-the-mask'
import { useToast } from "vue-toastification";
export default {
    props: ['title'],
    directives: { mask },
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            name: null,
            familyName: null,
            activateSelect: false,
            email: null,
            deactive: false,
            phoneNumber: null,
        }
    },
    methods: {
        async submitForm() {

            if (this.name == null || this.familyName == null || this.phoneNumber == null || this.name.length == 0 || this.familyName.length == 0 || this.phoneNumber.replace(/\D/g, "").length != 12) {
                useToast().error("Пожалуйста, заполните все поля", {
                    timeout: 5000
                });
                return;
            }
            if (this.deactive) {
                return;
            }
            this.deactive = true;
            try {
                let token = localStorage.getItem('token');
                const finalResult = {
                    "name": this.name,
                    "familyName": this.familyName,
                    "phoneNumber": this.phoneNumber.replace(/\D/g, ""),
                    "email": this.email,
                }


                var data = new FormData()

                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url + 'api/enquery/guestContact', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if (response.status == 400) {
                    useToast().error(json.message, {
                        timeout: 5000
                    });
                } else if (json.error) {
                    useToast().error(json.message.ru, {
                        timeout: 5000
                    });
                }
                useToast().success(json.ru, {
                    timeout: 5000
                });





            } catch (error) {
                console.error('Ошибка:', error);
            }
        },
    },
}
</script>