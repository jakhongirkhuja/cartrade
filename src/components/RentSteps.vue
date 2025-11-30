<template>
    <div class="steps">
        <div v-for="(step, stepIndex) in steps" :key="step.id" class="step"
            :class="{ active: step.id === currentStep }">
            <div class="step__line"></div>

            <div class="step__content">
                <h4>{{ step.title }}</h4>
                <p>{{ step.text }}</p>

                <template v-if="!step.save">
                    <template
                        v-if="user?.role == 'admin' || user?.role == 'rent' || (user?.role == 'client' && (step.id == 6 || step.id == 5))">

                        <div v-if="step.input && step.inputActive && step.type != 'file'" class="step__input">
                            <input :type="step.type" :multiple="step.multiple" v-model="form[step.model]"
                                :placeholder="step.placeholder" />
                        </div>


                        <div class="step__actions" v-if="step.input && step.inputActive && step.type2 == 'file'">
                            <div v-if="uploadedFiles[step.id]?.length" class="preview">
                                <div v-for="(file, index) in uploadedFiles[step.id]" :key="index" class="preview-item">
                                    <img v-if="previews[step.id][index]" :src="previews[step.id][index]"
                                        class="preview-img" alt="preview" />
                                    <span>{{ file.name }}</span>
                                    <button @click="removeFile(step.id, index)">Удалять</button>
                                </div>
                            </div>

                            <div class="dropzone" @dragover.prevent="dragOver = true"
                                @dragleave.prevent="dragOver = false"
                                @drop.prevent="handleDrop($event, step.model2, step.id)"
                                @click="triggerFileInput(step)">
                                <p v-if="!uploadedFiles[step.id]?.length">{{ step.placeholder2 }}</p>
                                <p v-else>{{ uploadedFiles[step.id].length }} выбранные файлы</p>

                                <input type="file" :ref="el => stepInputs[step.id] = el" :multiple="step.multiple"
                                    @change="(e) => handleFiles(e, step.model2, step.id)" style="display:none;" />
                            </div>
                        </div>

                        <div class="step__actions" v-if="step.buttons">
                            <button v-for="btn in step.buttons" :key="btn.label" :class="btn.class"
                                @click="btn.onClick">
                                {{ btn.label }}
                            </button>
                        </div>
                    </template>

                    <template v-else>

                        <b>В ожидании!!!</b>
                    </template>
                </template>
                <template v-else>
                    <div class="text" v-if="step.text2">
                        <p><b>{{ step.text2 }}</b></p>
                    </div>
                    <div class="comment" v-if="step.comment">
                        <p><b>{{ step.comment }}</b></p>
                    </div>
                    <div class="images-grid" v-if="step.images">
                        <div class="image-box" v-for="img in JSON.parse(step.images)" :key="img"
                            @click="openPreview(stepIndex, img, step)">
                            <img :src="imageShow(img, step)" alt="" />
                        </div>
                    </div>
                    <div class="text-primary">✔️ Принят</div>

                </template>
            </div>

        </div>
        <div v-if="previewImages" class="modal-backdrop" @click="closePreview(stepIndex)">
            <div class="modal-content" @click.stop>
                <img :src="previewImages" class="modal-img" />
                <button class="close-btn" @click="closePreview(stepIndex)">×</button>
            </div>
        </div>
        <template v-if="user">
            <div>
                <!-- Hidden template, used for DOCX generation -->
                <div id="agreement-template" style="display:none; padding:20px; font-size:16px; line-height:1.3">
                    <p>ДОГОВОР АРЕНДЫ ТРАНСПОРТНОГО СРЕДСТВА</p>

                    <p>
                        Гражданин Узбекистана
                        <b>{{ user.name }}</b>,
                        {{ user.passport.passport_given }} года рождения,
                        паспорт: {{ user.passport.passport_number }},
                        адрес: {{ user.familyName }},
                        («Арендодатель»)
                    </p>


                </div>

                <!-- Optional download button if needed -->
                <button @click="downloadDocx">Скачать договор</button>
            </div>
        </template>

    </div>
</template>

<script setup>
import { ref, watch, reactive } from 'vue';
import { useRoute } from 'vue-router';

