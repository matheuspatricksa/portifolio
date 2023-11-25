<script setup>
import { onMounted, ref, watch } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { Icon } from '@iconify/vue';

const darkMode = ref(false);

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: light)').matches === true) {
    darkMode.value = false
  } else {
    darkMode.value = true
  }
})

watch(darkMode, (mode) => {
  document.body.classList.toggle('dark-mode', mode)
})

</script>

<template>
  <header class="flex justify-end px-7 py-8">
    <Navbar>
      <li class="cursor-pointer hover:text-gray-500">Início</li>
      <li class="cursor-pointer hover:text-gray-500">Projetos</li>
      <li class="cursor-pointer hover:text-gray-500">
        <a href="../public/Curriculo.pdf">Curriculo</a>
      </li>
      <li>
        <a class="cursor-pointer hover:text-gray-500" href="https://www.linkedin.com/in/bigmath/">
          <Icon width="25" height="25" icon="mdi:linkedin" />
        </a>
      </li>
      <li>
        <a class="cursor-pointer hover:text-gray-500" href="https://github.com/bigmathdev">
          <Icon width="25" height="25" icon="mdi:github" />
        </a>
      </li>
      <li>
        <a class="cursor-pointer hover:text-gray-500" href="https://www.instagram.com/bigmath.dev">
          <Icon width="25" height="25" icon="mdi:instagram" />
        </a>
      </li>
      <li class="cursor-pointer hover:text-gray-500">
        <Icon v-if="!darkMode" @click="darkMode = !darkMode" width="25" height="25" icon="line-md:sun-rising-loop" />
        <Icon v-else width="25" @click="darkMode = !darkMode" height="25" icon="line-md:moon-alt-loop" />
      </li>
    </Navbar>
  </header>
  <main class="flex justify-center items-center px-7 py-8">
    <section class="w-1/4 h-1/4 flex flex-col gap-5">
      <h1 class="text-4xl	font-extrabold leading-10">Matheus Santos</h1>
      <p>Olá, seja bem vindo(a) ao meu portifólio.</p>
      <p>Sou um Desenvolvedor Front-end com expertise em transformar conceitos criativos em experiências web.
        Meu foco principal é a utilização da linguagen JavaScript junto ao seus frameworks, Vue.js e Nuxt.js para criar
        interfaces intuitivas e responsivas.</p>
      <p>Fora do mundo da programação, você pode me encontrar na companhia das pessoas que eu amo, explorando novos
        lugares e saboreando um cappuccino por aí. Tenho um estilo de vida minimalista, onde busco encontrar felicidade na
        simplicidade e valorizar as conexões com as pessoas.</p>
      <p>Me encontre nas redes</p>
      <div>
        <ul class="flex gap-3">
          <li>
            <a class="flex items-center gap-1 cursor-pointer hover:text-gray-500"
              href="https://www.linkedin.com/in/bigmath/">
              <Icon width="25" height="25" icon="mdi:linkedin" />Linkedin
            </a>
          </li>
          <li>
            <a class="flex items-center gap-1 cursor-pointer hover:text-gray-500" href="https://github.com/bigmathdev">
              <Icon width="25" height="25" icon="mdi:github" />GitHub
            </a>
          </li>
          <li>
            <a class="flex items-center gap-1 cursor-pointer hover:text-gray-500"
              href="https://www.instagram.com/bigmath.dev">
              <Icon width="25" height="25" icon="mdi:instagram" />Instagram
            </a>
          </li>
          <li>
            <a class="flex items-center gap-1 cursor-pointer hover:text-gray-500" href="mailto:contato@bigmath.dev">
              <Icon width="25" height="25" icon="mdi:email-outline" />E-mail
            </a>
          </li>
        </ul>
      </div>
      <Footer class="text-gray-400 mt-6"
        msg="Copyright © 2023 bigmath.dev. Todos os direitos reservados. Powered by: Matheus Santos" />
    </section>
  </main>
</template>

<style>
body {
  @apply w-screen h-screen font-inter leading-7;
  transition: ease-in-out 1000ms
}

.dark-mode {
  @apply bg-gray-800 text-white;
  transition: ease-in 1000ms;
}
</style>