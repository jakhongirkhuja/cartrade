<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auth__userInfo container p-80">
            <div class="title">
                <h2 class="info__title"><router-link
                        :to="{ name: 'main.auksion.inside', params: { id: bookings?.car?.id } }">{{
                            bookings?.car?.car_mark.name }} {{ bookings?.car?.car_model.name }}
                        -
                        {{ bookings?.car?.year }}</router-link></h2>
            </div>
            <div class="user__ads">
                <div class="title" v-if="user?.role == 'rent' && bookings">
                    <div class="order-card">
                        <div class="order-header">
                            <h3>Заказ № {{ bookings.order_number }}</h3>
                        </div>

                        <div class="order-info">
                            <div class="info-row">
                                <span class="label">Клиент:</span>
                                <span class="value">
                                    {{ bookings.user?.name }} {{ bookings.user?.familyName }}
                                </span>
                            </div>

                            <div class="info-row">
                                <span class="label">Телефон:</span>
                                <span class="value">
                                    <a :href="'tel:' + bookings.user?.phoneNumber">{{
                                        formatPhone(bookings.user?.phoneNumber) }}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="status__block">
                        <div class="status-title" :class="'status-' + bookings.rent_status">
                            {{ rentStatusCheck(bookings.rent_status) }}
                        </div>
                        <div class="status-reason" v-if="bookings.rent_status == 'rejected'">
                            {{ bookings.comment }}
                        </div>
                    </div>

                    <div class="time">

                        <div class="time-block">
                            <div class="time-item">
                                <div class="time-label">Оплата</div>
                                <div class="time-value "
                                    :class="bookings.status == 'payed' ? 'time-value__status-ok' : 'time-value__status-not'">
                                    <b> {{ statusCheck(bookings.status) }}</b>
                                </div>
                            </div>
                            <div class="time-item">
                                <div class="time-label">Начало аренды</div>
                                <div class="time-value">
                                    {{ new Date(bookings.start_date).toLocaleString('ru-RU', {
                                        dateStyle: 'full',
                                        timeStyle: 'short'
                                    }) }}
                                </div>
                            </div>

                            <div class="time-separator"></div>

                            <div class="time-item">
                                <div class="time-label">Окончание аренды</div>
                                <div class="time-value">
                                    {{ new Date(bookings.end_date).toLocaleString('ru-RU', {
                                        dateStyle: 'full',
                                        timeStyle: 'short'
                                    }) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="body">
                    <RentSteps :history="bookings?.history" :user="user" :car="bookings?.car" :booking="bookings" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RentSteps from "@/components/RentSteps.vue";
export default {
    components: {
        RentSteps,
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
            cars: [],
            bookings: null,
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
        formatPhone(phone) {
            if (!phone) return '';
            phone = phone.toString().replace(/\D/g, '');
            if (phone.startsWith('998')) phone = '+' + phone;

            return phone.replace(
                /^(\+998)(\d{2})(\d{3})(\d{2})(\d{2})$/,
                '$1 $2 $3 $4 $5'
            );
        },
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
            let message = 'Скорем появится статус';

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
                    this.getBookings();
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
            const response = await fetch(this.url + 'api/cabinet/car/bookings/steps', {
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
                alert('updated status');
            } else {
                alert(json.message);
            }
        },
        async getBookings() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/cabinet/car/bookings?booking_id=' + this.$route.params.id, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                if (response.status == 200) {

                    this.bookings = json;
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