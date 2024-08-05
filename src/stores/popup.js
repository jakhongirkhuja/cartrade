// src/stores/auth.js
import { defineStore } from 'pinia';

export const usePopUpStore = defineStore({
  id: 'popup',
  state: () => ({
    isActive: false,
  }),
  actions: {
    toggleActive(item) {
      this.isActive = item;
    },
  },
});
