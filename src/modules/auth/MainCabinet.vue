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
                    <router-link class="link" :to="{ name: 'cabinet.edit.user' }">Редактировать</router-link>
                    <div class="name">{{ familyName }} {{ name }}</div>

                    <div class="body ">
                        <div class="phoneNumber">+{{ phoneNumber ?
                            phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5') : '' }}</div>
                    </div>
                    <div class="others">
                        <div class="balance">
                            <div class="transactions" style="padding-top: 5px;">
                                <router-link class="link" :to="{ name: 'cabinet.transactions.dealer' }">Ваше
                                    транзакции</router-link>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

            <div class="user__ads">

                <div class="title gap-1 title__block" v-if="user?.role == 'rent'">
                    <span class="title__each " :class="{ active: !showOrder }" @click="changeTab(0)">Мои
                        объявления</span>/
                    <router-link class="fx-1 title__each" :to="{ name: 'cabinet.main.bookings' }">Мои
                        заказы</router-link>

                    <span v-if="user?.role == 'rent'" @click="$router.push({ name: 'cabinet.add.auksion' })"
                        class="btn btn-primary">Добавить</span>
                </div>
                <div class="title" v-else> <span>Мои Брони</span></div>

                <div class="user__ads__block" v-if="user?.role == 'rent' && !showOrder">
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
                                        <!-- <div class="info">Начальная ставка:</div> -->
                                        <div class="price" v-html="formatPrice(car.rent_price) + ' сум в день'">
                                        </div>

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
                <div class="user__bookings__block" v-if="user?.role == 'client'">

                    <template v-if="bookings.length > 0">
                        <div class="aukstion__block--items" v-for="booking in bookings" :key="booking.id">
                            <a href="#" class="poster"
                                v-bind:style="{ 'background-image': 'url(' + url + '/files/cars/' + booking.car?.images[0].image + ')' }"></a>
                            <div class="info">
                                <h2 class="info__title"><router-link
                                        :to="{ name: 'main.auksion.inside', params: { id: booking.car?.id } }">{{
                                            booking.car?.car_mark.name }} {{ booking.car?.car_model.name }}
                                        -
                                        {{ booking.car?.year }}</router-link></h2>

                                <div class="info__rent mb-1">
                                    <p><b>Время получения: </b><span>{{ new
                                        Date(booking.start_date).toLocaleString('ru-RU', {
                                            dateStyle: 'full',
                                            timeStyle: 'short'
                                            }) }}</span></p>
                                    <p><b>Время возврата: </b><span>{{ new
                                        Date(booking.end_date).toLocaleString('ru-RU', {
                                            dateStyle: 'full',
                                            timeStyle: 'short'
                                            }) }}</span></p>

                                </div>
                                <div class="statuses">
                                    <div class="statuses__main mb-1">
                                        <p><b>Статус оплаты: </b><span>{{ statusCheck(booking.status) }}</span></p>
                                        <div v-if="booking.status == 'pending'" class="link">Оплатить</div>
                                        <p><b>Статус аренды: </b><span>{{
                                            rentStatusCheck(booking.rent_status) }}</span>
                                        </p>


                                    </div>


                                </div>
                            </div>
                            <div class="actions">
                                <div class="actions__price--origin fx">
                                    <!-- <div class="info">Начальная ставка:</div> -->
                                    <div class="price" v-html="formatPrice(booking.total_price) + ' сум'">
                                    </div>

                                </div>

                                <div class="action__price--bet">
                                    <router-link :to="{ name: 'main.auksion.inside', params: { id: booking.car?.id } }"
                                        class="btn btn-primary">Посмотреть</router-link>
                                </div>
                            </div>
                            <div class="mobile__view">
                                <div class="charakter fx">
                                    <div class="items fx">
                                        <img src="/icons/trail.svg" alt="">
                                        <p>{{ booking.car?.mileage }}</p>
                                    </div>
                                    <div class="items fx">
                                        <img src="/icons/fuil.svg" alt="">
                                        <p>{{ JSON.parse(booking.car?.car_fuil_type.name)[0] }}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </template>
                </div>
                <div class="user__bookings__block" v-if="user?.role == 'rent' && showOrder">

                    <template v-if="bookings.length > 0">
                        <div class="aukstion__block--items" v-for="booking in bookings" :key="booking.id">
                            <a href="#" class="poster"
                                v-bind:style="{ 'background-image': 'url(' + url + '/files/cars/' + booking.car?.images[0].image + ')' }"></a>
                            <div class="info">
                                <h2 class="info__title"><router-link
                                        :to="{ name: 'main.auksion.inside', params: { id: booking.car?.id } }">{{
                                            booking.car?.car_mark.name }} {{ booking.car?.car_model.name }}
                                        -
                                        {{ booking.car?.year }}</router-link></h2>

                                <div class="info__rent mb-1">
                                    <p><b>Время получения: </b><span>{{ new
                                        Date(booking.start_date).toLocaleString('ru-RU', {
                                            dateStyle: 'full',
                                            timeStyle: 'short'
                                            }) }}</span></p>
                                    <p><b>Время возврата: </b><span>{{ new
                                        Date(booking.end_date).toLocaleString('ru-RU', {
                                            dateStyle: 'full',
                                            timeStyle: 'short'
                                            }) }}</span></p>

                                </div>
                                <div class="statuses">
                                    <div class="statuses__main mb-1">
                                        <p><b>Статус оплаты: </b><span>{{ statusCheck(booking.status) }}</span></p>
                                        <div v-if="booking.status == 'pending'" class="link">Оплатить</div>
                                        <p class="mb-1"><b>Статус аренды: </b>
                                            <span>
                                                <select class="form-control" v-model="rent_status_selected">
                                                    <option disabled selected value="0">Выбрать</option>
                                                    <option v-for="(label, key) in rent_status" :key="key" :value="key">
                                                        {{ label }}
                                                    </option>
                                                </select>
                                            </span>

                                        </p>
                                        <div class="action__price--bet" @click="submitStatusChange(booking.id)">
                                            <div class="btn btn-primary">
                                                Обновить
                                            </div>

                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div class="actions">
                                <div class="actions__price--origin fx">
                                    <!-- <div class="info">Начальная ставка:</div> -->
                                    <div class="price" v-html="formatPrice(booking.total_price) + ' сум'">
                                    </div>

                                </div>


                            </div>
                            <div class="mobile__view">
                                <div class="charakter fx">
                                    <div class="items fx">
                                        <img src="/icons/trail.svg" alt="">
                                        <p>{{ booking.car?.mileage }}</p>
                                    </div>
                                    <div class="items fx">
                                        <img src="/icons/fuil.svg" alt="">
                                        <p>{{ JSON.parse(booking.car?.car_fuil_type.name)[0] }}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </template>
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
            bookings: [],
            rent_status_selected: 0,
            rent_status:
            {
                accepted: 'Принял',
                car_given: 'Передано',
                in_use: 'В использовании',
                completed: 'Завершено',
                rejected: 'Отклонено',
            },
            user: null,
            phoneNumber: null,
            showOrder: false
        }
    },
    methods: {
        changeTab(value) {
            if (value) {
                this.showOrder = true;
                this.getBookings();
            } else {
                this.showOrder = false;
            }
        },
        formatPrice(value) {
            return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
        },
        statusCheck(value) {
            let message = '';
            switch (value) {
                case 'pending':
                    message = 'в ожидании'
                    break;
                case 'payed':
                    message = 'оплачено'
                    break;
                default:
                    break;
            }
            return message;
        },
        rentStatusCheck(value) {
            let message = '';

            switch (value) {
                case 'accepted':
                    message = 'Одобрено'
                    break;
                case 'car_given':
                    message = 'Машина отдана'
                    break;
                case 'in_use':
                    message = 'Вы пользуетесь'
                    break;
                case 'completed':
                    message = 'Вы завершили'
                    break;
                case 'rejected':
                    message = 'Отказано'
                    break;

                default:
                    break;
            }
            return message;
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
                    this.avatar = json.avatar;
                    this.name = json.name;
                    this.user = json;
                    this.familyName = json.familyName;
                    this.email = json.email;
                    this.phoneNumber = json.phoneNumber;

                    if (this.user.role == 'rent') {
                        this.getCars();
                    }
                    if (this.user.role == 'client') {
                        this.getBookings();
                    }
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
        },
        async submitStatusChange() {

            const finalResult = {
                "rent_status": this.rent_status_selected,


            }
            var data = new FormData()

            for (const key in finalResult) {
                data.append(key, finalResult[key]);

            }
            const response = await fetch(this.url + 'api/cabinet/car/bookings/changeStatus', {
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
                alert('updated');
            } else {
                alert(json.message);
            }
        },
        async getBookings() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/cabinet/car/bookings', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200) {

                    this.bookings = json.data;
                    console.log(this.bookings);

                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.userInfo();

    },
}
</script>