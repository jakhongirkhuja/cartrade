<template>
    <div>
        <div class="headerMenu container fx">
            <ul class="fx" v-if="role=='dealer'">
                <li><router-link :to="{ name: 'main.index.dealer' }">Главная</router-link></li>
                <li class="hover">
                    Полезная Информация 
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z" fill="#121212"/>
                    </svg>
                    <ul class="inside">
                        <li><router-link :to="{ name: 'main.documents.dealer' }">Необходимые документы</router-link></li>
                        <li><router-link :to="{ name: 'main.legalinformation.dealer' }">Юридическая информация</router-link></li>
                    </ul>
                </li>
                <li><router-link :to="{ name: 'main.auksion.dealer' }">Аукционы</router-link></li>
                <li><router-link :to="{ name: 'main.contacts.dealer' }">Контакты</router-link></li>
            </ul>
            <ul class="fx" v-else>
                <li><router-link :to="{ name: 'main.guest' }">Главная</router-link></li>
                <li class="hover">
                    Полезная Информация 
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z" fill="#121212"/>
                    </svg>
                    <ul class="inside">
                        <li><router-link :to="{ name: 'main.enqueryPage' }">Оставьте заявку</router-link></li>
                        <li><router-link :to="{ name: 'main.documents' }">Необходимые документы</router-link></li>
                        <li><router-link :to="{ name: 'main.legalinformation' }">Юридическая информация</router-link></li>
                    </ul>
                </li>
                <li><router-link :to="{ name: 'main.brands' }">Что выкупаем</router-link></li>
                <li><router-link :to="{ name: 'main.auksionguest' }">Каталог машин</router-link></li>
                <li><router-link :to="{ name: 'main.index.dealer' }">Автодилерам</router-link></li>
                <li><router-link :to="{ name: 'main.reviews' }">Отзывы</router-link></li>
                <li><router-link :to="{ name: 'main.contacts' }">Контакты</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'headerMenu',
    data(){
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            banner_ru: [],
            role: 'guest'
        }
    },
    methods: {
        
    },
    watch: {
        $route(to, from) {
            console.log('Route changed from', from.path, 'to', to.path);
            if (to.path.startsWith('/dealer') || to.path.startsWith('/cabinet-dealer')) {
                this.role = 'dealer';
            } else {
                this.role = 'guest';
            }
        },
    },
    created() {
        if (this.$route.path.startsWith('/dealer') || this.$route.path.startsWith('/cabinet-dealer')) {
            this.role = 'dealer';
        }else{
            this.role = 'guest';
        }
    },
}
</script>