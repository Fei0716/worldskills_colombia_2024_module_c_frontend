import { createApp } from 'vue'
import './assets/css/daisyui.min.css';
import './assets/js/tailwindcss-3.4.4.js';
import './style.css'
import App from './App.vue'
import router from './router.js';

createApp(App).use(router).mount('#app')
