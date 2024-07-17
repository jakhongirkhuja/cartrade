<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
    <div class="aukstion">
        <div class="bread bg-gradient">
            <div class="bread__info container">
                <div class="rectangle rectangle_left"></div>
                <div class="rectangle rectangle_left"></div>
               
                <div class="filter" >
                        <div class="auksion__type">
                            <div class="auksion__type--each">Экспресс аукцион</div>
                            <div class="auksion__type--each">Долгосрочный аукцион</div>
                            <div class="auksion__type--each">Все аукционы</div>
                        </div>
                        <div class="auksion__select">
                            <div class="auksion__select--block">
                                <div class="each">
                                    <span>Марка</span>
                                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.29289 8.47273C7.68342 8.86326 8.31658 8.86326 8.70711 8.47273L15.0711 2.10877C15.4616 1.71825 15.4616 1.08508 15.0711 0.694557C14.6805 0.304033 14.0474 0.304033 13.6569 0.694557L8 6.35141L2.34315 0.694557C1.95262 0.304033 1.31946 0.304033 0.928932 0.694557C0.538408 1.08508 0.538408 1.71825 0.928932 2.10877L7.29289 8.47273ZM7 6.76562L7 7.76562L9 7.76563L9 6.76563L7 6.76562Z" fill="#676767"/>
                                    </svg>
                                    <div class="list">
                                        <div class="list__items"></div>
                                        <div class="list__items">Aurus</div>
                                        <div class="list__items">BMW</div>
                                        <div class="list__items">Audi</div>
                                        <div class="list__items">Mercedes</div>
                                        <div class="list__items">Porsche</div>
                                        <div class="list__items">Volkswagen</div>
                                    </div>
                                </div>
                                <div class="each">
                                    <span>Модель</span>
                                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.29289 8.47273C7.68342 8.86326 8.31658 8.86326 8.70711 8.47273L15.0711 2.10877C15.4616 1.71825 15.4616 1.08508 15.0711 0.694557C14.6805 0.304033 14.0474 0.304033 13.6569 0.694557L8 6.35141L2.34315 0.694557C1.95262 0.304033 1.31946 0.304033 0.928932 0.694557C0.538408 1.08508 0.538408 1.71825 0.928932 2.10877L7.29289 8.47273ZM7 6.76562L7 7.76562L9 7.76563L9 6.76563L7 6.76562Z" fill="#676767"/>
                                    </svg>
                                    <div class="list">
                                        <div class="list__items"></div>
                                        <div class="list__items">Седан</div>
                                        <div class="list__items">Купе</div>
                                        <div class="list__items">Хэтчбек</div>
                                        <div class="list__items">Лифтбек</div>
                                    </div>
                                </div>
                                <input type="text" class="each" placeholder="Год">
                                <div class="each">
                                    <span>Тип</span>
                                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.29289 8.47273C7.68342 8.86326 8.31658 8.86326 8.70711 8.47273L15.0711 2.10877C15.4616 1.71825 15.4616 1.08508 15.0711 0.694557C14.6805 0.304033 14.0474 0.304033 13.6569 0.694557L8 6.35141L2.34315 0.694557C1.95262 0.304033 1.31946 0.304033 0.928932 0.694557C0.538408 1.08508 0.538408 1.71825 0.928932 2.10877L7.29289 8.47273ZM7 6.76562L7 7.76562L9 7.76563L9 6.76563L7 6.76562Z" fill="#676767"/>
                                    </svg>
                                    <div class="list">
                                        <div class="list__items"></div>
                                        <div class="list__items">Седан</div>
                                        <div class="list__items">Купе</div>
                                        <div class="list__items">Хэтчбек</div>
                                        <div class="list__items">Лифтбек</div>
                                    </div>
                                </div>
                                <div class="each">
                                    <span>Состояние</span>
                                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.29289 8.47273C7.68342 8.86326 8.31658 8.86326 8.70711 8.47273L15.0711 2.10877C15.4616 1.71825 15.4616 1.08508 15.0711 0.694557C14.6805 0.304033 14.0474 0.304033 13.6569 0.694557L8 6.35141L2.34315 0.694557C1.95262 0.304033 1.31946 0.304033 0.928932 0.694557C0.538408 1.08508 0.538408 1.71825 0.928932 2.10877L7.29289 8.47273ZM7 6.76562L7 7.76562L9 7.76563L9 6.76563L7 6.76562Z" fill="#676767"/>
                                    </svg>
                                    <div class="list">
                                        <div class="list__items"></div>
                                        <div class="list__items">Новый</div>
                                        <div class="list__items">Хороший</div>
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
        <p class="aukstion__result container">Мы нашли  <span>{{resultCount}}</span> по вашему запросу</p>
        <div class="aukstion__block container">
            <div class="aukstion__block--items" v-for="index in 5">
                <a href="#" class="poster" v-bind:style="{ 'background-image': 'url(' + image + ')' }"></a>
                <div class="info">
                    <h2 class="info__title"><a href="#">Volvo XC90 - 2020</a></h2>
                    <div class="info__rate fx">
                        <div class="name">Салон</div>
                        <div class="rates">
                            <template  v-for="index in 6">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z" fill="#CB0000"/>
                                </svg>
                            </template>
                        </div>
                    </div>
                    <div class="info__rate fx">
                        <div class="name">Двигатель</div>
                        <div class="rates">
                            <template  v-for="index in 6">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z" fill="#CB0000"/>
                                </svg>
                            </template>
                        </div>
                    </div>
                    <div class="info__rate fx">
                        <div class="name">Кузов</div>
                        <div class="rates">
                            <template  v-for="index in 6">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L9.78687 5.54059L15.6085 5.52786L10.8912 8.93941L12.7023 14.4721L8 11.04L3.29772 14.4721L5.10879 8.93941L0.391548 5.52786L6.21313 5.54059L8 0Z" fill="#CB0000"/>
                                </svg>
                            </template>
                        </div>
                    </div>
                    <div class="info__features row">
                        <div class="items" v-for="feature in features" :key="feature">{{ feature }}</div>
                    </div>
                </div>
                <div class="actions">
                    <div class="actions__price--origin fx">
                        <div class="info">Начальная ставка:</div>
                        <div class="price">1.000.000 $</div>
                    </div>
                    <div class="actions__price--blits fx">
                        <div class="info">Блиц - цена:</div>
                        <div class="price">1.500.000 $</div>
                    </div>
                    <div class="action__price--bet">
                        <div class="btn btn-primary">Сделать ставку</div>
                    </div>
                </div>
                <div class="mobile__view">
                    <div class="charakter fx">
                        <div class="items fx">
                            <img src="/icons/trail.svg" alt="">
                            <p>77362</p>
                        </div>
                        <div class="items fx">
                            <img src="/icons/fuil.svg" alt="">
                            <p>Дизель</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="auksion__block--pagination">
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
            resultCount: 4733,
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',

        }
    },
}
</script>