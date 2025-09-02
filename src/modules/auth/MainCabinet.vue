<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auth__userInfo container p-80">
            <div class="user row">

                <div v-if="avatar" class="avatar"
                    v-bind:style="{ 'background-image': 'url(' + url + '/files/user/' + avatar + ')' }">
                </div>
                <div v-else class="avatar" v-bind:style="{ 'background-image': 'url(/logo/logo_trade.svg)' }">
                </div>
                <div class="info fx-1">
                    <div class="name">{{ familyName }} {{ name }}</div>
                    <div class="body ">
                        <div class="phoneNumber form-control">+{{ phoneNumber ?
                            phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5') : '' }}</div>
                        <div class="email form-control">{{ email }}</div>
                    </div>
                </div>
            </div>
            <div class="user__ads">
                <div class="title"><span>Мои объявления</span> <span
                        @click="$router.push({ name: 'cabinet.add.auksion' })" class="btn btn-primary">Добавить</span>
                </div>
                <div class="user__ads__block">
                    <div class="aukstion__block container">
                        <template v-if="cars.length > 0">
                            <div class="aukstion__block--items" v-for="car in cars" :key="car.id">
                                <a href="#" class="poster"
                                    v-bind:style="{ 'background-image': 'url(' + url + '/files/cars/' + car.images[0].image + ')' }"></a>
                                <div class="info">
                                    <h2 class="info__title"><router-link
                                            :to="{ name: 'cabinet.edit.auksion', params: { id: car.id } }">{{
                                            car.car_mark.name }} {{ car.car_model.name }}
                                            -
                                            {{ car.year }}</router-link></h2>

                                    <div class="info__features row">
                                        <div class="items">{{ JSON.parse(car.car_fuil_type.name)[0] }}</div>
                                        <div class="items">{{ JSON.parse(car.transmission.name)[0] }}</div>
                                        <div class="items">{{ car.mileage }}</div>
                                        <div class="items">{{ JSON.parse(car.condation.name)[0] }}</div>
                                        <div class="items">{{ JSON.parse(car.car_body_type.name)[0] }}</div>
                                        <div class="items">{{ JSON.parse(car.color.name)[0] }}</div>
                                        <div class="items">{{ car.year }} г</div>
                                        <!-- <div class="items" v-for="feature in features" :key="feature">{{ feature }}</div> -->
                                    </div>
                                </div>
                                <div class="actions">
                                    <div class="actions__price--origin fx">
                                        <div class="info">Начальная ставка:</div>
                                        <div class="price">{{ car.start_price }} сум</div>
                                    </div>

                                    <div class="action__price--bet">
                                        <router-link :to="{ name: 'main.auksion.inside', params: { id: car.id } }"
                                            class="btn btn-primary">Посмотреть в каталоге</router-link>
                                    </div>
                                </div>
                                <div class="mobile__view">
                                    <div class="charakter fx">
                                        <div class="items fx">
                                            <img src="/icons/trail.svg" alt="">
                                            <p>{{ car.mileage }}</p>
                                        </div>
                                        <div class="items fx">
                                            <img src="/icons/fuil.svg" alt="">
                                            <p>{{ JSON.parse(car.car_fuil_type.name)[0] }}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </template>
                        <template v-else>
                            Пусто
                        </template>

                        <div class="auksion__block--pagination" v-if="cars.length > 0">
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
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            avatar: null,
            features: ['Бензин', 'Автомат', '77329', 'Седан', 'Новый', '2006 г.', 'бежевый металлик', 'Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',
            name: '',
            familyName: '',
            email: null,
            cars: [],
            phoneNumber: null,
        }
    },
    methods: {
        async userInfo() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/user/', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200) {
                    console.log(json);
                    this.avatar = json.avatar;
                    this.name = json.name;
                    this.familyName = json.familyName;
                    this.email = json.email;
                    this.phoneNumber = json.phoneNumber;
                }
            } catch (error) {
                console.log(error);
            }
        },
        async getCars() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/cabinet/car', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200) {

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
    },
}
</script>