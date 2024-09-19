<template>
  <div>
    <ProjectForm />
    <button @click="signOut">Sair</button>
  </div>
</template>

<script setup>
import ProjectForm from '../components/ProjectForm.vue'

import { useAuthPortifolio } from '../stores/AuthPortifolio'

const { signOut } = useAuthPortifolio()
</script>
