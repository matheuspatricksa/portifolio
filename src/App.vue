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
const menuHamburg = ref(false)
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
  <Particles :key="updateParticles" id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
    :options="{
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
    <menu class="w-full min-h-[8%] absolute flex items-center z-10 lg:hidden" :class="!menuHamburg ? 'px-5' : ''">
      <Icon @click="menuHamburg = !menuHamburg" :class="menuHamburg ? 'hidden' : ''" icon="line-md:menu" width="25" heigth="25" class="absolute" />
      <div v-if="menuHamburg" class="w-screen h-screen absolute z-20 bg-black opacity-50"></div>
      <Transition enterActiveClass="animate-menu-translate-in" leaveActiveClass="animate-menu-translate-out">
        <div v-if="menuHamburg" class="menu bg-[#1c222b] min-h-screen relative z-30 left-0" >
          <Icon @click="menuHamburg = !menuHamburg" icon="line-md:close-small" width="25" height="25"  class="absolute right-0 m-5"/>
          <ul class="pl-10 pr-20 pt-12 flex flex-col gap-5">
            <li class="cursor-pointer" @click="console.log('clicou')">Inicio</li>
            <li @click="console.log('clicou')">Projetos</li>
            <li @click="console.log('clicou')">Currículo</li>
            <li @click="console.log('clicou')">Linkedin</li>
            <li @click="console.log('clicou')">GitHub</li>
            <li @click="console.log('clicou')">Instagram</li>
            <li @click="console.log('clicou')">E-mail</li>
          </ul>
        </div>
      </Transition>
    </menu>
  <header class="absolute right-0 z-10 px-7 py-8 hidden lg:block">
    <Navbar>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">Início</li>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">Projetos</li>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <a href="/Curriculo.pdf" target="_blank">Curriculo</a>
      </li>
      <li>
        <a class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
          href="https://www.linkedin.com/in/bigmath/">
          <Icon width="25" height="25" icon="mdi:linkedin" />
        </a>
      </li>
      <li>
        <a class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
          href="https://github.com/bigmathdev">
          <Icon width="25" height="25" icon="mdi:github" />
        </a>
      </li>
      <li>
        <a class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
          href="https://www.instagram.com/bigmath.dev">
          <Icon width="25" height="25" icon="mdi:instagram" />
        </a>
      </li>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <Icon v-if="!darkMode" @click="darkMode = !darkMode" width="25" height="25" icon="line-md:sun-rising-loop" />
        <Icon v-else width="25" @click="darkMode = !darkMode" height="25" icon="line-md:moon-alt-loop" />
      </li>
    </Navbar>
  </header>
  <div class="h-screen flex lg:justify-center items-center lg:flex-col relative">
    <main class="flex justify-center lg:px-7 lg:py-8 ">
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
        <p>Me encontre nas redes</p>
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
                :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
                href="https://www.instagram.com/bigmath.dev">
                <Icon width="25" height="25" icon="mdi:instagram" />
                <span class="hidden lg:block">Instagram</span>
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
        <Footer class="text-gray-400 mt-6"
          msg="Copyright © 2023 bigmath.dev. Todos os direitos reservados. Powered by: Matheus Santos" />
      </section>
    </main>
  </div>
</template>

<style>
body {
  @apply font-inter lg:leading-7;
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