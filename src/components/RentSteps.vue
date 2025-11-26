<template>
    <div class="steps">{{ props.history?.length }}
        <div v-for="step in steps" :key="step.id" class="step" :class="{ active: step.id === currentStep }">
            <div class="step__line"></div>

            <div class="step__content">
                <h4>{{ step.title }}</h4>
                <p>{{ step.text }}</p>

                <!-- Input mileage -->
                <div v-if="step.input && step.inputActive" class="step__input">
                    <input :type="step.type" v-model="form[step.model]" :placeholder="step.placeholder" />
                </div>

                <div class="step__actions" v-if="step.buttons">
                    <button v-for="btn in step.buttons" :key="btn.label" :class="btn.class" @click="btn.onClick">
                        {{ btn.label }}
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const currentStep = ref(1);

const next = () => currentStep.value++;
// const prev = () => currentStep.value--;
const finish = () => alert("Аренда завершена");
const uploadPhotos = () => alert("Загрузка фото…");
const props = defineProps({
    history: Array
});
const route = useRoute();

const form = ref({
    mileage: "",
    defect: "",
    resonwhy: "",
});
const url = ref(import.meta.env.VITE_APP_REST_ENDPOINT);
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
            { label: "Да", class: "btn-yes", onClick: next },
            { label: "Нет", class: "btn-no", onClick: () => stepOneFalse(1) },
        ]
    },
    {
        id: 2,
        title: "Этап 2 — Передача авто",
        text: "После принятия нажмите кнопку 'Передать авто'.",
        status: false,
        inputActive: false,
        buttons: [
            { label: "Передать авто", class: "btn-action", onClick: next }
        ]
    },
    {
        id: 3,
        title: "Этап 3 — Фото автомобиля",
        text: "Загрузите фото кузова, салона, багажника и моторного отсека.",
        status: false,
        inputActive: false,
        buttons: [
            { label: "Загрузить фото", class: "btn-upload", onClick: uploadPhotos },
            { label: "Далее", class: "btn-action", onClick: next }
        ]
    },
    {
        id: 4,
        title: "Этап 4 — Пробег",
        text: "Заполните текущий пробег и нажмите далее.",
        input: true,
        model: "mileage",
        placeholder: "Введите пробег...",
        type: 'number',
        status: false,
        inputActive: true,
        buttons: [
            { label: "Загрузить фото одометра", class: "btn-upload", onClick: uploadPhotos },
            { label: "Далее", class: "btn-action", onClick: next }
        ]
    },
    {
        id: 5,
        title: "Этап 5 — Загрузка документов клиента",
        text: "Ожидаем Загрузка документов",
        status: false,
        inputActive: false,
        buttons: [
            { label: "Обновить", class: "btn-action", onClick: next }
        ]
    },
    {
        id: 6,
        title: "Этап 6 — Подтверждение клиента",
        text: "Ожидаем подтверждение клиента.",
        status: false,
        inputActive: false,
        buttons: [
            { label: "Обновить", class: "btn-action", onClick: next }
        ]
    },
    {
        id: 7,
        title: "Этап 7 — Распечатайте договор",
        status: false,
        inputActive: false,
        text: "Распечатайте договор. В случае, если договор не подписан, арендатор не будет обязан возмещать ущерб за дефекты или ДТП, произошедшие после окончания аренды",
        buttons: [
            { label: "Скачать договор", class: "btn-ok", onClick: next },
            { label: "Далее", class: "btn-action", onClick: next }
        ]
    },
    {
        id: 8,
        title: "Этап 8 — Машина передана",
        text: "Нажмите кнопку после передачи.",
        status: false,
        inputActive: false,
        buttons: [
            { label: "Машина передана", class: "btn-ok", onClick: next }
        ]
    },
    {
        id: 9,
        title: "Этап 9 — Завершить заказ",
        text: "Проверили авто? Есть ли дефекты?",
        status: false,
        inputActive: false,
        buttons: [
            { label: "Есть дефекты", class: "btn-danger", onClick: next },
            { label: "Все хорошо", class: "btn-ok", onClick: finish }
        ]
    },
    {
        id: 10,
        title: "Этап 10 — Фото дефектов",
        text: "Загрузите фото и оставьте комментарий.",
        input: true,
        model: "defect",
        placeholder: "Комментарий по дефекту...",
        type: 'text',
        status: false,
        inputActive: true,
        buttons: [
            { label: "Загрузить фото", class: "btn-upload", onClick: uploadPhotos },
            { label: "Передача модератора", class: "btn-action", onClick: next }
        ]
    }
];

async function stepOneFalse(key) {
    const step1 = steps.value.find(s => s.id === 1);
    if (key == 1 && !step1.inputActive) {
        step1.inputActive = true;
        step1.buttons = [
            { label: "Отправить", class: "btn-no", onClick: () => stepOneFalse(1) }
        ];
        return;
    }
    const finalResult = {
        "step": 1,
        "booking_id": route.params.id,
        "accept": 0,
        "comment": form.value.resonwhy

    }
    var data = new FormData()

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
        alert('updated status');
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
