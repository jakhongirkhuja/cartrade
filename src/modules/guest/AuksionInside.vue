<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
    <div class="aukstion">
        <div class="car">
            <div class="container" v-if="car">

                <div class="car__type">
                    <span>{{ JSON.parse(car.car_body_type.name)[0] }}</span><span>{{ new
                        Date(car.created_at).toLocaleString('ru') }}</span>

                </div>
                <h2 class="car__name">{{ car.car_mark.name }} {{ car.car_model.name }}</h2>
                <div class="car__info">
                    <p>{{ car.title }}</p>
                    <p class="price">{{ car.rent_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} сум в день
                    </p>
                </div>
                <div class="car__block">
                    <div class="car__block--info">
                        <div class="car__poster" v-bind:style="{ 'background-image': 'url(' + poster + ')' }">

                        </div>
                        <div class="car__slider" ref="carSlider" @mousedown="handleMouseDown"
                            @mouseleave="handleMouseLeave" @mouseup="handleMouseUp" @mousemove="handleMouseMove">

                            <div class="car__slider--each" @click="changePoster(imagecar.image)"
                                v-bind:style="{ 'background-image': 'url(' + url + '/files/cars/' + imagecar.image + ')' }"
                                v-for="imagecar in car.images"></div>
                        </div>
                        <div class="car__mobile">
                            <BetComponent></BetComponent>

                        </div>
                        <div class="car__char bg__car">
                            <h4 class="title">Обзор</h4>
                            <div class="car__char--items">
                                <p>Марка</p>
                                <p>{{ car.car_mark.name }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Модель</p>
                                <p>{{ car.car_model.name }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Цвет</p>
                                <p>{{ JSON.parse(car.color.name)[0] }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Тип вождения</p>
                                <p>{{ car.drive_types }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Передача инфекции</p>
                                <p>{{ JSON.parse(car.transmission.name)[0] }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Состояние</p>
                                <p>{{ JSON.parse(car.condation.name)[0] }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Год</p>
                                <p>{{ car.year }} год</p>
                            </div>
                            <div class="car__char--items">
                                <p>Пробег</p>
                                <p>{{ car.mileage }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Тип топлива</p>
                                <p>{{ JSON.parse(car.car_fuil_type.name)[0] }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Объем двигателя</p>
                                <p>{{ car.engine_capacity }} л</p>
                            </div>
                            <div class="car__char--items">
                                <p>Двери</p>
                                <p>{{ car.doors }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>Цилиндры</p>
                                <p>{{ car.cylinders }}</p>
                            </div>
                            <div class="car__char--items">
                                <p>ВИН</p>
                                <p>{{ car.vin }}</p>
                            </div>
                        </div>
                        <div class="car__body bg__car">
                            <h4 class="title">Описание</h4>
                            <p>
                                {{ car.body }}
                            </p>
                        </div>

                        <div class="car__func bg__car">
                            <h4 class="title">Функции</h4>
                            <template v-for="(fun, index) in JSON.parse(car.functions)">

                                <div class="car__func--items" v-if="fun.title.length > 0">

                                    <h3>{{ fun.title }}</h3>
                                    <ul>
                                        <li v-for="body in fun.body.split(',')">{{ body }}</li>
                                    </ul>
                                </div>
                            </template>

                        </div>
                        <div class="bg__car checks" v-if="car.check_results.length > 0">
                            <h4 class="title">Полный перечень проверок по частям автомобиля</h4>
                            <router-link :to="{ name: 'main.auksion.inside.dealer.checks', params: { id: car.id } }"
                                class="btn btn-primary">Открыть
                                список</router-link>

                        </div>
                    </div>
                    <div class="car__block--actions" v-if="!loading">

                    </div>
                    <div class="car__block--actions" v-else>
                        <div class="owning" v-if="owner">
                            <div class="btn btn-primary w-100" @click="removeCar">Удалить объявление</div>
                            <router-link :to="{ name: 'cabinet.edit.auksion', params: { id: car.id } }"
                                class="btn btn-primary-outline w-100">Редактировать объявление</router-link>
                        </div>

                        <div v-else>
                            <div class="start_renting" v-if="auth">
                                <div class="booking-form">
                                    <p class="title">Бронирование автомобиля</p>

                                    <form @submit.prevent="checkAvailability">

                                        <div class="form-group">
                                            <label for="pickup">Дата и время получения</label>
                                            <VueDatePicker v-model="pickup" :defaultValue="new Date()" range
                                                multi-calendars :min-date="now" />
                                        </div>
                                        <button type="submit">Проверить доступность</button>
                                    </form>

                                    <!-- Результат -->
                                    <p v-if="message" class="message">{{ message }}</p>

                                    <form @submit.prevent="createOrderBooking" class="text-left" v-if="bookActive">
                                        <div class="mb-1"><b>Время получения:</b> {{ new
                                            Date(book_pickup).toLocaleString('ru-RU', {
                                                dateStyle: 'full',
                                                timeStyle: 'short'
                                            }) }}</div>
                                        <div class="mb-1"><b>Время возврата:</b> {{ new
                                            Date(book_dropoff).toLocaleString('ru-RU', {
                                                dateStyle: 'full',
                                                timeStyle: 'short'
                                            }) }}</div>
                                        <div class="mb-1"><b>Цена:</b> {{ totalPrice.toLocaleString('ru-RU') }} сум
                                        </div>

                                        <!-- Проверка доступности -->
                                        <button type="submit">забронировать</button>
                                    </form>
                                </div>
                            </div>
                            <div class="first_auth" v-else>
                                <p class="title mb-1">Чтобы забронировать этот автомобиль, вам нужно войти в аккаунт как
                                    арендатор</p>
                                <div class="btn btn-primary" @click="openAuthPop()">Войти / Регистрация</div>
                            </div>

                            <!-- <p class="title">Завершение аукциона через:</p> -->

                            <!-- <BetComponent :buy_price="car.buy_price" :timeStart="time_start" :timeEnd="time_end"
                                :auth=auth></BetComponent> -->
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { useToast, POSITION } from "vue-toastification";
import '@vuepic/vue-datepicker/dist/main.css'
import BetComponent from '@/components/BetComponent.vue';
import { useAuthStore } from '@/stores/auth';
import { usePopUpStore } from '@/stores/popup';
import { VueDatePicker } from '@vuepic/vue-datepicker';
export default {
    components: {
        BetComponent,
        VueDatePicker,
    },
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            owner: false,
            loading: false,
            auth: false,
            poster: '',
            resultCount: 4733,
            features: ['Бензин', 'Автомат', '77329', 'Седан', 'Новый', '2006 г.', 'бежевый металлик', 'Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/ba1c/77b7/f508483313763af78e063463927acbac?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYKtLpDVn8pjL9fK4bngMlNRU4ErX~xXRUZr~DfHNgFE8BAchrFnQ4PlYQjHuA~Leffe17gvsF~Z~CaXGff9xVFT7QqTYihCklVAJw81bKKffPfKpSzLvuK8XLra-R7Fd4yG9u05FUl7ipMmUU5FQZ3Dy2ASR356v-C0v-02QnXKnDzYjBPi2-0QXNqSAjjI-7KR2UxymFG~3Z25N6vh7Db2Owj5eE91F3xpMPpxPCefsvOKkoRNKLcmdvQ9LfsK1HVsR6Kbx3j1NtPrHFGYziD6uaLKQ2uRVe3mJnuzyOPFLNRbJMhBx1263k-~GSe5Y5oIU4iC7VY5SB0I37hw8w__',
            isDown: false,
            startX: 0,
            bookActive: false,
            book_pickup: '',
            book_dropoff: '',
            scrollLeft: 0,
            car: null,
            time_start: null,
            pickup: [new Date(), new Date()],
            dropoff: '',
            now: new Date(),
            message: '',
            unavailableIntervals: [
            ],
            timeConfig: {
                enableTimePicker: true,
                is24: true
            },
            time_end: null,
            images: ['https://s3-alpha-sig.figma.com/img/91dc/8f0a/334d1aa1dca640d1260f281fb9c5a2d4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juFeEiPA8CoP36ZD5BrMo2roIkPOEOEy2v0J5tQuK4cPQRA4wLJAO2XdE4aLwxkAaBgRq1PjNAdOKQ2RkM8Ys8ExkVtQii2rpdj0yBObRDu9Ob9nk93KKJsQwcESVyp2WE~IS8Dxd8bIif9oo5Rz7dJXVeckMW97W3iHDzx8KsP6QE1l-Catp6i3-PRmJ01bZpFymvSLZK0JHf-kQ6alsZDFZP7-u1mZlLZbCfsHvGnt9igaS87E1NvDvQRiNCNF1t-WlmAVf17c81zAmNQ0PiTWQEqr89DymCAu8WzDYuttUWJmrOliGGS-OZtcUmbqrSdogPONQj3v4sNsC5j~Zg__']
        }
    },
    mounted() {
        //   this.adjustSlides();
        //   window.addEventListener('resize', this.adjustSlides);
    },
    computed: {
        totalPrice() {
            if (!this.book_pickup || !this.book_dropoff) return 0;

            const startDate = new Date(this.book_pickup);
            const endDate = new Date(this.book_dropoff);
            const diffTime = endDate - startDate;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

            const dailyPrice = this.car?.rent_price || 0;
            return diffDays * dailyPrice;
        },
        checkAvailable() {
            var currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 1);
            return [currentDate];
        },
        disabledDates() {
            const dates = new Set();

            this.unavailableIntervals.forEach(interval => {
                const start = new Date(interval.start);
                const end = new Date(interval.end);

                for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                    dates.add(d.toDateString());
                }
            });

            return Array.from(dates).map(ds => new Date(ds));
        },

        pickupDateOnly() {
            return this.pickup ? new Date(new Date(this.pickup).setHours(0, 0, 0, 0)) : null;
        },
        dropoffDateOnly() {
            return this.dropoff ? new Date(this.dropoff.setHours(0, 0, 0, 0)) : null;
        },

    },
    beforeUnmount() {
        //   window.removeEventListener('resize', this.adjustSlides);
    },
    methods: {
        disabledTimesForDate(dateOnly) {
            if (!dateOnly) return [];

            const disabled = [];
            this.unavailableIntervals.forEach(iv => {
                const start = new Date(iv.start);
                const end = new Date(iv.end);
                start.setSeconds(0, 0);
                end.setSeconds(0, 0);

                if (start.toDateString() === dateOnly.toDateString() || end.toDateString() === dateOnly.toDateString()) {
                    for (let h = start.getHours(); h <= end.getHours(); h++) {
                        disabled.push({ hours: h });
                    }
                }
            });

            return disabled;
        },
        formatDate(date) {
            let d = new Date(date);
            let year = d.getFullYear();
            let month = String(d.getMonth() + 1).padStart(2, '0');
            let day = String(d.getDate()).padStart(2, '0');
            let hours = String(d.getHours()).padStart(2, '0');
            let minutes = String(d.getMinutes()).padStart(2, '0');
            let seconds = String(d.getSeconds()).padStart(2, '0');
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        },
        async createOrderBooking() {
            try {

                const finalResult = {

                    'start_date': this.formatDate(this.pickup[0]),
                    'end_date': this.formatDate(this.pickup[1]),
                    "car_id": this.$route.params.id,

                }

                var data = new FormData()

                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }
                const response = await fetch(this.url + 'api/cabinet/car/bookings/create', {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();

                if (response.status == 201 || response.status == 200) {
                    if (json.success) {
                        let link = json.link;
                        useToast().success('Успешно');

                    }
                } else {
                    if (response.status == 400) {
                        useToast().error('Вы не загрузили данные вашего паспорта');
                    } else {
                        useToast().error(json.message);
                    }


                }


            } catch (error) {
                console.log(error);
            }
        },
        async checkAvailability() {
            this.bookActive = false;


            if (!this.pickup[0] || !this.pickup[1]) {
                this.message = 'Пожалуйста, Дату и время получения.';
                useToast().error('Пожалуйста, Дату и время получения');
                return;
            }

            // // Проверка перекрытия с недоступными интервалами:
            // const conflict = this.unavailableIntervals.some(iv => {
            //     return this.pickup < iv.end && this.dropoff > iv.start;
            // });

            // if (conflict) {
            //     this.message = 'Выбранное время занято, пожалуйста, выберите другое.';
            // }
            this.book_dropoff = '';
            this.book_pickup = '';
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/auksion/check-availibility?start_date=' + new Date(this.pickup[0]).toISOString() + '&end_date=' + new Date(this.pickup[1]).toISOString() + '&car_id=' + this.$route.params.id, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200) {

                    this.message = json.message;
                    if (json.available) {
                        this.bookActive = true;
                        this.book_pickup = this.pickup[0]
                        this.book_dropoff = this.pickup[1]
                    }

                }

            } catch (error) {
                console.log(error);
            }
            // } else {
            //     this.message = `Автомобиль доступен с ${this.pickup.toLocaleString()} по ${this.dropoff.toLocaleString()}`;
            // }
        },
        openAuthPop() {
            const authStore = useAuthStore();
            authStore.setActive(true, 1);
            const anotherpop = usePopUpStore();
            anotherpop.toggleActive(true);
        },
        handleMouseDown(e) {
            this.isDown = true;
            this.$refs.carSlider.classList.add('active');
            this.startX = e.pageX - this.$refs.carSlider.offsetLeft;
            this.scrollLeft = this.$refs.carSlider.scrollLeft;
        },
        handleMouseLeave() {
            this.isDown = false;
            this.$refs.carSlider.classList.remove('active');
        },
        handleMouseUp() {
            this.isDown = false;
            this.$refs.carSlider.classList.remove('active');
        },
        handleMouseMove(e) {
            if (!this.isDown) return;
            e.preventDefault();
            const x = e.pageX - this.$refs.carSlider.offsetLeft;
            const walk = (x - this.startX) * 1; // Scroll-fast
            this.$refs.carSlider.scrollLeft = this.scrollLeft - walk;
        },
        changePoster(image) {
            this.poster = this.url + '/files/cars/' + image;
        },
        async checkUser() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/user', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200) {

                    if (json.id == this.car.user_id) {
                        this.owner = true;
                    } else {
                        this.owner = false;
                    }
                    // if (json.role == 'dealer') {
                    this.auth = true;
                    // }

                }
                this.loading = true;
            } catch (error) {
                this.loading = true;
                console.log(error);
            }
        },
        async getUnavailableIntervals() {
            const response = await fetch(this.url + 'api/unavailable-intervals?car_id=' + this.car.id);
            const data = await response.json();

            this.unavailableIntervals = data.map(iv => ({
                start: new Date(iv.start),
                end: new Date(iv.end)
            }));
        },
        async getCars() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/auksion?id=' + this.$route.params.id, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200 && json) {
                    this.car = json;
                    this.poster = this.url + '/files/cars/' + this.car.images[0].image;
                    if (this.car.bookings) {
                        this.unavailableIntervals = this.car.bookings.map(iv => ({
                            start: new Date(iv.start),
                            end: new Date(iv.end)
                        }));
                    }

                    this.checkUser();
                }
            } catch (error) {
                console.log(error);
            }
        },
        async removeCar() {
            try {
                // eslint-disable-next-line no-unused-vars
                let token = localStorage.getItem('token');
                const finalResult = {

                    "mark_id": this.selectedMark,



                }


                var data = new FormData()

                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }

                const response = await fetch(this.url + 'api/cabinet/car/delete/' + this.$route.params.id, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept-Language': 'en-US,en;q=0.8',
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                });
                const json = await response.json();
                if (json.errors) {
                    alert(json.message);
                }
                if (response.status == 200) {
                    alert('auksion has been deleted');
                }
                this.$router.go(-1);
                console.log(json);
                // console.log(json);





            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    },
    created() {

        this.getCars();

    },
}
</script>

<style scoped>
::v-deep(.swiper-slide) {
    width: 160px !important;
}

.booking-form {
    max-width: 400px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f9f9f9;

}

.booking-form p {
    text-align: center;
    margin-bottom: 20px;
}

.booking-form form {
    box-shadow: none;
    border-color: transparent;
    background-color: transparent;
    padding: 0;
    position: initial;
}

.booking-form form input {}

.form-group {
    margin-bottom: 10px 0;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.form-group input {
    margin: 15px 0;

    font-size: 14px;
}

.booking-form ::v-deep(.vdp-datepicker button) {
    background-color: #007bff;
    color: white;
    border-radius: 6px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.message {
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
    color: green;
}

.booking-form .dp--disabled {
    background-color: #e0e0e0;
    /* серый фон */
    color: #888888;
    /* серый текст */
    cursor: not-allowed;
    /* курсор запрета */
    pointer-events: none;
    /* нельзя кликать */
}
</style>