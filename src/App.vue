<script setup>
import Navbar from './components/Navbar.vue';
import { Icon } from '@iconify/vue';
</script>

<template>
  <header class="flex justify-end px-7 py-8">
    <Navbar>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700">Início</li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700">Projetos</li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700">Currículo</li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700"><Icon width="25" height="25" icon="mdi:linkedin" /></li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700"><Icon width="25" height="25" icon="mdi:github" /></li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700"><Icon width="25" height="25" icon="mdi:instagram" /></li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700"><Icon width="25" height="25" icon="iconoir:sun-light" /></li>
    </Navbar>
  </header>
  <main class="flex justify-center items-center px-7 py-8">
      <section class="w-1/4 h-1/4 flex flex-col gap-5">
        <h1 class="text-4xl	font-extrabold leading-10">Matheus Santos</h1>
        <p>Olá, seja bem vindo(a) ao meu portifólio.</p>
        <p>Sou um Desenvolvedor Front-end com expertise em transformar conceitos criativos em experiências web excepcionais. Meu foco principal é a utilização da linguagen JavaScript junto ao seus frameworks, Vue.js e Nuxt.js para criar interfaces intuitivas e responsivas.</p>
        <p>Fora do mundo da programação, você pode me encontrar na companhia das pessoas que eu amo, explorando novos lugares e saboreando um cappuccino por aí. Tenho um estilo de vida minimalista, onde busco encontrar felicidade na simplicidade e valorizar as conexões com as pessoas.</p>
        <p>Me encontre nas redes</p>
        <div>
          <ul class="flex gap-3">
            <li class="flex items-center gap-1"><Icon width="25" height="25" icon="mdi:github" />GitHub</li>
            <li class="flex items-center gap-1"><Icon width="25" height="25" icon="mdi:instagram" />Instagram</li>
            <li class="flex items-center gap-1"><Icon width="25" height="25" icon="mdi:email-outline" />E-mail</li>
            <li class="flex items-center gap-1"><Icon width="25" height="25" icon="mdi:linkedin" />Linkedin</li>
          </ul>
        </div>
      </section>
    </main>
</template>

<style>
body {
  @apply w-screen h-screen font-inter
}
</style>