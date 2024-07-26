// src/stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isActive: false,
    type:0 //0-login,1-register
  }),
  actions: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    setActive(status, type) {
      this.isActive = status;
      this.type = type;
    },
  },
});
