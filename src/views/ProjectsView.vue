<template>
  <div>
    <h1 class="text-center text-xl font-bold lg:text-4xl">Projetos</h1>
    <div
      class="grid grid-cols-1 gap-6 p-6 py-10 md:grid-cols-2 2xl:grid-cols-3"
    >
      <div
        v-if="projects"
        v-for="project in projects.data"
        class="flex max-w-sm justify-center"
      >
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
