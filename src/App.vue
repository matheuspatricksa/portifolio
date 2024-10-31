<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :key="isDark"
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
          value: isDark ? '#ff8ff5' : '#1f2937',
        },
        links: {
          color: isDark ? '#ff8ff5' : '#1f2937',
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
  <LayoutView></LayoutView>
</template>

<script setup>
import LayoutView from '@/views/LayoutView.vue'
import { loadFull } from 'tsparticles'
import { onMounted, watch } from 'vue'
import { useDarkModeStore } from './stores/DarkModeStore'
import { storeToRefs } from 'pinia'

const darkMode = useDarkModeStore()
const { isDark } = storeToRefs(darkMode)
const { defineTheme } = darkMode

const particlesInit = async (engine) => {
  await loadFull(engine)
}

onMounted(() => {
  defineTheme()
})

watch(isDark, (mode) => {
  document.body.classList.toggle('dark-mode', mode)
})
</script>

<style>
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
