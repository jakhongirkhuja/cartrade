<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
    <div class="aukstion">
        <div class="car">
            <div class="container">

                <div class="car__type">
                    <span>седан</span><span>год назад</span>
                </div>
                <h2 class="car__name">Volvo XC 90</h2>
                <div class="car__info">
                    <p>2.0h T8 11.6kWh Polestar Engineered Auto AWD (s/s) 5dr</p>
                    <p class="price">1.500.000 $</p>
                </div>
                <div class="car__block">
                    <div class="car__block--info">
                        <div class="car__poster" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
                    
                        </div>
                        <div class="car__slider" ref="carSlider" @mousedown="handleMouseDown" @mouseleave="handleMouseLeave" @mouseup="handleMouseUp" @mousemove="handleMouseMove">
                            
                            <div class="car__slider--each"  v-bind:style="{ 'background-image': 'url(' + images[0] + ')' }" v-for="n in 7"></div>
                        </div>
                        <div class="car__mobile">
                            <BetComponent></BetComponent>
                            
                        </div>
                        <div class="car__char bg__car">
                            <h4 class="title">Обзор</h4>
                            <div class="car__char--items">
                                <p>Марка</p>
                                <p>Вольво</p>
                            </div>
                            <div class="car__char--items">
                                <p>Модель</p>
                                <p>ХС 90</p>
                            </div>
                            <div class="car__char--items">
                                <p>Цвет</p>
                                <p>белый</p>
                            </div>
                            <div class="car__char--items">
                                <p>Тип вождения</p>
                                <p>4х4</p>
                            </div>
                            <div class="car__char--items">
                                <p>Передача инфекции</p>
                                <p>Автоматический</p>
                            </div>
                            <div class="car__char--items">
                                <p>Состояние</p>
                                <p>Использовал</p>
                            </div>
                            <div class="car__char--items">
                                <p>Год</p>
                                <p>2021 год</p>
                            </div>
                            <div class="car__char--items">
                                <p>Пробег</p>
                                <p>280 000</p>
                            </div>
                            <div class="car__char--items">
                                <p>Тип топлива</p>
                                <p>Дизель</p>
                            </div>
                            <div class="car__char--items">
                                <p>Размер двигателя</p>
                                <p>5,2 л</p>
                            </div>
                            <div class="car__char--items">
                                <p>Двери</p>
                                <p>5</p>
                            </div>
                            <div class="car__char--items">
                                <p>Цилиндры</p>
                                <p>10</p>
                            </div>
                            <div class="car__char--items">
                                <p>ВИН</p>
                                <p>2D456THA798700213GT21</p>
                            </div>
                        </div>
                        <div class="car__body bg__car">
                            <h4 class="title">Описание</h4>
                            <p>Совершенно новый Volvo XC60 — потрясающий компактный внедорожник класса люкс. В 2017 году он был полностью переработан и содержит улучшения по всем направлениям. Эти изменения отодвинули автомобиль от предыдущего состояния среднего пакета; теперь он принадлежит одним из лучших в своем классе. Некоторые из наиболее заметных улучшений включают в себя современную информационно-развлекательную систему, больше места для ног для водителей на задних сиденьях и бодрый выбор двигателей.</p>
                            <p>Занимая площадь более 8000 квадратных футов, расположенную на высоте более 1100 футов с потрясающим панорамным 360-градусным видом на весь Нью-Йорк и окружающую территорию трех штатов, 82-й этаж по адресу 432 Park Avenue был полностью переосмыслен одним из самых востребованных дизайнерских домов в Лондоне и представляет собой совершенно уникальную возможность владеть недвижимостью мирового значения.</p>
                            <p>Amrutha Lounge на турецком языке означает порт, однако ресторан открывает свои двери для всех аспектов средиземноморской кухни. Кухня будет в основном ориентирована на средиземноморскую кухню; Владельцы ресторана - молодые профессиональные повара, которые могут привнести в Энджел, Ислингтон новые, захватывающие вкусы, которые проявятся в качестве блюд, которые они готовят.</p>
                        </div>
                        <div class="car__func bg__car">
                            <h4 class="title">Функции</h4>
                            <div class="car__func--items">
                                <h3>Удобство</h3>
                                <ul>
                                    <li>Сиденья с подогревом</li>
                                    <li>Рулевое колесо с подогревом</li>
                                    <li>Навигационная система</li>
                                    <li>Электропривод задней двери</li>
                                </ul>
                            </div>
                            <div class="car__func--items">
                                <h3>Развлечение</h3>
                                <ul>
                                    <li>Apple CarPlay/Android Авто</li>
                                    <li>Bluetooth</li>
                                    <li>ГлавнаяСсылка</li>
                                </ul>
                            </div>
                            <div class="car__func--items">
                                <h3>Экстерьер</h3>
                                <ul>
                                    <li>Литые диски</li>
                                    <li>Люк в крыше/люк в крыше</li>
                                </ul>
                            </div>
                            <div class="car__func--items">
                                <h3>Безопасность</h3>
                                <ul>
                                    <li>Резервная камера</li>
                                    <li>Монитор слепых зон</li>
                                    <li>Система помощи при торможении</li>
                                    <li>Светодиодные фары</li>
                                    <li>Контроль стабильности</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="car__block--actions">
                        <p class="title">Завершение аукциона через:</p>
                        <BetComponent></BetComponent>
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
            resultCount: 4733,
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/ba1c/77b7/f508483313763af78e063463927acbac?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYKtLpDVn8pjL9fK4bngMlNRU4ErX~xXRUZr~DfHNgFE8BAchrFnQ4PlYQjHuA~Leffe17gvsF~Z~CaXGff9xVFT7QqTYihCklVAJw81bKKffPfKpSzLvuK8XLra-R7Fd4yG9u05FUl7ipMmUU5FQZ3Dy2ASR356v-C0v-02QnXKnDzYjBPi2-0QXNqSAjjI-7KR2UxymFG~3Z25N6vh7Db2Owj5eE91F3xpMPpxPCefsvOKkoRNKLcmdvQ9LfsK1HVsR6Kbx3j1NtPrHFGYziD6uaLKQ2uRVe3mJnuzyOPFLNRbJMhBx1263k-~GSe5Y5oIU4iC7VY5SB0I37hw8w__',
            isDown: false,
            startX: 0,
            scrollLeft: 0,
            images:['https://s3-alpha-sig.figma.com/img/91dc/8f0a/334d1aa1dca640d1260f281fb9c5a2d4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juFeEiPA8CoP36ZD5BrMo2roIkPOEOEy2v0J5tQuK4cPQRA4wLJAO2XdE4aLwxkAaBgRq1PjNAdOKQ2RkM8Ys8ExkVtQii2rpdj0yBObRDu9Ob9nk93KKJsQwcESVyp2WE~IS8Dxd8bIif9oo5Rz7dJXVeckMW97W3iHDzx8KsP6QE1l-Catp6i3-PRmJ01bZpFymvSLZK0JHf-kQ6alsZDFZP7-u1mZlLZbCfsHvGnt9igaS87E1NvDvQRiNCNF1t-WlmAVf17c81zAmNQ0PiTWQEqr89DymCAu8WzDYuttUWJmrOliGGS-OZtcUmbqrSdogPONQj3v4sNsC5j~Zg__']
        }
    },
    mounted() {
      this.adjustSlides();
      window.addEventListener('resize', this.adjustSlides);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.adjustSlides);
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
        }
    },
    
}
</script>
<style>
    .swiper-slide {
        width: 160px!important;
   
   
  }
</style>
