<script setup>
import { onMounted, ref, watch } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { Icon } from '@iconify/vue';
import { loadFull } from 'tsparticles';

const particlesInit = async engine => {
  await loadFull(engine);
}

const particlesLoaded = async container => {
  console.log("Particles carregado", container);
}

const darkMode = ref(false);
let updateParticles = ref(0)

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: light)').matches === true) {
    darkMode.value = false
  } else {
    darkMode.value = true
  }
})

watch(darkMode, (mode) => {
  document.body.classList.toggle('dark-mode', mode)
  updateParticles++
})

</script>

<template>
    <Particles :key="updateParticles" id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
      background: {
        color: {
          value: ''
        }
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push'
          },
          onHover: {
            enable: false,
            mode: 'grab'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 1000,
            duration: 1,
            opacity: 0.5,
            size: 1
          },
          push: {
            quantity: 1
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: darkMode ? '#ff8ff5' : '#1f2937'
        },
        links: {
          color: darkMode ? '#ffffff' : '#1f2937',
          distance: 120,
          enable: true,
          opacity: 0.2,
          width: 0.5
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 0.3,
          straight: true
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 60
        },
        opacity: {
          value: 0.2
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: false,
          value: 2
        }
      },
      detectRetina: true
    }" />
    <header class="absolute right-0 z-10 px-7 py-8">
      <Navbar>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">Início</li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">Projetos</li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
          <a href="/Curriculo.pdf" target="_blank">Curriculo</a>
        </li>
        <li>
          <a class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'" href="https://www.linkedin.com/in/bigmath/">
            <Icon width="25" height="25" icon="mdi:linkedin" />
          </a>
        </li>
        <li>
          <a class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'" href="https://github.com/bigmathdev">
            <Icon width="25" height="25" icon="mdi:github" />
          </a>
        </li>
        <li>
          <a class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'" href="https://www.instagram.com/bigmath.dev">
            <Icon width="25" height="25" icon="mdi:instagram" />
          </a>
        </li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
          <Icon v-if="!darkMode" @click="darkMode = !darkMode" width="25" height="25" icon="line-md:sun-rising-loop" />
          <Icon v-else width="25" @click="darkMode = !darkMode" height="25" icon="line-md:moon-alt-loop" />
        </li>
      </Navbar>
    </header>
  <div class="h-screen flex justify-center flex-col relative">
    <main class="flex justify-center px-7 py-8">
      <section class="w-1/4 h-1/4 flex flex-col gap-7">
        <h1 class="text-4xl	font-extrabold leading-10">Matheus Santos</h1>
        <p>Olá, seja bem vindo(a) ao meu portifólio.</p>
        <p>Sou um Desenvolvedor Front-end com expertise em transformar conceitos criativos em experiências web.
          Meu foco principal é a utilização da linguagem JavaScript junto ao seus frameworks, Vue.js e Nuxt.js para criar
          interfaces intuitivas e responsivas.</p>
        <p>Fora do mundo da programação, você pode me encontrar na companhia das pessoas que eu amo, explorando novos
          lugares e saboreando um cappuccino por aí. Tenho um estilo de vida minimalista, onde busco encontrar felicidade
          na
          simplicidade e valorizar as conexões com as pessoas.</p>
        <p>Me encontre nas redes</p>
        <div>
          <ul class="flex gap-3">
            <li>
              <a class="flex items-center gap-1 cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
                href="https://www.linkedin.com/in/bigmath/">
                <Icon width="25" height="25" icon="mdi:linkedin" />Linkedin
              </a>
            </li>
            <li>
              <a class="flex items-center gap-1 cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'" href="https://github.com/bigmathdev">
                <Icon width="25" height="25" icon="mdi:github" />GitHub
              </a>
            </li>
            <li>
              <a class="flex items-center gap-1 cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
                href="https://www.instagram.com/bigmath.dev">
                <Icon width="25" height="25" icon="mdi:instagram" />Instagram
              </a>
            </li>
            <li>
              <a class="flex items-center gap-1 cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'" href="mailto:contato@bigmath.dev">
                <Icon width="25" height="25" icon="mdi:email-outline" />E-mail
              </a>
            </li>
          </ul>
        </div>
        <Footer class="text-gray-400 mt-6"
          msg="Copyright © 2023 bigmath.dev. Todos os direitos reservados. Powered by: Matheus Santos" />
      </section>
    </main>
  </div>
</template>

<style>
body {
  @apply font-inter leading-7;
  transition: ease-in-out 1000ms
}

.dark-mode {
  @apply bg-gray-800 text-white;
  transition: ease-in 1000ms;
}

#tsparticle {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>