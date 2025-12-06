<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auth__userInfo container p-80">

            <div class="user__ads">

                <div class="title gap-1 title__block" v-if="user?.role == 'rent'">

                    <span class="fx-1 title__each">Мои
                        заказы</span>

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
                                        <div class="price" v-html="formatPrice(car.rent_price) + ' сум в день'"></div>

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
                                        <p><b>Оплата: </b><span>{{ statusCheck(booking.status) }}</span></p>
                                        <div v-if="booking.status == 'pending'" class="link">Оплатить</div>
                                        <p><b>Статус: </b><span>{{
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
                                        <p><b>Оплата: </b><span>{{ statusCheck(booking.status) }}</span></p>
                                        <div v-if="booking.status == 'pending'" class="link">Оплатить</div>

                                        <div class="status-toggle status_change" v-if="!booking.rent_status">
                                            <router-link
                                                :to="{ name: 'cabinet.main.bookings.each', params: { id: booking.id } }"
                                                :class="['status-btn', rent_status_selected === 'accepted' ? 'active accepted' : '']"
                                                @click="rent_status_selected = 'accepted'">
                                                ✔️ Принят?
                                            </router-link>

                                            <button
                                                :class="['status-btn', rent_status_selected === 'rejected' ? 'active rejected' : '']"
                                                @click="rent_status_selected = 'rejected'">
                                                ❌ Отклонить?
                                            </button>

                                        </div>
                                        <div v-if="rent_status_selected == 'rejected' && !booking.rent_status">
                                            <form @submit.prevent="onSubmitReject(booking.id)" class="reject_reason">
                                                <input type="text" class="form-control" required
                                                    v-model="reject_comment"
                                                    placeholder="Просьба сообщить причину отклонения">
                                                <button class="btn btn-dark" type="submit">Отправить</button>
                                            </form>
                                        </div>
                                        <div>
                                            <router-link class="go-to-order-btn mt-1 d-block"
                                                :to="{ name: 'cabinet.main.bookings.each', params: { id: booking.id } }">
                                                🔗 Перейти к заказу
                                            </router-link>


                                        </div>
                                        <p class="mt-2" v-if="booking.rent_status"><b>Статус: </b><span>{{
                                            rentStatusCheck(booking.rent_status)
                                                }}</span></p>

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
            reject_comment: '',
            rent_status_selected: '',
            rent_status: [
                { value: 'accepted', label: 'Принято', icon: '✔️' },
                { value: 'car_given', label: 'Передано', icon: '🚗' },
                { value: 'in_use', label: 'В использовании', icon: '🔄' },
                { value: 'completed', label: 'Завершено', icon: '🏁' },
                { value: 'rejected', label: 'Отклонено', icon: '❌' },
            ],
            user: null,
            phoneNumber: null,
            showOrder: true
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
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
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
                case 'completed-defect':
                    message = 'Завершено с дефектом';
                    break;

                default:
                    break;
            }
            return message;
        },
        async onSubmitReject(id) {
            const finalResult = {
                "comment": this.reject_comment,
                "rent_status": this.rent_status_selected,
                "booking_id": id
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
                this.getBookings();
            } else {
                alert(json.message);
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
                    this.avatar = json.avatar;
                    this.name = json.name;
                    this.user = json;
                    this.familyName = json.familyName;
                    this.email = json.email;
                    this.phoneNumber = json.phoneNumber;

                    if (this.user.role == 'rent') {
                        this.getBookings();
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
<style>
.status-toggle {
    display: flex;
    gap: 8px;
}

.status-btn {
    padding: 8px 14px;
    border: 1px solid #ccc;
    background: #f4f4f4;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
    font-size: 14px;
}

.status-btn:hover {
    background: #e9e9e9;
}

.status-btn.active {
    color: #fff;
    border-color: transparent;
}

.status-btn.accepted.active {
    background: #4caf50;
    /* green */
}

.status-btn.rejected.active {
    background: #f44336;
    /* red */
}
</style>