import './assets/main.css'
import daisyui from 'daisyui'
import Particles from 'vue3-particles'
import router from './router'
import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

window.axios = axios

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] =
    `Bearer ${localStorage.getItem('token')}`
}

axios.interceptors.response.use(
  (response) => {
    const tokenXSRF = document.cookie
      .split(';')
      .find((row) => row.startsWith('XSRF-TOKEN='))
      ?.split('=')[1]

    if (tokenXSRF) {
      response.headers['X-XSRF-TOKEN'] = decodeURIComponent(tokenXSRF)
    }

    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = 'Bearer'
      router.push({ name: 'login' })
    }
    return Promise.reject(error)
  }
)

createApp(App).use(Particles).use(router).use(daisyui).use(pinia).mount('#app')
