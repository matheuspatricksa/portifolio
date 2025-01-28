import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useGetRepos = defineStore('GetRepos', () => {  

  const username = 'bigmathdev';
  const token = import.meta.env.VITE_TOKEN_GITHUB_API;
  const selectedRepos = [];
  const repos = ref([]);

  const getRepos = async () => {
    try {
      const response = await axios.get(`http://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      const data = await response.json();
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