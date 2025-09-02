<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auksion__edit container">
            <div class="form">
                <!-- Название -->
                <div class="row">
                    <div class="col-12">
                        <label for="title">
                            Название <span class="primary">*</span>
                            <input type="text" id="title" v-model="title"
                                :class="['form-control', errors.title ? 'is-invalid' : '']"
                                placeholder="2.0h T8 11.6kWh Polestar Engineered Auto AWD (s/s) 5dr" />
                            <small>Введите не менее 16 символов</small>
                        </label>
                    </div>
                </div>

                <!-- Фото (обязательное хотя бы одно) -->
                <div class="foto">
                    <h4>Фото *</h4>
                    <small>Первое фото будет на обложке объявления</small>
                    <div class="loaded__fotos">
                        <div class="each" v-for="image in images">
                            <img :src="url + '/files/cars/' + image.image">
                            <svg @click="removeImage(image.id)" title="удалить" fill="#ff0000" height="20px"
                                width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.965 27.965"
                                xml:space="preserve" stroke="#ff0000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g id="c142_x">
                                            <path
                                                d="M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982 C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78 l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782 c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z">
                                            </path>
                                        </g>
                                        <g id="Capa_1_104_"> </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="foto__each">
                        <div v-for="(upload, index) in uploads" :key="index" class="drop-zone"
                            :class="errors.uploads ? 'is-invalid' : ''" @dragover.prevent="handleDragOver"
                            @drop.prevent="handleDrop($event, index)" @click="selectFile(index)">
                            <p v-if="!upload.imageUrl">Загрузить Фото</p>
                            <div v-if="upload.imageUrl" class="image-preview">
                                <img :src="upload.imageUrl" alt="Image preview" />
                            </div>
                            <input type="file" ref="fileInput" class="file-input"
                                @change="handleFileChange($event, index)" accept="image/*" />
                        </div>
                    </div>
                </div>

                <hr />

                <!-- Блок select'ов -->
                <div class="row">
                    <div class="col-4">
                        <label>Марка *</label>
                        <select v-model="selectedMark" @change="callModel"
                            :class="['form-control', errors.selectedMark ? 'is-invalid' : '']">
                            <option value="">Выберите</option>
                            <option v-for="mark in marks" :key="mark.id" :value="mark.id">
                                {{ mark.name }}
                            </option>
                        </select>
                    </div>

                    <div class="col-4">
                        <label>Модель *</label>
                        <select v-model="selectedModel"
                            :class="['form-control', errors.selectedModel ? 'is-invalid' : '']">
                            <option value="">Выберите</option>
                            <option v-for="model in models" :key="model.id" :value="model.id">
                                {{ model.name }}
                            </option>
                        </select>
                    </div>

                    <div class="col-4">
                        <label>Тип *</label>
                        <select v-model="selectedType"
                            :class="['form-control', errors.selectedType ? 'is-invalid' : '']">
                            <option value="">Выберите</option>
                            <option v-for="type in types" :key="type.id" :value="JSON.parse(type.id)">
                                {{ JSON.parse(type.name)[0] }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <label>Состояние *</label>
                        <select v-model="selectedCondition"
                            :class="['form-control', errors.selectedCondition ? 'is-invalid' : '']">
                            <option value="">Выберите</option>
                            <option v-for="condition in conditions" :key="condition.id"
                                :value="JSON.parse(condition.id)">
                                {{ JSON.parse(condition.name)[0] }}
                            </option>
                        </select>
                    </div>

                    <div class="col-4">
                        <label>Цвет *</label>
                        <select v-model="selectedColor"
                            :class="['form-control', errors.selectedColor ? 'is-invalid' : '']">
                            <option value="">Выберите</option>
                            <option v-for="color in colors" :key="color.id" :value="JSON.parse(color.id)">
                                {{ JSON.parse(color.name)[0] }}
                            </option>
                        </select>
                    </div>

                    <div class="col-4">
                        <label>Коробка передач *</label>
                        <select v-model="selectedTransmission" :class="[
                            'form-control',
                            errors.selectedTransmission ? 'is-invalid' : ''
                        ]">
                            <option value="">Выберите</option>
                            <option v-for="transmission in transmissions" :key="transmission.id"
                                :value="JSON.parse(transmission.id)">
                                {{ JSON.parse(transmission.name)[0] }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <label>Вид топлива *</label>
                        <select v-model="selectedFuil"
                            :class="['form-control', errors.selectedFuil ? 'is-invalid' : '']">
                            <option value="">Выберите</option>
                            <option v-for="fuil in fuils" :key="fuil.id" :value="JSON.parse(fuil.id)">
                                {{ JSON.parse(fuil.name)[0] }}
                            </option>
                        </select>
                    </div>

                    <div class="col-4">
                        <label>Тип вождения *</label>
                        <input type="text" v-model="drive_types"
                            :class="['form-control', errors.drive_types ? 'is-invalid' : '']" placeholder="2WD" />
                    </div>

                    <div class="col-4">
                        <label>Год *</label>
                        <input type="text" v-model="year" :class="['form-control', errors.year ? 'is-invalid' : '']"
                            placeholder="2023" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <label>Пробег *</label>
                        <input type="text" v-model="mileage"
                            :class="['form-control', errors.mileage ? 'is-invalid' : '']" placeholder="14000" />
                    </div>

                    <div class="col-4">
                        <label>Объем двигателя *</label>
                        <input type="text" v-model="engine_capacity"
                            :class="['form-control', errors.engine_capacity ? 'is-invalid' : '']" placeholder="1.5" />
                    </div>

                    <div class="col-4">
                        <label>Двери *</label>
                        <input type="text" v-model="doors" :class="['form-control', errors.doors ? 'is-invalid' : '']"
                            placeholder="4" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <label>Цилиндры *</label>
                        <input type="text" v-model="cylinders"
                            :class="['form-control', errors.cylinders ? 'is-invalid' : '']" placeholder="6" />
                    </div>
                    <div class="col-8">
                        <label>VIN *</label>
                        <input type="text" v-model="vin" :class="['form-control', errors.vin ? 'is-invalid' : '']"
                            placeholder="2D456THA798700213GT212" />
                    </div>
                </div>

                <hr />
                <div class="row">
                    <div class="textBody"> <label for="textBody"> Описание <textarea id="textBody" style="height: auto;"
                                rows="8" v-model="body" placeholder="Описание" class="form-control"></textarea> </label>
                    </div>
                </div>
                <div class="row">
                    <div class="w-100">
                        <h4 class="l-10">Функции</h4>
                        <div class="function_body">
                            <div v-for="(row, index) in rows" :key="index" class="row mb-2">
                                <div class="col-6"> <input type="text" v-model="row.title"
                                        @input="checkAndAddRow(index)" class="form-control" placeholder="Удобство">
                                </div>
                                <div class="col-6"> <input type="text" v-model="row.body" @input="checkAndAddRow(index)"
                                        class="form-control"
                                        placeholder="Сиденья с подогревом,Навигационная система,Электропривод задней двери">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Цена -->
                <div class="row">
                    <div class="timing">
                        <label>Стартовая цена *</label>
                        <input type="number" v-model="start_price"
                            :class="['form-control', errors.start_price ? 'is-invalid' : '']" placeholder="120000000" />
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="btn btn-primary" @click="submitformAdd">Обновить</div>
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

            // фото — хотя бы одно (imageUrl для превью, image для файла)
            uploads: [
                { imageUrl: null, image: null }
            ],

            // списки с сервера
            marks: [],
            models: [],
            conditions: [],
            types: [],
            colors: [],
            transmissions: [],
            fuils: [],

            // выбранные значения
            selectedMark: null,
            selectedModel: null,
            selectedCondition: null,
            selectedType: null,
            selectedColor: null,
            selectedTransmission: null,
            selectedFuil: null,

            // форма
            title: '',
            year: '',
            mileage: '',
            engine_capacity: '',
            doors: '',       // сделал пустым, чтобы проходила валидация
            cylinders: '',
            drive_types: '',
            vin: '',
            body: '',
            time_start: '',
            time_end: '',
            start_price: '',
            buy_price: '',

            // оценки (по умолчанию ставим 5)
            salon: 5,
            engine: 5,
            carbody: 5,

            // динамические характеристики (функции)
            rows: [
                { title: '', body: '' }
            ],

            // служебные
            guest: false,
            errors: {}, // сюда кладём ошибки при валидации

            // временные демо-данные (можно убрать)
            avatar: 'https://s3-alpha-sig.figma.com/img/ab6e/a6b2/4a90e78a6adef6fdee5f81d6a60ba5c0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwL9OvlKppwGeQGkysOtbx08oxs~L7XclTew8RUhtMGNWoyYQYAFbPtFb3DeLUXj4Iow0vXcYTSCqJScuDxNBwMzZNrmgFRCGjjxcc0-EtuLNLfet66~RKiIgoEM~kq~TxyO3Ma7UjwDL1KUrPPHnbOrmhA~h7Pt4Y9qht1a10Vde4Ha65VeXcyTQQBXIWjhyqEkY9MGoI3j~HqPIFi~mBlP8frdyAH4Re6OKSh1hUXux3HPoQdBbY5bMcZJPuzJkEQl~ZnOQsA2Qk48vuMJDtj2vSdlR5gcoWA-BOquGPVvN7kYS8p6d3DcBNNAW9QPB0XO3SRwlXguj6k8zSmB4w__',
            features: ['Бензин', 'Автомат', '77329', 'Седан', 'Новый', '2006 г.', 'бежевый металлик', 'Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',


        }
    },
    methods: {
        async loadFilters() {
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
                this.colors = json.colors;
                this.transmissions = json.transmissions;
                this.fuils = json.fuils;
            } catch (error) {
                console.error('Ошибка:', error);
            }

        },
        async callModel() {

            if (this.selectedMark == 0) return;
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url + 'api/loadModel/' + this.selectedMark, {
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
        checkAndAddRow(index) {
            if (this.rows[index].title && this.rows[index].body && index === this.rows.length - 1) {
                this.rows.push({ title: '', body: '' });
            }
            // console.log(this.rows);
        },
        handleDragOver(event) {
            event.currentTarget.classList.add("drag-over");
        },
        handleDrop(event) {
            event.currentTarget.classList.remove("drag-over");
            const file = event.dataTransfer.files[0];
            if (file && file.type.startsWith("image/")) {
                this.uploads[0].image = file;
                this.addImage(1);
            }
        },
        selectFile(index) {
            this.$refs.fileInput[index].click();
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                this.uploads[0].image = file;
                this.addImage(1);
            }
        },
        async addImage(image_id) {
            try {
                // eslint-disable-next-line no-unused-vars
                let token = localStorage.getItem('token');
                const finalResult = {
                    "image_id": image_id,

                }

                var data = new FormData()

                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }
                data.append('image', this.uploads[0].image);

                const response = await fetch(this.url + 'api/cabinet/car/image/add/' + this.$route.params.id, {
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
                    alert("фото добавлено");
                    this.getAuksion();
                }
            } catch (error) {
                console.log(error);
            }
        },
        async removeImage(image_id) {
            try {
                // eslint-disable-next-line no-unused-vars
                let token = localStorage.getItem('token');
                const finalResult = {
                    "image_id": image_id,

                }

                var data = new FormData()

                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url + 'api/cabinet/car/image/delete/' + image_id, {
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
                    alert("фото удалено");
                    this.getAuksion();
                }
            } catch (error) {
                console.log(error);
            }
        },
        async submitformAdd() {
            const requiredFields = {
                title: this.title,
                selectedMark: this.selectedMark,
                selectedModel: this.selectedModel,
                selectedCondition: this.selectedCondition,
                selectedType: this.selectedType,
                selectedColor: this.selectedColor,
                selectedTransmission: this.selectedTransmission,
                selectedFuil: this.selectedFuil,
                year: this.year,
                mileage: this.mileage,
                engine_capacity: this.engine_capacity,
                cylinders: this.cylinders,
                drive_types: this.drive_types,
                vin: this.vin,
                start_price: this.start_price,
            };

            let hasError = false;

            Object.keys(requiredFields).forEach((key) => {
                if (!requiredFields[key]) {
                    this.errors[key] = true;   // ✅ вместо this.$set
                    console.log(key);
                    hasError = true;
                } else {
                    delete this.errors[key];   // ✅ вместо this.$delete
                }
            });

            if (hasError) {
                alert("Заполните все обязательные поля!");
                return;
            }
            // if(this.fullname.length==0 || this.body.length==0) return;
            try {
                // eslint-disable-next-line no-unused-vars
                let token = localStorage.getItem('token');
                const finalResult = {

                    "mark_id": this.selectedMark,
                    "car_model_id": this.selectedModel,
                    "body_type_id": this.selectedType,
                    "car_condtion_id": this.selectedCondition,
                    "car_color_id": this.selectedColor,
                    "transmission_id": this.selectedTransmission,
                    "fuil_type_id": this.selectedFuil,
                    "drive_types": this.drive_types,
                    "year": this.year,
                    "mileage": this.mileage,
                    "engine_capacity": this.engine_capacity,
                    "doors": this.doors,
                    "cylinders": this.cylinders,
                    "vin": this.vin,
                    "start_price": this.start_price,
                    "buy_price": this.buy_price,
                    "body": this.body,
                    "title": this.title,
                    "time_start": this.time_start,
                    "time_end": this.time_end,
                    "functions": JSON.stringify(this.rows),
                    "salon": this.salon,
                    "engine": this.engine,
                    "carbody": this.carbody,

                }


                var data = new FormData()

                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }


                const response = await fetch(this.url + 'api/cabinet/car/edit/' + this.$route.params.id, {
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
                if (response.status == 201 || response.status == 200) {
                    alert('auksion has been updated');
                } else {
                    if (json.error) {
                        alert(json.message.ru);
                    }
                }

                // console.log(json);





            } catch (error) {
                console.error('Ошибка:', error);
            }
        },
        async getAuksion() {
            // if(this.fullname.length==0 || this.body.length==0) return;
            try {
                // eslint-disable-next-line no-unused-vars
                let token = localStorage.getItem('token');


                const response = await fetch(this.url + 'api/cabinet/car?id=' + this.$route.params.id, {
                    method: 'GET',

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
                if (json) {
                    this.title = json.title;
                    this.selectedMark = json.mark_id;
                    this.callModel();
                    this.selectedType = json.body_type_id;
                    this.selectedCondition = json.car_condtion_id;
                    this.selectedColor = json.car_color_id;
                    this.selectedTransmission = json.transmission_id;
                    this.selectedFuil = json.fuil_type_id;
                    this.drive_types = json.drive_types;
                    this.year = json.year;
                    this.mileage = json.mileage;
                    this.engine_capacity = json.engine_capacity;
                    this.doors = json.doors;
                    this.cylinders = json.cylinders;
                    this.vin = json.vin;
                    this.body = json.body;
                    this.selectedModel = json.car_model_id;
                    this.salon = json.salon;
                    this.engine = json.engine;
                    this.carbody = json.carbody;
                    this.start_price = json.start_price;
                    this.buy_price = json.buy_price;
                    this.time_start = json.auksion?.time_start;
                    this.time_end = json.auksion?.time_end;
                    this.rows.splice(0, this.rows.length);
                    this.images = json.images;
                    JSON.parse(json.functions).forEach(element => {

                        this.rows.push({ title: element.title, body: element.body });
                    });

                }


                // console.log(json);





            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    },
    created() {

        this.loadFilters();
        this.getAuksion();
    },
}
</script>
<style>
.foto__each {
    display: flex;
    flex-wrap: wrap;
}

.drop-zone {
    margin-bottom: 20px;
    margin-right: 20px;
    border: 2px dashed #ccc;
    padding: 20px;
    border-radius: 10px;
    background-color: #f9f9f9;
    position: relative;
    cursor: pointer;
    height: 200px;
    width: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.drop-zone.drag-over {
    border-color: #000;
}

.drop-zone p {
    margin: 0;
    font-size: 16px;
    color: #666;
}

.file-input {
    display: none;
}

.image-preview img {
    max-width: 200px;
    max-height: 200px;
    margin-top: 10px;
}

.loaded__fotos {
    display: flex;
}

.loaded__fotos .each {
    position: relative;
    margin-right: 15px;
}

.loaded__fotos .each img {
    max-width: 150px;
}

.loaded__fotos .each svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.loaded__fotos .each:hover img {
    opacity: 0.8;

}

.loaded__fotos .each:hover svg:hover {
    transform: scale(1.1);
}
</style>