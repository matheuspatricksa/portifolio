import './assets/main.css'
import Particles from 'vue3-particles'
import router from './router'
import {Icon} from '@iconify/vue';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Particles).use(router).use(Icon).mount('#app')
