<template>
  <div>
    <div v-if="repos"
    >
      <h1 class="text-center text-xl font-bold lg:text-4xl">Projetos</h1>
      <div 
        class="grid grid-cols-1 gap-6 p-6 py-10 md:grid-cols-2 2xl:grid-cols-3"
      >
        <div v-for="repo in repos" :key="repo.id"
          class="flex max-w-sm justify-center"
        >
          <ProjectPresentationCard :project="repo" />
        </div>
      </div>
    </div>
    <div v-else class="flex h-full justify-center items-center">Carregando projetos... Aguarde!</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import ProjectPresentationCard from '../components/ProjectPresentationCard.vue'
import { useGetRepos } from '../stores/GetRepos';

const getReposStore = useGetRepos()
const { repos } = storeToRefs(getReposStore)
const { getRepos } = getReposStore

const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true,
  },
})

onMounted(() => {
  setTimeout(() => {
    getRepos()
  }, 2000);
});
</script>
