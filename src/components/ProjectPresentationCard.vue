<template>
  <div class="z-10">
    <figure>
      <img
        class="aspect-[4/3] rounded-t-2xl object-cover"
        :src="`${backendImageURL}${project.imagem}`"
        alt=""
      />
    </figure>
    <main
      class="flex flex-col gap-2 rounded-b-2xl bg-transparent p-6 shadow-2xl shadow-black backdrop-blur-[1px]"
    >
      <h2 class="truncate text-lg font-bold">{{ props.project.nome }}</h2>
      <p class="h-20 overflow-auto text-sm">{{ props.project.descricao }}</p>
      <div class="flex items-center justify-end gap-3">
        <a
          :href="props.project.repositorio"
          class="rounded-md p-2 text-sm outline outline-1"
          >Repositorio</a
        >
        <a
          :href="props.project.deploy"
          class="rounded-md p-2 text-sm outline outline-1"
          >Deploy</a
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
