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
                    <p class="price">{{ car.start_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} сум</p>
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

                        <div class="checks" v-if="checks.length > 0">
                            <div class="checks-list">
                                <div v-for="check in checks" :key="check.id || check.car_check_id"
                                    class="check-item flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-3 border-b rounded-md"
                                    :class="{
                                        'status-ok': check.status === true,
                                        'status-bad': check.status === false,
                                        'status-null': check.status === null || check.status === undefined
                                    }">
                                    <!-- Left: Check title -->
                                    <div class="check-left font-semibold text-gray-800">
                                        {{ check.check?.order ?? check.order ?? '—' }}) {{ check.check?.title_ru ||
                                            check.title || '—' }}
                                    </div>

                                    <!-- Right: Status + Comment -->
                                    <div
                                        class="check-right flex flex-col md:flex-row md:items-center gap-2 text-sm bg-gray-50 p-2 rounded border w-full md:w-auto">
                                        <!-- Status -->
                                        <span v-if="check.status"
                                            class="text-green-600 font-medium flex items-center gap-1">
                                            ✅ Исправный
                                        </span>
                                        <span v-else class="text-red-600 font-medium flex items-center gap-1">
                                            ❌ Неисправный
                                        </span>

                                        <!-- Comment -->
                                        <span v-if="check.comment" class="text-gray-700">
                                            {{ check.comment }}
                                        </span>
                                        <span v-else class="text-gray-400 italic">
                                            Без комментария
                                        </span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="car__block--actions" v-if="!loading">

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
import BetComponent from '@/components/BetComponent.vue';
export default {
    components: {
        BetComponent,
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
            scrollLeft: 0,
            car: null,
            time_start: null,
            checks: [],
            time_end: null,
            images: ['https://s3-alpha-sig.figma.com/img/91dc/8f0a/334d1aa1dca640d1260f281fb9c5a2d4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juFeEiPA8CoP36ZD5BrMo2roIkPOEOEy2v0J5tQuK4cPQRA4wLJAO2XdE4aLwxkAaBgRq1PjNAdOKQ2RkM8Ys8ExkVtQii2rpdj0yBObRDu9Ob9nk93KKJsQwcESVyp2WE~IS8Dxd8bIif9oo5Rz7dJXVeckMW97W3iHDzx8KsP6QE1l-Catp6i3-PRmJ01bZpFymvSLZK0JHf-kQ6alsZDFZP7-u1mZlLZbCfsHvGnt9igaS87E1NvDvQRiNCNF1t-WlmAVf17c81zAmNQ0PiTWQEqr89DymCAu8WzDYuttUWJmrOliGGS-OZtcUmbqrSdogPONQj3v4sNsC5j~Zg__']
        }
    },
    mounted() {
        //   this.adjustSlides();
        //   window.addEventListener('resize', this.adjustSlides);
    },
    beforeUnmount() {
        //   window.removeEventListener('resize', this.adjustSlides);
    },
    methods: {
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
                    if (json.role == 'dealer') {
                        this.auth = true;
                    }

                }
                this.loading = true;
            } catch (error) {
                this.loading = true;
                console.log(error);
            }
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
                if (response.status == 200) {
                    if (json) {
                        this.car = json;
                        this.checks = Array.isArray(json.check_results)
                            ? [...json.check_results].sort((a, b) => (a.check?.order ?? 0) - (b.check?.order ?? 0))
                            : [];
                        // this.time_start = json.time_start;
                        // this.time_end = json.time_end;
                        this.poster = this.url + '/files/cars/' + this.car.images[0].image
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

<style>
.swiper-slide {
    width: 160px !important;


}

.checks-list {}

@media (min-width: 720px) {
    .checks-list {}
}

/* card */
.check-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    padding: 14px;
    border-radius: 12px;
    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
    border: 1px solid #e6eef7;
    /* мягкий светлый контур */
    box-shadow: 0 6px 18px rgba(21, 35, 60, 0.06);
    transition: transform .14s ease, box-shadow .14s ease, border-color .14s ease;
}

/* hover / focus look */
.check-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 26px rgba(21, 35, 60, 0.12);
    border-color: #cfe6ff;
}

/* left block (title) */
.check-left {
    display: flex;
    flex-direction: column;
}

.check-title {
    font-size: 15px;
    font-weight: 600;
    color: #102a43;
}

.check-sub {
    font-size: 12px;
    color: #6b7c8a;
    margin-top: 4px;
}

/* right block (controls) */
.check-right {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 220px;
    justify-content: flex-end;
}

.check-right span:first-child {
    width: 240px;
    text-align: left;
}

.check-right span:last-child {
    width: 500px;
    text-align: center;
}

.check-right input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

/* comment input */
.comment {
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid #e6eef7;
    min-width: 140px;
    outline: none;
    font-size: 13px;
    transition: border-color .12s ease, box-shadow .12s ease;
}

.comment:focus {
    border-color: #85b7ff;
    box-shadow: 0 6px 18px rgba(133, 183, 255, 0.12);
}

/* status accent styles (left border) */
.check-item.status-ok {
    border-left: 6px solid #16a34a;
    /* зелёный акцент */
}

.check-item.status-bad {
    border-left: 6px solid #ef4444;
    /* красный акцент */
}

.check-item.status-null {
    border-left: 6px solid #f59e0b;
    /* оранжевый для неопределённого */
}

@media (max-width: 1000px) {

    .check-right span:last-child {
        width: fit-content;
    }

    .check-item {
        display: block;
    }
}

@media (max-width: 900px) {


    .check-item {
        display: block;
    }

    .check-left {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 10px;
    }

    .check-right span {
        display: block;
    }

    .check-right {
        display: block;
        text-align: center;
    }

    .check-right span:first-child {
        text-align: center;
        width: 100%;
    }

    .check-right span:last-child {
        text-align: center;
        width: 100%;
        margin-top: 8px;
    }
}


/* subtle responsive tweak */
@media (max-width: 420px) {
    .check-right {
        min-width: 0;
        gap: 8px;
    }

    .comment {
        min-width: 100px;
        font-size: 12px;
    }
}
</style>
