<template>
    <div class="timer">
      {{ displayTime }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'CountdownTimer',
    props: {
      timeStart: {
        type: String,
        required: true
      },
      timeEnd: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        displayTime: '',
        intervalId: null
      };
    },
    mounted() {
      this.startCountdown();
    },
    beforeUnmount() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    },
    methods: {
      formatTime(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${day}:${month}:${year} ${hours}:${minutes}:${seconds}`;
      },
      calculateCountdown(endTime) {
        const now = new Date().getTime();
        const distance = endTime - now;
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        return { days, hours, minutes, seconds, distance };
      },
      startCountdown() {
        const timeEnd = new Date(this.timeEnd).getTime();
        const timeStart = new Date(this.timeStart).getTime();
  
        const now = new Date().getTime();
  
        if (now < timeStart) {
          this.displayTime = `${this.formatTime(new Date(timeStart))}`;
        } else {
          this.intervalId = setInterval(() => {
            const { days, hours, minutes, seconds, distance } = this.calculateCountdown(timeEnd);
  
            if (distance < 0) {
              clearInterval(this.intervalId);
              this.displayTime = 'Завершен';
            } else {
              this.displayTime = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
            }
          }, 1000);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  