import axios from 'axios'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthPortifolio = defineStore('AuthPortifolio', () => {
  const router = useRouter()
  const authLogin = async (form) => {
    try {
      const formResponse = await axios.post(
        'http://api.bigmath.dev/api/login',
        form
      )
      localStorage.setItem('token', formResponse.data.token)
      axios.defaults.headers.common['Authorization'] =
        `Bearer ${formResponse.data.token}`
      router.push('/admin')
    } catch (error) {
      console.error('Falha na autenticação', error)
    }
  }

  const signOut = () => {
    axios.post('http://api.bigmath.dev/api/logout').finally(() => {
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = 'Bearer'
      router.push({ name: 'projetos' })
    })
  }

  return {
    authLogin,
    signOut,
  }
})
