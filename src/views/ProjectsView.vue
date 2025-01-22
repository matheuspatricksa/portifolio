<template>
  <div>
    <div v-if="projects"
    >
      <h1 class="text-center text-xl font-bold lg:text-4xl">Projetos</h1>
      <div 
        class="grid grid-cols-1 gap-6 p-6 py-10 md:grid-cols-2 2xl:grid-cols-3"
      >
        <div v-for="project in projects.data" :key="project.id"
          class="flex max-w-sm justify-center"
        >
          <ProjectPresentationCard :project="project" />
        </div>
      </div>
    </div>
    <div v-else class="flex h-full justify-center items-center">Carregando projetos... Aguarde!</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '../stores/ProjectStore'

import ProjectPresentationCard from '../components/ProjectPresentationCard.vue'

const projectsStore = useProjectStore()

const { projects } = storeToRefs(projectsStore)
const { getProjects } = projectsStore

const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true,
  },
})

onMounted(getProjects)
</script>
