
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
const app = createApp(App)
const options = {
    position: POSITION.TOP_RIGHT,
};

app.use(Toast, options);

app.use(router)
app.use(createPinia());
app.mount('#app')
