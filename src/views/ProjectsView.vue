<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-center text-xl font-bold lg:text-4xl">Projetos</h1>
    <div class="flex gap-3">
      <div v-if="projects" v-for="project in projects.data">
        <ProjectPresentationCard :project="project" />
      </div>
    </div>
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