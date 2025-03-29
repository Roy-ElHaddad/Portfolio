import './assets/main.css';
import EN from './locale/en.json';
import FR from './locale/fr.json';

import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import { useLocaleStore } from './stores/localeStore';

const app = createApp(App)
app.use(createPinia())
const localeStore = useLocaleStore()
const i18n = createI18n({
    legacy: false, 
    locale: localeStore.locale,
    fallbackLocale: 'EN',
    messages: {
        EN: EN,
        FR: FR,
    }
  })
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark',
        },

    }
});
app.use(router)
app.use(i18n)
app.mount('#app')
