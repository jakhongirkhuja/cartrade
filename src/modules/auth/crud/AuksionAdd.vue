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
                    <div class="col-4">
                        <label>Номер кузова *</label>
                        <input type="text" v-model="vin" :class="['form-control', errors.vin ? 'is-invalid' : '']"
                            placeholder="2D456THA798700213GT212" />
                    </div>
                    <div class="col-4">
                        <label>Номер мотора *</label>
                        <input type="text" v-model="engine_number"
                            :class="['form-control', errors.engine_number ? 'is-invalid' : '']"
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
                    <div class="col-4">
                        <div class="timing">
                            <label>Цена на 1 день *</label>
                            <input type="number" v-model="rent_price"
                                :class="['form-control', errors.rent_price ? 'is-invalid' : '']"
                                placeholder="120000000" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="timing">
                            <label>Лимит км/день *</label>
                            <input type="number" v-model="rent_limit_km"
                                :class="['form-control', errors.rent_limit_km ? 'is-invalid' : '']" placeholder="300" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="timing">
                            <label for="">Депозит</label>
                            <input type="number" v-model="rent_deposit"
                                :class="['form-control', errors.rent_deposit ? 'is-invalid' : '']"
                                placeholder="300 000" />

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="info fx-1">
                            <div v-if="technical_passport" style="margin-top: 15px;">
                                <img :src="technical_passport_preview" alt="Passport Preview"
                                    style="max-width: 200px; border-radius: 8px;" />
                            </div>
                            <input type="file" @change="uploadFilePassport" accept="image/*" id="uploadTextPassport"
                                hidden />
                            <label for="uploadTextPassport" class="btn btn-primary">Загружите
                                Технический паспорт</label><br />

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="info fx-1">
                            <div v-if="insurance" style="margin-top: 15px;">
                                <img :src="insurance_preview" alt="insurance Preview"
                                    style="max-width: 200px; border-radius: 8px;" />
                            </div>
                            <input type="file" @change="uploadFileInsurance" accept="image/*" id="uploadTextInsurance"
                                hidden />
                            <label for="uploadTextInsurance" class="btn btn-primary">Загружите
                                Страховой полис ОСАГО/КАСКО</label><br />

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <span class="text-center">Выберите файл не больше 3MB, Минимальное разрешение 300x300 px
                            в JPG или PNG
                            формате</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="btn btn-primary" @click="submitformAdd">Добавить</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useToast, POSITION } from "vue-toastification";
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
            engine_number: '',
            body: '',
            time_start: '',
            time_end: '',
            start_price: '',
            buy_price: '',
            rent_price: 200000,
            technical_passport: null,
            technical_passport_preview: null,
            insurance_preview: null,
            insurance: null,
            rent_limit_km: 300,
            rent_deposit: 250000,

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
        uploadFilePassport(event) {

            const file = event.target.files[0];

            if (!file) return;

            if (file.size > 3 * 1024 * 1024) {
                useToast().error('Файл слишком большой! Максимум 3MB');
                return;
            }

            this.technical_passport = file;
            this.technical_passport_preview = URL.createObjectURL(file);
        },
        uploadFileInsurance(event) {

            const file = event.target.files[0];

            if (!file) return;

            if (file.size > 3 * 1024 * 1024) {
                useToast().error('Файл слишком большой! Максимум 3MB');
                return;
            }

            this.insurance = file;
            this.insurance_preview = URL.createObjectURL(file);
        },
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
        handleDrop(event, index) {
            event.currentTarget.classList.remove("drag-over");
            const file = event.dataTransfer.files[0];
            if (file && file.type.startsWith("image/")) {
                this.uploads[index].imageUrl = URL.createObjectURL(file);
                this.uploads[index].image = file;
                this.uploads.push({ imageUrl: null, image: null });
            }
        },
        selectFile(index) {
            this.$refs.fileInput[index].click();
        },
        handleFileChange(event, index) {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                this.uploads[index].imageUrl = URL.createObjectURL(file);
                this.uploads[index].image = file;
                this.uploads.push({ imageUrl: null, image: null });
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
                rent_limit_km: this.rent_limit_km,
                technical_passport: this.technical_passport,
                insurance: this.insurance,
                rent_deposit: this.rent_deposit,
                year: this.year,
                mileage: this.mileage,
                engine_capacity: this.engine_capacity,
                cylinders: this.cylinders,
                drive_types: this.drive_types,
                vin: this.vin,
                engine_number: this.engine_number,
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
                useToast().error('Заполните все обязательные поля');
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
                    "engine_number": this.engine_number,
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
                    "rent_limit_km": this.rent_limit_km,
                    "rent_price": this.rent_price,
                    "rent_deposit": this.rent_deposit,
                    "type": 'rent'

                }

                var data = new FormData()

                for (const key in finalResult) {
                    data.append(key, finalResult[key]);

                }

                this.uploads.forEach((image, index) => {
                    if (image.image) data.append(`images[${index}]`, image.image);

                });
                data.append("technical_passport", this.technical_passport);
                data.append("insurance", this.insurance);
                const response = await fetch(this.url + 'api/cabinet/car', {
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
                    alert('Добавлено');

                    this.$router.push({ name: 'cabinet.main' });
                }
                console.log(response.status);
                console.log(json);
                // console.log(json);





            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    },
    created() {
        this.loadFilters();
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

.is-invalid {
    border: 2px solid red !important;
    background-color: #ffe6e6 !important;
}
</style>