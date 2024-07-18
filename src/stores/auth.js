// src/stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isActive: false,
  }),
  actions: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    setActive(status) {
     
      this.isActive = status;
    },
  },
});
