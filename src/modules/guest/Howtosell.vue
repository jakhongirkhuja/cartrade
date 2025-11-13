<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="contacts">
        <BreadVue bread="Как продать авто" />

        <div class="contacts__block p-80 container hero">
            <h2 class="heading text-center">Как продать автомобиль через нашу площадку</h2>
            <p>Быстро. Безопасно. Без лишних хлопот.</p>
        </div>
        <main class="container">
            <section class="steps">
                <div class="step">
                    <h2><span>1</span> Оставьте заявку</h2>
                    <p>Заполните форму на сайте, указав информацию об автомобиле, или свяжитесь с нами через Telegram
                        или по телефону. Наш менеджер уточнит детали и согласует встречу.</p>
                </div>

                <div class="step">
                    <h2><span>2</span> Мы выезжаем к вам</h2>
                    <p>Наш специалист приезжает в удобное время, проводит диагностику по 100+ пунктам, оценивает
                        состояние автомобиля и определяет рыночную стоимость. Всё фиксируется официально, с печатью и
                        подписью.</p>
                </div>

                <div class="step">
                    <h2><span>3</span> Подписание договора</h2>
                    <p>После согласования цены подписываем договор о сотрудничестве. Мы делаем фото авто, проверку
                        документов и публикуем объявление на сайте и в соцсетях. Комиссия 7% оплачивается только при
                        продаже.</p>
                </div>

                <div class="step">
                    <h2><span>4</span> Просмотр и покупатель</h2>
                    <p>Когда появляется покупатель, мы организуем просмотр и тест-драйв. Продавец привозит автомобиль на
                        нашу охраняемую площадку на несколько часов. Все детали прописаны в предварительном договоре.
                    </p>
                </div>

                <div class="step">
                    <h2><span>5</span> Оформление сделки</h2>
                    <p>Покупатель вносит задаток 2%. Мы проводим углублённую юридическую проверку, помогаем собрать
                        документы, а автомобиль временно остаётся у нас до завершения оформления.</p>
                </div>

                <div class="step">
                    <h2><span>6</span> Оформление продажи</h2>
                    <p>После проверки назначаем встречу у нотариуса (или в офисе). Оплата происходит безопасно — через
                        банк (эскроу-счёт) или у нотариуса. Если сделка отменяется, деньги возвращаются покупателю.</p>
                </div>

                <div class="step">
                    <h2><span>7</span> Получение денег</h2>
                    <p>После подписания договора продавец получает полную сумму за автомобиль, а также оплачивает
                        комиссию 7% по договору. Перед передачей авто проводится бесплатная мойка.</p>
                </div>
            </section>

            <section class="benefits">
                <h2>Почему продавать через нас выгодно</h2>
                <ul>
                    <li>Быстрая диагностика и оценка по 100+ пунктам</li>
                    <li>Юридическая проверка и оформление сделки под ключ</li>
                    <li>Безопасная оплата — через банк или нотариуса</li>
                    <li>Публикация на сайте и в соцсетях</li>
                    <li>Комиссия 7% только после успешной продажи</li>
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