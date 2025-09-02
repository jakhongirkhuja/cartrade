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

                    <div class="name"><span>{{ familyName }} {{ name }}</span> <span>Ваш тариф: <i v-if="tarif">{{
                                tarif.name }}</i> <router-link v-else :to="{ name: 'cabinet.tarif.dealerer' }">Выбрать
                                тариф</router-link> </span> <span v-if="tarif && tarif_till"> Действует до: {{
                            this.tarif_till }}</span> </div>
                    <div class="body ">
                        <div class="phoneNumber form-control">+{{ phoneNumber ?
                            phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5') : ''}}</div>
                        <div class="email form-control">{{ email }}</div>
                    </div>
                    <div class="others">
                        <div class="balance">Ваш баланс: {{ balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }}
                            сум
                            <br>
                            <div class="transactions" style="padding-top: 5px;"><router-link
                                    :to="{ name: 'cabinet.transactions.dealer' }">Ваше транзакции</router-link></div>
                        </div>

                    </div>
                    <div class="fill_balance">
                        <div class="text" @click="payStart">Пополнить баланс (сум)</div>
                        <div class="inputs" v-if="checkPayStart"><input v-model="newBalance" type="text"
                                class="form-control"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');">
                        </div>
                        <div class="action btn btn-primary" v-if="checkPayStart" @click="togglePayment">Оплатить</div>
                    </div>

                </div>
            </div>
            <div class="user__ads">
                <div class="title"><span>Мои ставки</span> <span></span> </div>
                <div class="user__ads__block">
                    <div class="aukstion__block container">
                        <template v-if="cars.length > 0">
                            <template v-for="car in cars" :key="car.id">
                                <div class="aukstion__block--items" v-if="car.car">

                                    <a href="#" class="poster"
                                        v-bind:style="{ 'background-image': 'url(' + url + '/files/cars/' + car.car.images[0].image + ')' }"></a>
                                    <div class="info">
                                        <h2 class="info__title"><a href="#">{{ car.car.car_mark.name }}
                                                {{ car.car.car_model.name }} - {{ car.car.ear }}</a></h2>

                                        <div class="info__features row">

                                            <div class="items">{{ JSON.parse(car.car.car_fuil_type.name)[0] }}</div>
                                            <div class="items">{{ JSON.parse(car.car.transmission.name)[0] }}</div>
                                            <div class="items">{{ car.car.mileage }}</div>
                                            <div class="items">{{ JSON.parse(car.car.condation.name)[0] }}</div>
                                            <div class="items">{{ JSON.parse(car.car.car_body_type.name)[0] }}</div>
                                            <div class="items">{{ JSON.parse(car.car.color.name)[0] }}</div>
                                            <div class="items">{{ car.car.year }} г</div>
                                            <!-- <div class="items" v-for="feature in features" :key="feature">{{ feature }}</div> -->
                                        </div>
                                        <div class="row">
                                            <p class="paying">Оплатить</p>
                                        </div>
                                    </div>
                                    <div class="actions">
                                        <div class="actions__price--origin fx">
                                            <div class="info">Начальная ставка:</div>
                                            <div class="price">
                                                {{ car.car.start_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }}
                                                сум</div>
                                        </div>

                                        <div class="action__price--bet">
                                            <div class="btn btn-primary-outline" v-if="!car.sold">
                                                <CountdownTimer :timeStart="car.time_start" :timeEnd="car.time_end" />
                                            </div>
                                            <span class="notbutton"
                                                v-else-if="car.sold_user_id == user_id">Успешно!</span>
                                            <span class="notbutton" v-else-if="car.sold_user_id != user_id">Отменён</span>
                                        </div>
                                    </div>
                                    <div class="mobile__view">
                                        <div class="charakter fx">
                                            <div class="items fx">
                                                <img src="/icons/trail.svg" alt="">
                                                <p>{{ car.car.mileage }}</p>
                                            </div>
                                            <div class="items fx">
                                                <img src="/icons/fuil.svg" alt="">
                                                <p>{{ JSON.parse(car.car.car_fuil_type.name)[0] }}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </template>
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
import CountdownTimer from './CountdownTimer.vue';
export default {
    components: {
        CountdownTimer
    },
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            avatar: null,
            features: ['Бензин', 'Автомат', '77329', 'Седан', 'Новый', '2006 г.', 'бежевый металлик', 'Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',
            name: '',
            familyName: '',
            email: null,
            balance: 0,
            cars: [],
            user_id: null,
            phoneNumber: null,
            tarif: null,
            tarif_till: null,
            newBalance: 1500000,
            checkPayStart: false,
        }
    },
    methods: {
        payStart() {
            this.checkPayStart = true;
        },
        async togglePayment() {
            try {
                let token = localStorage.getItem('token');
                const finalResult = {
                    "amount": this.newBalance,
                }


                var data = new FormData()

                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url + 'api/cabinet/user/user-fill-balance', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if (response.status == 200) {
                    this.checkPayStart = false;
                    this.userInfo();
                }
                // console.log(json);





            } catch (error) {
                console.error('Ошибка:', error);
            }
        },
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
                    this.user_id = json.id;
                    this.balance = json.balance;
                    if (json.tarif_payed_till != null) {
                        const date = new Date(json.tarif_payed_till);
                        const day = String(date.getUTCDate()).padStart(2, '0');
                        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
                        const year = date.getUTCFullYear();
                        const formattedDate = `${day}.${month}.${year}`;
                        this.tarif_till = formattedDate;
                    }
                    this.getTarif(json.tarif_id);
                }
            } catch (error) {
                console.log(error);
            }
        },
        async getTarif(tarif_id) {
            if (tarif_id == 0) return;
            try {
                let token = localStorage.getItem('token');

                const response = await fetch(this.url + 'api/cabinet/tarifs?id=' + tarif_id, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200) {
                    if (json) {
                        this.tarif = json;
                    }
                }

            } catch (error) {
                console.log(error);
            }
        },
        async getCars() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/cabinet/car/bet', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200) {

                    this.cars = json;
                    console.log(this.cars);
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
<style scoped>
.notbutton {
    display: block;
    color: #CB0000;
    font-size: 16px;
    font-weight: 700;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-top: 30px;
}

.paying {
    color: #CB0000;
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    cursor: pointer;
}

.paying:hover {
    text-decoration: underline;
}

.transactions {
    padding-bottom: 20px;
}

.transactions a {
    text-decoration: underline;
    color: grey;
}

.transactions a:hover {
    color: #CB0000;
}

.info .name {
    display: flex;
    justify-content: space-between;
}

.info .name span:first-child {
    flex: 1;
}

.info .name span:last-child {
    font-size: 14px;
    margin-left: 10px;
    color: grey;
}

.info .name span:nth-child(2) {
    font-size: 14px;
}

.info .name span:nth-child(2) a {
    color: #CB0000;
    text-decoration: underline;
}

.info .name span:last-child a {
    color: #CB0000;
    text-decoration: underline;
}

.others {
    display: flex;
    justify-content: flex-end;
}

.others .balance {
    font-size: 14px;
}
</style>