import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthPortifolio = defineStore('AuthPortifolio', () => {
  const router = useRouter()

  const isLoggedIn = ref(false)

  const authLogin = async (form) => {
    try {
      const formResponse = await axios.post(
        'https://api-portifolio.fly.dev/api/login',
        form
      )
      localStorage.setItem('token', formResponse.data.token)
      axios.defaults.headers.common['Authorization'] =
        `Bearer ${formResponse.data.token}`
      isLoggedIn.value = true
      router.push('/admin')
    } catch (error) {
      console.error('Falha na autenticação', error)
    }
  }

  const signOut = () => {
    axios.post('https://api-portifolio.fly.dev/api/logout').finally(() => {
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = 'Bearer'
      isLoggedIn.value = false
      router.push({ name: 'projetos' })
    })
  }

  return {
    authLogin,
    signOut,
    isLoggedIn,
  }
})
