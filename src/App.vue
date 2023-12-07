<script setup>
import { onMounted, ref, watch } from 'vue';

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import MenuMobile from './components/MenuMobile.vue';
import { loadFull } from 'tsparticles';

const particlesInit = async engine => {
  await loadFull(engine);
}

const particlesLoaded = async container => {
  console.log("Particles carregado", container);
}

const darkMode = ref(false);
let updateParticles = ref(0);

const updateDarkMode = (value) => {
  darkMode.value = value
}

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
    <router-view></router-view>
    <Footer class="text-gray-600 text-xs md:py-10 absolute bottom-0 text-center py-2 px-4" :class="darkMode ? 'text-gray-600' : 'text-gray-200'"
      msg="Copyright © 2023 bigmath.dev. Todos os direitos reservados. Powered by: Matheus Santos" />
  </div>
  <MenuMobile :darkMode="darkMode" @darkMode="updateDarkMode"/>
  <header class="absolute z-20 right-0 px-7 py-8 hidden lg:block">
    <Navbar>
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