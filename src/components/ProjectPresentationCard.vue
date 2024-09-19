<template>
  <div class="w-96">
    <figure>
      <img
        class="rounded-t-2xl"
        :src="`${backendImageURL}${project.imagem}`"
        alt=""
      />
    </figure>
    <main
      class="flex flex-col gap-2 rounded-b-2xl bg-transparent p-8 shadow-2xl shadow-black backdrop-blur-[1px]"
    >
      <h2 class="text-xl font-bold">{{ props.project.nome }}</h2>
      <p class="text-sm">{{ props.project.descricao }}</p>
      <div class="flex items-center justify-end gap-3">
        <a
          :href="props.project.repositorio"
          class="rounded-md p-2 outline outline-1"
          >Repositorio</a
        >
        <a :href="props.project.deploy" class="rounded-md p-2 outline outline-1"
          >Projeto online</a
        >
      </div>
      <div class="mt-2 flex justify-end">
        <Badge name="Vue.js" />
      </div>
    </main>
  </div>
</template>

<script setup>
import Badge from './Badge.vue'

const props = defineProps({
  project: Object,
})

const backendImageURL = 'http://api.bigmath.dev/storage/images/'
</script>