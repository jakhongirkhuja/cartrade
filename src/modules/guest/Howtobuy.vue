<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="howto">
        <BreadVue bread="Как купить авто" />

        <div class="contacts__block p-80 container hero">
            <h2 class="heading text-center">Как купить автомобиль через наш сайт</h2>
            <p>Прозрачно. Безопасно. Удобно.</p>
        </div>
        <main class="container">
            <section class="steps">
                <div class="step">
                    <h2><span>1</span> Выберите авто на сайте</h2>
                    <p>Каждая машина проходит диагностику, проверку документов и юридическое подтверждение перед
                        публикацией.</p>
                    <ul>
                        <li>Техническая диагностика по 100+ пунктам</li>
                        <li>Юридическая проверка</li>
                        <li>Фото и видеофиксация состояния</li>
                    </ul>
                </div>

                <div class="step">
                    <h2><span>2</span> Забронируйте понравившееся авто</h2>
                    <p>Нажмите “Забронировать” или свяжитесь с менеджером. Авто закрепляется за вами на 24 часа.
                        Бронирование — бесплатное.</p>
                </div>

                <div class="step">
                    <h2><span>3</span> Осмотр и тест-драйв</h2>
                    <p>Назначим удобное время, где вы сможете осмотреть автомобиль, пройти тест-драйв и ознакомиться с
                        документами.</p>
                </div>

                <div class="step">
                    <h2><span>4</span> Внесение задатка</h2>
                    <p>Вносите задаток 2% для фиксации сделки — наличными, у нотариуса или через эскроу-счёт. Деньги
                        резервируют авто за вами.</p>
                </div>

                <div class="step">
                    <h2><span>5</span> Проверка и оформление</h2>
                    <p>Проводим углублённую юридическую проверку, затем обе стороны подписывают договор купли-продажи у
                        нотариуса.</p>
                </div>

                <div class="step">
                    <h2><span>6</span> Безопасный расчёт</h2>
                    <p>Деньги переводятся продавцу только после подтверждения сделки. Оплата через банк (эскроу) или
                        нотариуса — полностью безопасно.</p>
                </div>

                <div class="step">
                    <h2><span>7</span> Получение автомобиля</h2>
                    <p>После оформления документов вы получаете ключи и все бумаги. Авто проходит бесплатную мойку и
                        предпродажную подготовку.</p>
                </div>
            </section>

            <section class="benefits">
                <h2>Почему это безопасно для вас</h2>
                <ul>
                    <li>Все автомобили проверены по 100+ пунктам</li>
                    <li>Юридическая чистота подтверждена документально</li>
                    <li>Без скрытых комиссий и посредников</li>
                    <li>Деньги защищены банком или нотариусом</li>
                    <li>Полное сопровождение на каждом этапе</li>
                </ul>
            </section>
        </main>
    </div>
</template>
<script>
import BreadVue from "@/components/Bread.vue";
export default {
    components: {
        BreadVue,
    },
}
</script>
<style scoped>
.hero {

    text-align: center;
    padding: 4rem 1rem;
}

.hero h1 {
    font-size: 2.4rem;
    margin-bottom: 0.5rem;
}

.hero p {
    font-size: 1.1rem;
    opacity: 0.9;
}

.steps {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
}

.step {
    flex: 1 1 45%;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
}

.step:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.step h2 {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #cb0000;
}

.step h2 span {
    background: #cb0000;
    color: #fff;
    border-radius: 50%;
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-weight: bold;
    margin-right: 10px;
    font-size: 0.95rem;
}

.step p {
    margin: 0.5rem 0 0.8rem 0;
    color: #333;
}

.step ul {
    margin-top: 0.5rem;
    padding-left: 1.2rem;
    color: #444;
}

.step ul li {
    margin-bottom: 0.4rem;
}


.benefits {
    margin-top: 3rem;
    background: #fafafa;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;
}

.benefits h2 {
    color: #cb0000;
    margin-bottom: 1rem;
}

.benefits ul {
    list-style: none;
    padding: 0;
    max-width: 700px;
    margin: 0 auto;
}

.benefits li {
    background: #fff;
    margin: 0.5rem 0;
    padding: 0.9rem 1rem;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    text-align: left;
    transition: all 0.3s ease;
}

.benefits li:hover {
    border-color: #cb0000;
    box-shadow: 0 3px 8px rgba(203, 0, 0, 0.1);
}

/* ---------- FOOTER ---------- */
footer {
    text-align: center;
    padding: 1.5rem 0;
    color: #777;
    border-top: 1px solid #eee;
    margin-top: 2rem;
    font-size: 0.9rem;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 900px) {
    .step {
        flex: 1 1 100%;
    }

    .hero h1 {
        font-size: 1.8rem;
    }
}
</style>