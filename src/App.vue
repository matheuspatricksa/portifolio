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
      fpsLimit: 240,
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
  <div class="h-screen w-screen flex justify-center items-center lg:flex-col absolute z-10">
    <main class="flex flex-col items-center justify-center lg:px-7 lg:py-8 ">
      <router-view></router-view>
    </main>
    <Footer class="text-gray-600 text-xs md:py-10 absolute bottom-0 text-center py-2 px-4" :class="darkMode ? 'text-gray-600' : 'text-gray-200'"
      msg="Copyright © 2023 bigmath.dev. Todos os direitos reservados. Powered by: Matheus Santos" />
  </div>
  <menu class="absolute z-20 w-full min-h-[8%] flex items-center lg:hidden">
    <Icon @click="menuHamburg = !menuHamburg" icon="line-md:menu" width="25" heigth="25" class="mx-10 cursor-pointer" />
    <div v-if="menuHamburg" class="absolute z-30 w-screen h-screen bg-black opacity-50 top-0"></div>
    <Transition enterActiveClass="animate-menu-translate-in" leaveActiveClass="animate-menu-translate-out">
      <div v-if="menuHamburg" class="bg-[#1c222b] h-screen w-[50%] absolute z-40 top-0" :class="!darkMode ? 'bg-white' : ''">
        <Icon @click="menuHamburg = !menuHamburg" icon="line-md:close-small" width="25" height="25"
          class="absolute right-5 top-5 cursor-pointer" />
        <ul class="pl-10 pt-12 flex flex-col gap-5">
          <li @click="menuHamburg = !menuHamburg" class="cursor-pointer">
            <router-link to="/">Inicio</router-link>
          </li>
          <li @click="menuHamburg = !menuHamburg">
            <router-link to="/projetos">Projetos</router-link>
          </li>
          <li><a href="https://www.linkedin.com/in/bigmath/">Linkedin</a></li>
          <li><a href="https://github.com/bigmathdev">GitHub</a></li>
          <li><a href="mailto:contato@bigmath.dev">E-mail</a></li>
        </ul>
        <div class="absolute bottom-5 right-5">
          <Icon v-if="!darkMode" @click="darkMode = !darkMode" width="25" height="25" icon="line-md:sun-rising-loop" />
          <Icon v-else width="25" @click="darkMode = !darkMode" height="25" icon="line-md:moon-alt-loop" />
        </div>
      </div>
    </Transition>
  </menu>
  <header class="absolute z-20 right-0 px-7 py-8 hidden lg:block">
    <Navbar>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <router-link to="/">Início</router-link>
      </li>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <router-link to="projetos">Projetos</router-link>
      </li>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <!-- <a href="/Curriculo.pdf" target="_blank">Curriculo</a> -->
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
      <!-- <li>
        <a class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
          href="https://www.instagram.com/bigmath.dev">
          <Icon width="25" height="25" icon="mdi:instagram" />
        </a>
      </li> -->
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <Icon v-if="!darkMode" @click="darkMode = !darkMode" width="25" height="25" icon="line-md:sun-rising-loop" />
        <Icon v-else width="25" @click="darkMode = !darkMode" height="25" icon="line-md:moon-alt-loop" />
      </li>
    </Navbar>
  </header>
</template>

<style>
body {
  @apply font-inter lg:leading-7;
  transition: ease-in-out 1000ms
}

#tsparticle {
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;
}

.dark-mode {
  @apply bg-gray-800 text-white;
  transition: ease-in 1000ms;
}
</style>