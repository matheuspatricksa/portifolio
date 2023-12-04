<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <section
    class="flex flex-col text-center lg:text-left max-w-[80%] lg:max-w-[50%] 2xl:max-w-[35%] justify-center text-sm lg:text-base gap-1 movel-m:gap-5 pt-6 lg:pt-0 lg:gap-9 leading-loose">
    <h1 class="text-xl lg:text-4xl font-extrabold lg:leading-10">Matheus Santos</h1>
    <p>Olá, seja bem vindo(a) ao meu portifólio.</p>
    <p>Sou um Desenvolvedor Front-end com expertise em transformar conceitos criativos em experiências web.
      Meu foco principal é a utilização da linguagem JavaScript junto ao seus frameworks, Vue.js e Nuxt.js para criar
      interfaces intuitivas e responsivas.</p>
    <p>Fora do mundo da programação, você pode me encontrar na companhia das pessoas que eu amo, explorando novos
      lugares e saboreando um cappuccino por aí. Tenho um estilo de vida minimalista, onde busco encontrar felicidade
      na
      simplicidade e valorizar as conexões com as pessoas.</p>
    <p>Bora construir um projeto juntos? Entre em contato por meio das redes:</p>
    <div>
      <ul class="flex lg:justify-start justify-center gap-3">
        <li>
          <a class="flex items-center gap-1 cursor-pointer"
            :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
            href="https://www.linkedin.com/in/bigmath/">
            <Icon width="25" height="25" icon="mdi:linkedin" />
            <span class="hidden lg:block">Linkedin</span>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-1 cursor-pointer"
            :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'" href="https://github.com/bigmathdev">
            <Icon width="25" height="25" icon="mdi:github" />
            <span class="hidden lg:block">GitHub</span>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-1 cursor-pointer"
            :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'" href="mailto:contato@bigmath.dev">
            <Icon width="25" height="25" icon="mdi:email-outline" />
            <span class="hidden lg:block">E-mail</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>