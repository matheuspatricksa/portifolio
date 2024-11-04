import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('ProjectStore', () => {
  const projects = ref()

  const getProjects = async () => {
    await axios
      .get('https://api-portifolio.fly.dev/api/projects')
      .then((response) => {
        projects.value = response.data
      })
      .catch((error) => {
        console.error('Falha ao obter projetos', error)
      })
  }

  const submitProject = (form) => {
    axios
      .post(
        'https://api-portifolio.fly.dev/api/projects',

        {
          nome: form.nome,
          descricao: form.descricao,
          deploy: form.deploy,
          repositorio: form.repositorio,
          imagem: form.imagem,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((response) => {
        console.log('Projeto adiciona com sucesso', response)
      })
      .catch((error) => {
        console.error('Falha ao enviar projetos', error)
      })
  }

  return {
    projects,
    getProjects,
    submitProject,
  }
})
