<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auth__fixed" v-if="!guest">
            <a href="#" class="auth__fixed--items">Мои данные</a>
            <a href="#" class="auth__fixed--items">Депозит</a>
            <a href="#" class="auth__fixed--items">Мои ставки</a>
            <a href="#" class="auth__fixed--items">Изменить данные</a>
            <a href="#" class="auth__fixed--items">Политики и права</a>
            <a href="#" class="auth__fixed--items">Избранные</a>
            <a href="#" class="auth__fixed--items">Аукционы</a>
        </div>
        <div class="auth__userInfo container p-80 " :class="{'dealer' : !guest }">
            <div class="user edit">
                <div class="block row vertical_center">
                    <div class="avatar" v-bind:style="{ 'background-image': 'url(' + avatar + ')' }">
                    </div>
                    <div class="info fx-1">
                        <input type="file" id="upload" hidden/>
                        <label  for="upload" class="btn btn-primary">Выбрать файл</label>
                        <span>Выберите файл не больше 3MB, Минимальное разрешение 300x300 px в JPG или PNG формате</span>   
                    </div>
                </div>
                <div class="userform">
                    <div class="userform--each">
                        <input type="text" placeholder="Имя" class="form-control">
                        <input type="text" placeholder="Фамилия" class="form-control">
                    </div>
                    <div class="userform--each">
                        <input type="text" placeholder="Телефон" class="form-control">
                        <input type="email" placeholder="E-mail" class="form-control">
                    </div>
                </div>
                <div class="action">
                    <div class="btn btn-primary">Сохранить</div>
                </div>
                
            </div>
            <div class="user edit savepassword">
                <div class="title">Сбросить пароль</div>
                <div class="userform">
                    <div class="userform--each-input">
                        <input type="text" placeholder="Старый пароль" class="form-control">
                        <input type="text" placeholder="Новый пароль" class="form-control">
                        <input type="text" placeholder="Введите новый пароль еще раз" class="form-control">
                    </div>
                </div>
                <div class="action">
                    <div class="btn btn-primary">Сохранить</div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            guest: false,
            avatar: 'https://s3-alpha-sig.figma.com/img/ab6e/a6b2/4a90e78a6adef6fdee5f81d6a60ba5c0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwL9OvlKppwGeQGkysOtbx08oxs~L7XclTew8RUhtMGNWoyYQYAFbPtFb3DeLUXj4Iow0vXcYTSCqJScuDxNBwMzZNrmgFRCGjjxcc0-EtuLNLfet66~RKiIgoEM~kq~TxyO3Ma7UjwDL1KUrPPHnbOrmhA~h7Pt4Y9qht1a10Vde4Ha65VeXcyTQQBXIWjhyqEkY9MGoI3j~HqPIFi~mBlP8frdyAH4Re6OKSh1hUXux3HPoQdBbY5bMcZJPuzJkEQl~ZnOQsA2Qk48vuMJDtj2vSdlR5gcoWA-BOquGPVvN7kYS8p6d3DcBNNAW9QPB0XO3SRwlXguj6k8zSmB4w__',
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',

        }
    },
}
</script>