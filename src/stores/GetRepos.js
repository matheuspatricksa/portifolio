import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from 'axios';

export const useGetRepos = defineStore('GetRepos', () => {  

  const username = 'bigmathdev';
  const selectedRepos = ['ip-address-tracker','weather'];
  const repos = ref([]);

  const getRepos = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);

      const data = response.data;
      repos.value = data.filter(repo => selectedRepos.includes(repo.name));
    } catch (e) {
      console.error("Erro ao buscar repositórios: ", e);
    }
  };

  return {
    repos,
    getRepos
  }
})