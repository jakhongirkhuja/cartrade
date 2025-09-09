<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
    <div class="aukstion">
        <div class="bread bg-gradient">
            <div class="bread__info container">
                <div class="rectangle rectangle_left"></div>
                <div class="rectangle rectangle_left"></div>

                <div class="filter">

                    <div class="auksion__select">
                        <div class="auksion__select--block">
                            <div class="each" @click="toogleElement">
                                <span>{{ selectedMark ?? 'Марка' }}</span>
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.29289 8.47273C7.68342 8.86326 8.31658 8.86326 8.70711 8.47273L15.0711 2.10877C15.4616 1.71825 15.4616 1.08508 15.0711 0.694557C14.6805 0.304033 14.0474 0.304033 13.6569 0.694557L8 6.35141L2.34315 0.694557C1.95262 0.304033 1.31946 0.304033 0.928932 0.694557C0.538408 1.08508 0.538408 1.71825 0.928932 2.10877L7.29289 8.47273ZM7 6.76562L7 7.76562L9 7.76563L9 6.76563L7 6.76562Z"
                                        fill="#676767" />
                                </svg>
                                <div class="list">
                                    <div class="list__items"></div>
                                    <div class="list__items" v-for="mark in marks" :key="mark.id"
                                        @click="selectMarkDrop(mark)">{{ mark.name }}</div>
                                </div>
                            </div>
                            <div class="each" :class="models.length == 0 ? 'disabled' : ''" @click="toogleElement">
                                <span>{{ selectedModel ?? 'Модель' }}</span>
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.29289 8.47273C7.68342 8.86326 8.31658 8.86326 8.70711 8.47273L15.0711 2.10877C15.4616 1.71825 15.4616 1.08508 15.0711 0.694557C14.6805 0.304033 14.0474 0.304033 13.6569 0.694557L8 6.35141L2.34315 0.694557C1.95262 0.304033 1.31946 0.304033 0.928932 0.694557C0.538408 1.08508 0.538408 1.71825 0.928932 2.10877L7.29289 8.47273ZM7 6.76562L7 7.76562L9 7.76563L9 6.76563L7 6.76562Z"
                                        fill="#676767" />
                                </svg>
                                <div class="list">
                                    <div class="list__items"></div>
                                    <div class="list__items" v-for="model in models" :key="model.id"
                                        @click="selectModelDrop(model)">{{ model.name }}</div>

                                </div>
                            </div>
                            <input type="text" class="each" placeholder="Год">
                            <div class="each" @click="toogleElement">
                                <span>{{ selectedType ?? 'Тип' }}</span>
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.29289 8.47273C7.68342 8.86326 8.31658 8.86326 8.70711 8.47273L15.0711 2.10877C15.4616 1.71825 15.4616 1.08508 15.0711 0.694557C14.6805 0.304033 14.0474 0.304033 13.6569 0.694557L8 6.35141L2.34315 0.694557C1.95262 0.304033 1.31946 0.304033 0.928932 0.694557C0.538408 1.08508 0.538408 1.71825 0.928932 2.10877L7.29289 8.47273ZM7 6.76562L7 7.76562L9 7.76563L9 6.76563L7 6.76562Z"
                                        fill="#676767" />
                                </svg>
                                <div class="list">
                                    <div class="list__items"></div>
                                    <div class="list__items" v-for="type in types" :key="type.id"
                                        @click="selectTypeDrop(JSON.parse(type.name), JSON.parse(type.id))">
                                        {{ JSON.parse(type.name)[0] }}</div>
                                </div>
                            </div>
                            <div class="each" @click="toogleElement">
                                <span>{{ selectedCondition ?? 'Состояние' }} </span>
                                <svg width="16" height="9" viewBox="0 0 16 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.29289 8.47273C7.68342 8.86326 8.31658 8.86326 8.70711 8.47273L15.0711 2.10877C15.4616 1.71825 15.4616 1.08508 15.0711 0.694557C14.6805 0.304033 14.0474 0.304033 13.6569 0.694557L8 6.35141L2.34315 0.694557C1.95262 0.304033 1.31946 0.304033 0.928932 0.694557C0.538408 1.08508 0.538408 1.71825 0.928932 2.10877L7.29289 8.47273ZM7 6.76562L7 7.76562L9 7.76563L9 6.76563L7 6.76562Z"
                                        fill="#676767" />
                                </svg>
                                <div class="list">
                                    <div class="list__items"></div>
                                    <div class="list__items" v-for="condition in conditions" :key="condition.id"
                                        @click="selectConditionDrop(JSON.parse(condition.name), JSON.parse(condition.id))">
                                        {{ JSON.parse(condition.name)[0] }}</div>

                                </div>
                            </div>
                            <input type="text" class="each" placeholder="Пробег км">
                            <div class="last">
                                <div class="auksion__type--each">Найти по запросу</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rectangle rectangle_right one"></div>
                <div class="rectangle rectangle_right"></div>
            </div>
        </div>

        <p class="aukstion__result container">Мы нашли <span>{{ resultCount }}</span> по вашему запросу</p>
        <div class="aukstion__block container forguest">
            sss
            <template v-if="cars.length > 0">
                <template v-for="car in cars">
                    <div class="aukstion__block--items" v-if="car">
                        <router-link :to="{ name: 'main.auksion.inside', params: { id: car.id } }" class="poster"
                            v-bind:style="{ 'background-image': 'url(' + url + '/files/cars/' + car.images[0].image + ')' }"></router-link>
                        <div class="info">
                            <h2 class="info__title"><router-link
                                    :to="{ name: 'main.auksion.inside', params: { id: car.id } }">{{
                                        car.car_mark.name }}
                                    {{ car.car_model.name }} - {{ car.year }}</router-link></h2>
                        </div>
                        <div class="actions">
                            <div class="actions__price--origin fx">
                                <!-- <div class="info">Начальная ставка:</div> -->
                                <div class="price" v-html="formatPrice(car.start_price) + ' сум'"></div>
                            </div>


                        </div>
                        <div class="mobile__view">
                            <div class="charakter fx">
                                <div class="items fx">
                                    <img src="/icons/trail.svg" alt="" width="32" height="32">
                                    <p>{{ car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }}</p>
                                </div>
                                <div class="items fx">
                                    <img src="/icons/fuil.svg" alt="">
                                    <p>{{ JSON.parse(car.car_fuil_type.name)[0] }}</p>
                                </div>
                                <div class="items fx" style="display: none;">
                                    <img src="/icons/avtomat.svg" alt="">
                                    <p>{{ JSON.parse(car.transmission.name)[0] }}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </template>
            </template>
            <div class="auksion__block--pagination" style="display: none;">
                <ul class="pagination">
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
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
            resultCount: 0,
            features: ['Бензин', 'Автомат', '77329', 'Седан', 'Новый', '2006 г.', 'бежевый металлик', 'Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',
            marks: [],
            selectedMark: null,
            selectedModel: null,
            selectedCondition: null,
            selectedType: null,
            conditions: [],
            types: [],
            selectedMark_id: 0,
            selectedModel_id: 0,
            selectedType_id: 0,
            selectedCondition_id: 0,
            inside: false,
            models: [],
            auksions: [],
            authUserPrivilege: false,
            cars: [],
        }
    },
    methods: {
        formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
        },
        toogleElement(event) {
            this.removeClassActive();
            if (!event.currentTarget.classList.contains('disabled')) {
                if (!this.inside) {
                    event.currentTarget.classList.add('active');
                    this.inside = true;
                }

            }

        },
        removeClassActive() {
            document.querySelectorAll('.auksion__select--block .each.active').forEach(element => {
                element.classList.remove('active');
            });
        },
        setNewTimeOut() {
            setTimeout(() => {
                this.inside = false;
            }, 1000);
        },
        selectMarkDrop(mark) {
            this.removeClassActive();
            this.selectedMark = mark.name;
            this.selectedMark_id = mark.id;
            this.callModel(mark.id);
            this.setNewTimeOut();

        },
        selectModelDrop(model) {
            this.removeClassActive();
            this.selectedModel = model.name;
            this.selectedModel_id = model.id;
            this.setNewTimeOut();
        },
        selectTypeDrop(type, id) {
            this.removeClassActive();
            this.selectedType = type[0];
            this.selectedType_id = id;
            this.setNewTimeOut();
        },
        selectConditionDrop(condition, id) {
            this.removeClassActive();
            this.selectedCondition = condition[0];
            this.selectedCondition_id = id;
            this.setNewTimeOut();
        },
        async loadMarks() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/filters', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();

                this.marks = json.marks;
                this.conditions = json.condition;
                this.types = json.type;

            } catch (error) {
                console.error('Ошибка:', error);
            }

        },
        async callModel(id) {
            if (id == 0) return;
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/loadModel/' + id, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                this.models = json;

            } catch (error) {
                console.error('Ошибка:', error);
            }
        },
        async loadAuksion() {
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/auksion?page=1', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "application/json",
                        'Authorization': 'Bearer ' + token,
                    }
                });
                const json = await response.json();
                this.cars = json.data;
                // console.log(json.data);

                this.resultCount = json.total;

            } catch (error) {
                console.error('Ошибка:', error);
            }
        },
        async userCheck() {
            let token = localStorage.getItem('token');
        }
    },
    created() {
        this.loadMarks();
        this.loadAuksion();
    },
}
</script>