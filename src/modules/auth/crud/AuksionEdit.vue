<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auksion__edit container">
            <div class="form">
                <div class="foto">
                    <div class="foto__each">
                        <div
                            v-for="(upload, index) in uploads" :key="index" class="drop-zone" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop($event, index)" @click="selectFile(index)"
                            >
                                <p v-if="!upload.imageUrl">Загрузить Фото</p>
                                <div v-if="upload.imageUrl" class="image-preview">
                                    <img :src="upload.imageUrl" alt="Image preview" />
                                </div>
                                <input type="file" ref="fileInput" class="file-input" @change="handleFileChange($event, index)" accept="image/*" />
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
            uploads: [
                { imageUrl: null }
            ],
            guest: false,
            avatar: 'https://s3-alpha-sig.figma.com/img/ab6e/a6b2/4a90e78a6adef6fdee5f81d6a60ba5c0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwL9OvlKppwGeQGkysOtbx08oxs~L7XclTew8RUhtMGNWoyYQYAFbPtFb3DeLUXj4Iow0vXcYTSCqJScuDxNBwMzZNrmgFRCGjjxcc0-EtuLNLfet66~RKiIgoEM~kq~TxyO3Ma7UjwDL1KUrPPHnbOrmhA~h7Pt4Y9qht1a10Vde4Ha65VeXcyTQQBXIWjhyqEkY9MGoI3j~HqPIFi~mBlP8frdyAH4Re6OKSh1hUXux3HPoQdBbY5bMcZJPuzJkEQl~ZnOQsA2Qk48vuMJDtj2vSdlR5gcoWA-BOquGPVvN7kYS8p6d3DcBNNAW9QPB0XO3SRwlXguj6k8zSmB4w__',
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',

        }
    },
    methods: {
        handleDragOver(event) {
        event.currentTarget.classList.add("drag-over");
        },
        handleDrop(event, index) {
        event.currentTarget.classList.remove("drag-over");
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            this.uploads[index].imageUrl = URL.createObjectURL(file);
            this.uploads.push({ imageUrl: null });
        }
        },
        selectFile(index) {
        this.$refs.fileInput[index].click();
        },
        handleFileChange(event, index) {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            this.uploads[index].imageUrl = URL.createObjectURL(file);
            this.uploads.push({ imageUrl: null });
        }
        },
    },
}
</script>
<style>
.foto__each{
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
</style>