import { saveAs } from "file-saver";
let htmlDocx;
if (typeof window !== "undefined") {
    htmlDocx = require("html-docx-js/dist/html-docx.js");
}
const { user, history } = defineProps({
    history: Array,
    user: Object
});
const latestStep = ref(1);
const currentStep = ref(latestStep + 1);
const url = ref(import.meta.env.VITE_APP_REST_ENDPOINT);
const fileInput = ref(null);
const uploadedFiles = ref({});
const dragOver = ref(false);
const previews = ref({});
const errors = ref({});
const MAX_SIZE = 512 * 1024;
watch(
    () => history,
    (newHistory) => {
        if (!newHistory || !newHistory.length) return;

        let maxStep = 1;
        newHistory.forEach(element => {
            if (element.step > maxStep) maxStep = element.step;
            const step = steps?.value.find(s => s.id === element.step);
            step.save = element.save;
            step.images = element.images;
            step.comment = element.comment;
            step.text2 = element.text;

        });
        latestStep.value = maxStep;
        currentStep.value = maxStep + 1;
        const step2 = steps?.value.find(s => s.id == 5);
        if (step2 && user?.role == 'client') {
            step2.buttons.push({ label: "Далее", class: "btn-action", onClick: () => stepsSubmit(5, true) });
        }
        else {
            step2.buttons.push({ label: "Обновить", class: "btn-action", onClick: () => next });
        }
        const step3 = steps?.value.find(s => s.id == 6);
        if (step3 && user?.role == 'client') {


            step3.text = "При осмотре автомобиля сверяйте его с фотографиями на предмет соответствия";
            step3.buttons.push({ label: "Далее", class: "btn-action", onClick: () => stepsSubmit(6, true) });
        }
        else {
            step3.buttons.push({ label: "Обновить", class: "btn-action", onClick: () => next });
        }
    },
    { immediate: true } // Run immediately if history already has value
);
function initStep(stepId) {
    if (!uploadedFiles.value[stepId]) uploadedFiles.value[stepId] = [];
    if (!previews.value[stepId]) previews.value[stepId] = [];
    if (!errors.value[stepId]) errors.value[stepId] = [];
}
const previewImages = ref(null);
const imageShow = (img, step) => {
    if (step.id == 5) {
        return url.value + '/files/documents/' + img;
    } else if (step.id == 9) {
        return url.value + '/files/completed/' + img;
    } else {
        return url.value + '/files/body/' + img;
    }

}
const openPreview = (stepIndex, img, step) => {
    if (step.id == 5) {
        previewImages.value = url.value + '/files/documents/' + img;
    } else if (step.id == 9) {
        previewImages.value = url.value + '/files/completed/' + img;
    } else {
        previewImages.value = url.value + '/files/body/' + img;
    }


};

const closePreview = (stepIndex) => {
    previewImages.value = null;
};

const next = () => currentStep.value++;
// const prev = () => currentStep.value--;
const finish = () => alert("Аренда завершена");

const route = useRoute();

