<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
    <div class="popUp " :class="{ active: isActive }"> 
       
    </div>
</template>
<script>
import { usePopUpStore } from '../stores/popup';
import { watch, ref } from 'vue';
export default {
    setup() {
        const authStore = usePopUpStore(); // Access your Pinia store instance
        const regType = ref(0);
        // Use a ref to wrap isActive for reactive watching
        const isActive = ref(authStore.isActive);
       
        // Watch isActive using a getter function
        watch(
            () => authStore.isActive,
            // eslint-disable-next-line no-unused-vars
            (newValue, oldValue) => {
                console.log('isActive changed:', newValue);
                isActive.value = newValue; // Update isActive ref
                // Perform actions based on isActive changes
            }
        );
        watch(
            () => authStore.type,
            (newValue, oldValue) => {
                console.log('popUp type changed:', newValue);
               
                regType.value = newValue; // Update regType ref
            }
        );

        const closeAuth = () => {
            
            authStore.setActive(false,0); // Update isActive state in the store
        };

        // You can return data and methods to the template if needed
        return {
            isActive,
          
            regType,
            closeAuth,
        };
    },
    
    data() {
        return {
            url: import.meta.env.VITE_APP_REST_ENDPOINT,
            phoneblock: false,
            timeLeft: 300, // 5 minutes in seconds
            interval: null,
            role: 0,
           
        }
    },
    
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        startCountdown() {
            this.interval = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--;
                } else {
                clearInterval(this.interval);
                }
            }, 1000);
        },
       
    },
    created() {
        const authStore = usePopUpStore();
        console.log(authStore.isActive);
       
    },
    watch: {
        
    }
}
</script>
<style scoped>
    .info{
        color: red;
    }
</style>