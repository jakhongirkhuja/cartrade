<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auth__userInfo container p-80">
            <div class="user row">
                <div class="avatar" v-bind:style="{ 'background-image': 'url(' + avatar + ')' }">
                </div>
                <div class="info fx-1">
                    <div class="name">Абдуллаев Тимур</div>
                    <div class="body ">
                        <div class="phoneNumber form-control">+998 90 715 65 33</div>
                        <div class="email form-control">abcde@gmail.com</div>
                    </div>
                </div>
            </div>
            <div class="user__ads">
                <div class="title"><span>Мои объявления</span> <span class="btn btn-primary">Добавить</span> </div>
                <div class="user__ads__block">
                    <div class="aukstion__block container">
            <div class="aukstion__block--items" v-for="index in 5">
                <a href="#" class="poster" v-bind:style="{ 'background-image': 'url(' + image + ')' }"></a>
                <div class="info">
                    <h2 class="info__title"><a href="#">Volvo XC90 - 2020</a></h2>
                    
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
                        <router-link :to="{ name: 'main.auksion.inside', params: { id: '1' } }" class="btn btn-primary">Посмотреть в каталоге</router-link>
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            avatar: 'https://s3-alpha-sig.figma.com/img/ab6e/a6b2/4a90e78a6adef6fdee5f81d6a60ba5c0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwL9OvlKppwGeQGkysOtbx08oxs~L7XclTew8RUhtMGNWoyYQYAFbPtFb3DeLUXj4Iow0vXcYTSCqJScuDxNBwMzZNrmgFRCGjjxcc0-EtuLNLfet66~RKiIgoEM~kq~TxyO3Ma7UjwDL1KUrPPHnbOrmhA~h7Pt4Y9qht1a10Vde4Ha65VeXcyTQQBXIWjhyqEkY9MGoI3j~HqPIFi~mBlP8frdyAH4Re6OKSh1hUXux3HPoQdBbY5bMcZJPuzJkEQl~ZnOQsA2Qk48vuMJDtj2vSdlR5gcoWA-BOquGPVvN7kYS8p6d3DcBNNAW9QPB0XO3SRwlXguj6k8zSmB4w__',
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',

        }
    },
}
</script>