const form = ref({
    mileage: "",
    defect: "",
    resonwhy: "",
    distance: 0,
    clientImages: [],
    carImages: [],
    carDistance: [],
    carDefect: []
});
const steps = ref([]);
steps.value = [
    {
        id: 1,
        title: "Этап 1 — Принять заказ",
        text: "Хотите принять заказ?",
        status: false,
        input: true,
        model: "resonwhy",
        placeholder: "Напишите причину отказа...",
        type: 'text',
        inputActive: false,
        buttons: [
            { label: "Да", class: "btn-yes", onClick: () => stepsSubmit(1, true) },
            { label: "Нет", class: "btn-no", onClick: () => stepsSubmit(1, false) },
        ]
    },
    {
        id: 2,
        title: "Этап 2 — Передача авто",
        text: "После принятия нажмите кнопку 'Передать авто'.",
        status: false,
        inputActive: false,
        buttons: [
            { label: "Передать авто", class: "btn-action", onClick: () => stepsSubmit(2, true) }
        ]
    },
    {
        id: 3,
        title: "Этап 3 — Фото автомобиля",
        text: "Загрузите фото кузова, салона, багажника и моторного отсека.",
        status: false,
        model: "carImages",
        type: 'file',
        type2: 'file',
        placeholder: "",
        placeholder2: "Перетащите файлы сюда или нажмите, чтобы загрузить",
        model2: "carImages",
        input: true,
        inputActive: true,
        multiple: true,
        function: () => handleFiles('carImages', 3),
        buttons: [

            { label: "Далее", class: "btn-action", onClick: () => stepsSubmit(3, true) }
        ]
    },
    {
        id: 4,
        title: "Этап 4 — Пробег",
        text: "Заполните текущий пробег и нажмите далее.",
        input: true,
        model: "distance",
        placeholder: "Введите пробег...",
        type: 'number',
        status: false,
        type2: 'file',
        model2: "carDistance",
        placeholder2: "Загрузить фото одометра",
        input: true,
        inputActive: true,
        multiple: false,
        function: () => handleFiles('carDistance', 4),
        buttons: [

            { label: "Далее", class: "btn-action", onClick: () => stepsSubmit(4, true) }
        ]
    },
    {
        id: 5,
        title: "Этап 5 — Загрузка документов клиента",
        text: "Ожидаем Загрузка документов",
        status: false,
        model: "clientImages",
        type: 'file',
        type2: 'file',
        placeholder: "",
        placeholder2: "Перетащите файлы сюда или нажмите, чтобы загрузить",
        model2: "clientImages",
        input: true,
        inputActive: true,
        multiple: true,
        function: () => handleFiles('clientImages', 3),
        buttons: []
    },
    {
        id: 6,
        title: "Этап 6 — Подтверждение клиента",
        text: "Ожидаем подтверждение клиента.",
        status: false,
        inputActive: false,
        buttons: []
    },
    {
        id: 7,
        title: "Этап 7 — Распечатайте договор",
        status: false,
        inputActive: false,
        text: "Распечатайте договор. В случае, если договор не подписан, арендатор не будет обязан возмещать ущерб за дефекты или ДТП, произошедшие после окончания аренды",
        buttons: [
            { label: "Скачать договор", class: "btn-ok", onClick: next },
            { label: "Далее", class: "btn-action", onClick: () => stepsSubmit(7, true) }

        ]
    },
    {
        id: 8,
        title: "Этап 8 — Машина передана",
        text: "Нажмите кнопку после передачи.",
        status: false,
        inputActive: false,
        buttons: [
            { label: "Машина передана", class: "btn-ok", onClick: () => stepsSubmit(8, true) }
        ]
    },
    {
        id: 9,
        title: "Этап 9 — Завершить заказ",
        text: "Проверили авто? Есть ли дефекты?",
        inputActive: false,
        status: false,
        multiple: true,
        buttons: [
            { label: "Есть дефекты", class: "btn-danger", onClick: () => stepsSubmit(9, false) },
            { label: "Все хорошо", class: "btn-ok", onClick: () => stepsSubmit(9, true) }
        ]
    },

];
const stepInputs = reactive({});
function triggerFileInput(step) {

    const input = stepInputs[step.id];
    if (input) input.click();  // must be synchronous
}

function uploadPhotos() {
    fileInput.value.click();
}
const downloadDocx = () => {
    const element = document.getElementById("agreement-template");

    if (!element) return;

    const blob = htmlDocx.asBlob(element.innerHTML);
    saveAs(blob, "agreement.docx");
};
// Handle manual file selection
function handleFiles(event, stepModel, stepId) {

    initStep(stepId);


    const files = Array.from(event.target.files);

    files.forEach(file => {
        uploadedFiles.value[stepId].push(file);

        form.value[stepModel].push(file);

        if (file.type.startsWith('image/')) {

            previews.value[stepId].push(URL.createObjectURL(file));
        } else {
            previews.value[stepId].push(null);
        }
    });
}

// Handle files dropped in drag area
function handleDrop(event, stepModel, stepId) {
    const files = Array.from(event.dataTransfer.files);
    processFiles(files, stepModel, stepId);
}

