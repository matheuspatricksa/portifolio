<template>
  <div
    class="flex flex-col justify-center gap-3 px-4 md:max-w-2xl md:gap-6 2xl:max-w-4xl"
  >
    <h1 class="text-2xl font-extrabold lg:text-4xl">Matheus Patrick</h1>

    <p>Olá, seja bem-vindo(a) ao meu portfólio.</p>

    <p>
      Sou um programador Front-end apaixonado por tecnologia e inovações.
      Trabalho com a stack Vue.js e, às vezes, me aventuro em Back-end com
      Laravel. Gosto de criar experiências web que façam a diferença.
    </p>

    <p>
      Fora do Front-end, tenho interesse em estudar sobre segurança na web,
      inteligência artificial, Web3, blockchain, entre outras tendências do
      mercado.
    </p>

    <p>
      Fora do código, gosto de explorar livros sobre autoconhecimento,
      desenvolvimento pessoal e neurociência. Quando não estou programando,
      busco viajar, explorar novos lugares e conhecer novas pessoas. A beleza da
      natureza sempre me inspira e recarrega minhas energias.
    </p>

    <p>Busco simplificar a vida e valorizar o que realmente importa.</p>

    <p>
      Bora construir um projeto juntos? Entre em contato por meio das redes:
    </p>

    <ul class="flex justify-center gap-3 md:justify-start">
      <li>
        <a class="flex items-center gap-1" href="https://github.com/bigmathdev">
          <Icon width="25" height="25" icon="mdi:linkedin" />
          <span class="hidden md:block">Linkedin</span>
        </a>
      </li>
      <li>
        <a class="flex items-center gap-1" href="https://github.com/bigmathdev">
          <Icon width="25" height="25" icon="mdi:github" />
          <span class="hidden md:block">GitHub</span>
        </a>
      </li>
      <li>
        <a class="flex items-center gap-1" href="mailto:contato@bigmath.dev">
          <Icon width="25" height="25" icon="mdi:email-outline" />
          <span class="hidden md:block">E-mail</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
