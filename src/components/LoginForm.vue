<template>
  <FormWrapper :submitEvent="handleSubmit" placeholder="Entrar">
    <InputComponent
      id="email"
      type="email"
      label="E-mail"
      placeholder="email"
      :required="true"
      v-model="loginForm.email"
    />
    <InputComponent
      id="password"
      type="password"
      label="Senha"
      placeholder="senha"
      :required="true"
      v-model="loginForm.password"
    />
  </FormWrapper>
</template>

<script setup>
import { ref } from 'vue'

import FormWrapper from './FormWrapper.vue'
import InputComponent from './InputComponent.vue'

import { useAuthPortifolio } from '../stores/AuthPortifolio'

const { authLogin } = useAuthPortifolio()

const loginForm = ref({
  email: '',
  password: '',
})

const handleSubmit = () => {
  authLogin(loginForm.value)
}
</script>
