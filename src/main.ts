import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'

createApp(App).use(PrimeVue, { theme: { preset: Aura }, locale: { clear: 'Очистить', today: 'Сегодня' } }).mount('#app')
