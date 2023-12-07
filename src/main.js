import './assets/main.css'
import Particles from 'vue3-particles'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Particles).use(router).mount('#app')
