import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'EN',
  }),
  actions: {
    setLocale(locale: string) {
      this.locale = locale;
      localStorage.setItem('locale', locale);
    },
  },
});
