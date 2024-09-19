<template>
  <FormWrapper placeholder="Adicionar projeto" :submitEvent="sendProject">
    <InputComponent
      type="text"
      label="Nome do projeto"
      placeholder="nome"
      v-model="form.nome"
    />
    <InputComponent
      type="text"
      label="Descrição"
      placeholder="descrição"
      v-model="form.descricao"
    />
    <InputComponent
      type="text"
      label="Deploy"
      placeholder="deploy"
      v-model="form.deploy"
    />
    <InputComponent
      type="text"
      label="Repositório"
      placeholder="repositório"
      v-model="form.repositorio"
    />
    <InputFileComponent
      @image="(e) => (form.imagem = e)"
      label="Escolher capa"
    />
  </FormWrapper>
</template>

<script setup>
import { ref } from 'vue'

import FormWrapper from '../components/FormWrapper.vue'
import InputComponent from '../components/InputComponent.vue'
import InputFileComponent from './InputFileComponent.vue'

import { useProjectStore } from '../stores/ProjectStore'

const { submitProject } = useProjectStore()

const form = ref({
  nome: '',
  descricao: '',
  deploy: '',
  repositorio: '',
  imagem: null,
})

const sendProject = () => {
  submitProject(form.value)
}
</script>