// Process files with validation
function processFiles(files, stepModel, stepId) {

    initStep(stepId);

    files.forEach(file => {

        if (file.size > MAX_SIZE) {
            errors.value[stepId].push(`${file.name} слишком большой`);
            return;
        }

        uploadedFiles.value[stepId].push(file);
        form.value[stepModel].push(file);
        if (file.type.startsWith('image/')) {
            previews.value[stepId].push(URL.createObjectURL(file));
        } else {
            previews.value[stepId].push(null);
        }
    });
}

function removeFile(stepId, index) {
    form.value[model].splice(index, 1);
    uploadedFiles.value[stepId].splice(index, 1);
    previews.value[stepId].splice(index, 1);
}
async function stepsSubmit(key, status) {
    var data = new FormData();

    const step1 = steps?.value.find(s => s.id === 1);
    if (key == 1 && !step1.inputActive && !status) {

        step1.inputActive = true;
        step1.buttons = [
            { label: "Отправить", class: "btn-no", onClick: () => stepsSubmit(1, false) }
        ];
        return;

    }
    const step9 = steps?.value.find(s => s.id === 9);
    if (key == 9 && !step9.inputActive && !status) {
        step9.inputActive = true;
        step9.input = true;
        step9.model = 'defect';
        step9.placeholder = 'Комментарий по дефекту...';
        step9.type = 'text';
        step9.type2 = 'file';
        step9.model2 = 'carDefect';
        step9.placeholder2 = 'Загрузить фото дефекта';
        step9.status = true;
        step9.function = () => handleFiles('carDefect', 9);
        step9.buttons = [
            { label: "Передача в модерацию", class: "btn-action", onClick: () => stepsSubmit(9, false) }
        ];
        return;
    }
    if (key == 1 && !status) {
        data.append('comment', form.value.resonwhy);
    }
    if (key == 3 && status) {
        form.value.carImages.forEach(file => {

            data.append('images[]', file);
        });

    }
    if (key == 4 && status) {
        data.append('text', form.value.distance);
        form.value.carDistance.forEach(file => {

            data.append('images[]', file);
        });
    }
    if (key == 5 && status) {
        form.value.clientImages.forEach(file => {

            data.append('images[]', file);
        });

    }

    if (key == 9 && !status) {
        data.append('comment', form.value.defect);
        form.value.carDefect.forEach(file => {
            data.append('images[]', file);
        });

    }

    const finalResult = {
        "step": key,
        "booking_id": route.params.id,
        "accept": status ? 1 : 0,
    }
    for (const key in finalResult) {
        data.append(key, finalResult[key]);

    }
    const response = await fetch(url.value + 'api/cabinet/car/bookings/steps', {
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

        if (key <= 9) {
            window.location.reload();
        } else {
            next();
        }

    } else {
        alert(json.message);

    }
}
</script>

<style>
.steps {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 18px;
    position: relative;
}

.step {
    position: relative;
    background: #fff;
    border-radius: 12px;
    padding: 16px 18px;
    border: 1px solid #e6e6e6;
    transition: 0.3s;
}

.step.active {
    border-color: #2563eb;
    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
}

.step__line {
    position: absolute;
    left: -16px;
    top: 0;
    width: 4px;
    height: 100%;
    background: #e5e7eb;
    border-radius: 4px;
}

.step.active .step__line {
    background: #2563eb;
}

.step__content h4 {
    margin: 0 0 8px;
    font-size: 20px;
    color: #222;
    font-weight: 600;
}

.step__content p {
    margin: 6px 0 12px;
    color: #555;
}

.step__actions button {
    margin-right: 8px;
}

button {
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
}

.btn-yes {
    background: #16a34a;
    color: white;
}

.btn-no {
    background: #dc2626;
    color: white;
}

.btn-action {
    background: #2563eb;
    color: white;
}

.btn-upload {
    background: #6b7280;
    color: white;
}

.btn-ok {
    background: #22c55e;
    color: white;
}

.btn-danger {
    background: #ef4444;
    color: white;
}

.step__input input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 16px;
    margin: 10px 0 14px;
    outline: none;
    transition: 0.2s;
}

.step__input input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 4px rgba(37, 99, 235, 0.3);
}
</style>
