<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="auth">
        <div class="auksion__edit container">
            <div class="form">
                <div class="row">
                    <div class="col-12">
                        <label for="title">
                            Название
                            <input type="text" id="title" v-model="title" placeholder="2.0h T8 11.6kWh Polestar Engineered Auto AWD (s/s) 5dr" class="form-control">
                            <small>Введите не менее 16 символов</small>
                        </label>
                    </div>
                </div>
                <div class="foto">
                    <h4>Фото</h4>
                    <small>Первое фото будет на обложке объявления</small>
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
                <hr>
                <div class="row">
                    <div class="col-4">
                        <label for="mark">
                            Марка
                            <select class="form-control" name="" @change="callModel" v-model="selectedMark" id="">
                                <option class="list__items" v-for="mark in marks" :key="mark.id" :value="mark.id">{{mark.name}}</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Модел
                            <select class="form-control" name="" :class="models.length==0? 'disabled' : ''" v-model="selectedModel" id="">
                                <option class="list__items" v-for="model in models" :key="model.id" :value="model.id">{{model.name}}</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Тип
                            <select class="form-control" name="" v-model="selectedType" id="">
                                <option class="list__items"  v-for="type in types" :key="type.id"  :value="JSON.parse(type.id)">{{JSON.parse(type.name)[0]}}</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label for="mark">
                            Состояние
                            <select class="form-control" name="" v-model="selectedCondition" id="">
                                <option class="list__items" v-for="condition in conditions" :key="condition.id" :value="JSON.parse(condition.id)">{{JSON.parse(condition.name)[0]}}</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Цвет
                            <select class="form-control" name="" v-model="selectedColor" id="">
                                <option class="list__items" v-for="color in colors" :key="color.id" :value="JSON.parse(color.id)">{{JSON.parse(color.name)[0]}}</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Коробка передач
                            <select class="form-control" name="" v-model="selectedTransmission" id="">
                                <option class="list__items"  v-for="transmission in transmissions" :key="transmission.id"  :value="JSON.parse(transmission.id)">{{JSON.parse(transmission.name)[0]}}</option>
                            </select>
                        </label>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-4">
                        <label for="mark">
                            Вид топлива
                            <select class="form-control" name="" v-model="selectedFuil" id="">
                                <option class="list__items" v-for="fuil in fuils" :key="fuil.id" :value="JSON.parse(fuil.id)">{{JSON.parse(fuil.name)[0]}}</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Тип вождения
                            <input type="text" id="type" v-model="drive_types" placeholder="2WD" class="form-control">
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Год
                            <input type="text" id="year" v-model="year" placeholder="2023" class="form-control">
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label for="mark">
                            Пробег
                            <input type="text" id="mel"  v-model="mileage" placeholder="14000" class="form-control">
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Размер двигателя (литр)
                            <input type="text" id="engine"  v-model="engine_capacity" placeholder="1.5" class="form-control">
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Двери
                            <input type="text" id="doors" v-model="doors" placeholder="2023" class="form-control">
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label for="mark">
                            Цилиндры
                            <input type="text" id="silindr"  v-model="cylinders" placeholder="10" class="form-control">
                        </label>
                    </div>
                    <div class="col-8">
                        <label for="mark">
                            VIN 
                            <input type="text" id="vin"  v-model="vin"  placeholder="2D456THA798700213GT212" class="form-control">
                        </label>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="textBody">
                        <label for="textBody">
                            Описание
                            <textarea  id="textBody"  style="height: auto;" rows="8" v-model="body" placeholder="Описание"  class="form-control"></textarea>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="w-100">
                        <h4 class="l-10">Функции</h4>
                        <div class="function_body">
                            <div v-for="(row, index) in rows" :key="index" class="row mb-2">
                            <div class="col-6">
                                <input type="text" v-model="row.title" @input="checkAndAddRow(index)" class="form-control" placeholder="Удобство">
                            </div>
                            <div class="col-6">
                                <input type="text" v-model="row.body" @input="checkAndAddRow(index)" class="form-control" placeholder="Сиденья с подогревом,Навигационная система,Электропривод задней двери">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label for="mark">
                            Салон (оценка от 1 до 5)
                            <select class="form-control" name="" v-model="salon" id="">
                                <option class="list__items" v-for="n in 5" :key="n" :value="n">{{n}}</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Двигатель (оценка от 1 до 5)
                            <select class="form-control" name="" v-model="engine" id="">
                                <option class="list__items" v-for="n in 5" :key="n" :value="n">{{n}}</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-4">
                        <label for="mark">
                            Кузов (оценка от 1 до 5)
                            <select class="form-control" name="" v-model="carbody" id="">
                                <option class="list__items" v-for="n in 5" :key="n" :value="n">{{n}}</option>
                            </select>
                        </label>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="timing">
                        <label for="mark">
                            Время старта
                            <input type="datetime-local" id="starttime"  v-model="time_start"  class="form-control">
                        </label>
                    </div>
                    <div class="timing">
                        <label for="mark">
                            Время окончания
                            <input type="datetime-local" id="endtime"  v-model="time_end"  class="form-control">
                        </label>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="timing">
                        <label for="mark">
                            Стартовая цена
                            <input type="number" id="startprice"  v-model="start_price" placeholder="120 000 000"  class="form-control">
                        </label>
                    </div>
                    <div class="timing">
                        <label for="mark">
                            Цена покупки
                            <input type="number" id="buyprize"  v-model="buy_price" placeholder="180 000 000"  class="form-control">
                        </label>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="btn btn-primary" @click="submitformAdd">Добавить</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT, 
            uploads: [
                { imageUrl: null, image:null }
            ],
            marks:[],
            models:[],
            selectedMark: null,
            selectedModel: null,
            selectedCondition: null,
            selectedType: null,
            selectedColor:null,
            selectedTransmission:null,
            selectedFuil:null,
            conditions:[],
            types:[],
            colors:[],
            transmissions:[],
            fuils:[],
            guest: false,

            rows: [
                    { title: '', body: '' }
            ],
            title:'',
            year:'',
            mileage:'',
            engine_capacity:'',
            doors: 5,
            cylinders:'',
            drive_types:'',
            vin:'',
            body:'',
            time_start:'',
            time_end:'',
            start_price:'',
            buy_price:'',
            salon: 5,
            engine: 5,
            carbody: 5,
            
            avatar: 'https://s3-alpha-sig.figma.com/img/ab6e/a6b2/4a90e78a6adef6fdee5f81d6a60ba5c0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwL9OvlKppwGeQGkysOtbx08oxs~L7XclTew8RUhtMGNWoyYQYAFbPtFb3DeLUXj4Iow0vXcYTSCqJScuDxNBwMzZNrmgFRCGjjxcc0-EtuLNLfet66~RKiIgoEM~kq~TxyO3Ma7UjwDL1KUrPPHnbOrmhA~h7Pt4Y9qht1a10Vde4Ha65VeXcyTQQBXIWjhyqEkY9MGoI3j~HqPIFi~mBlP8frdyAH4Re6OKSh1hUXux3HPoQdBbY5bMcZJPuzJkEQl~ZnOQsA2Qk48vuMJDtj2vSdlR5gcoWA-BOquGPVvN7kYS8p6d3DcBNNAW9QPB0XO3SRwlXguj6k8zSmB4w__',
            features:['Бензин','Автомат','77329','Седан','Новый','2006 г.','бежевый металлик','Полный привод'],
            image: 'https://s3-alpha-sig.figma.com/img/7779/2e6a/3cdfa39a42910327da49edfc1e447a21?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmzJCiaVFkC0fRuAi6f2~OYgxS9E8OCZ0cGFrW3W1XLV~F1WrLddUub2n0FFTisAwUjzp9CUXu5wO2HTlC~lrNzQB6ygTeqfw2HiR1xqpYxhzIqMIezx~Jz6F7lWYqNqioHxIb~vyCGPDVkXSuTk8BtuTf1GwS5s~kYsSbxA31yi~HpCuSWtPBZUUoe3bqnAbkqCYCU3JDY3Qq4R4qxXrVFEXbTTiTwwEv6dRHSYt0a~1FWsJ5yoa3mC4S4lrL2Rymqqak2M5FoGvYhWEDKDGYVSnTZsfFPX5stA~~EZLL6frmiPu9zWxmCMPEyaue7L3pdk14A07~6Fm5yvUo3JvQ__',

        }
    },
    methods: {
        async loadFilters(){
            try {
              let token = localStorage.getItem('token');
              const response = await fetch(this.url+'api/filters', {
              method: 'GET',
              headers: {
               "Content-Type" : "application/json",
                "accept" : "application/json",
                'Authorization': 'Bearer '+token, 
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
        async callModel(){
           
            if(this.selectedMark==0) return ;
            try {
                let token = localStorage.getItem('token');
                const response = await fetch(this.url+'api/loadModel/'+this.selectedMark, {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "accept" : "application/json",
                    'Authorization': 'Bearer '+token, 
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
                this.uploads[index].image =file;
                this.uploads.push({ imageUrl: null, image:null });
            }
        },
        selectFile(index) {
            this.$refs.fileInput[index].click();
        },
        handleFileChange(event, index) {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                this.uploads[index].imageUrl = URL.createObjectURL(file);
                this.uploads[index].image =file;
                this.uploads.push({ imageUrl: null, image:null });
            }
        },
        async submitformAdd(){
            // if(this.fullname.length==0 || this.body.length==0) return;
                    try {
                        // eslint-disable-next-line no-unused-vars
                        let token = localStorage.getItem('token');
                        const finalResult = {
                            
                            "mark_id": this.selectedMark,
                            "car_model_id": this.selectedModel,
                            "body_type_id": this.selectedType,
                            "car_condtion_id": this.selectedCondition,
                            "car_color_id" : this.selectedColor,
                            "transmission_id": this.selectedTransmission,
                            "fuil_type_id": this.selectedFuil,
                            "drive_types": this.drive_types,
                            "year": this.year,
                            "mileage":this.mileage,
                            "engine_capacity": this.engine_capacity,
                            "doors": this.doors,
                            "cylinders": this.cylinders,
                            "vin": this.vin,
                            "start_price": this.start_price,
                            "buy_price" : this.buy_price,
                            "body": this.body,
                            "title": this.title,
                            "time_start":this.time_start,
                            "time_end":this.time_end,
                            "functions": JSON.stringify(this.rows),
                            "salon": this.salon,
                            "engine": this.engine,
                            "carbody":this.carbody,
                          
                    }
                    console.log(this.rows);

                    var data = new FormData()
                    
                    for (const key in finalResult) {
                        data.append(key, finalResult[key]);

                    }
                    this.uploads.forEach((image, index) => {
                        if(image.image) data.append(`images[${index}]`, image.image);
                        
                    });
                    
                    const response = await fetch(this.url+'api/cabinet/car', {
                        method: 'POST',
                        body: data,
                        headers: {
                            'Accept-Language': 'en-US,en;q=0.8',
                            "accept": "application/json",
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        },

                    });
                    const json = await response.json();
                    if(json.errors){
                        alert(json.message);
                    }
                    if(response.status==201 || response.status==200){
                        alert('auksion has been created');
                        this.$router.push({ name: 'cabinet.main'});
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