<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :key="darkMode"
    :options="{
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 240,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: false,
            mode: 'grab',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 1000,
            duration: 1,
            opacity: 0.5,
            size: 1,
          },
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: updateColor,
        },
        links: {
          color: updateColor,
          distance: 120,
          enable: true,
          opacity: 0.2,
          width: 0.5,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 0.3,
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: false,
          value: 2,
        },
      },
      detectRetina: true,
    }"
  />
  <div
    class="absolute z-10 flex h-screen w-screen items-center justify-center lg:flex-col"
  >
    <router-view :dark-mode="darkMode"></router-view>
    <Footer
      class="absolute bottom-0 px-4 py-2 text-center text-xs text-gray-600 md:py-10"
      :class="darkMode ? 'text-gray-600' : 'text-gray-200'"
      msg="Copyright © 2023 bigmath.dev. Todos os direitos reservados. Powered by: Matheus Santos"
    />
  </div>
  <MenuMobile @dark="updateDarkMode" :dark-mode="darkMode" />
  <header class="absolute right-0 z-20 hidden px-7 py-8 lg:block">
    <Navbar @dark="updateDarkMode" :dark-mode="darkMode"> </Navbar>
  </header>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import MenuMobile from './components/MenuMobile.vue'
import { loadFull } from 'tsparticles'

const darkMode = ref(false)

const particlesInit = async (engine) => {
  await loadFull(engine)
}

const updateDarkMode = (value) => {
  darkMode.value = value
}

const updateColor = computed(() => {
  return darkMode.value ? '#ff8ff5' : '#1f2937'
})

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

<style>
body {
  @apply font-inter lg:leading-7;
  transition: ease-in-out 1000ms;
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
