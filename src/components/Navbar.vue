<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';

const props = defineProps({
  darkMode: Boolean
})

const emit = defineEmits(['dark'])
</script>

<template>
  <nav>
    <ul class="flex gap-3 items-center">
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <router-link to="/">Início</router-link>
      </li>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <router-link to="projetos">Projetos</router-link>
      </li>
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
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
      <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'">
        <Icon v-if="!darkMode" @click="emit('dark', true)" width="25" height="25" icon="line-md:sun-rising-loop" />
        <Icon v-else width="25" @click="emit('dark', false)" height="25" icon="line-md:moon-alt-loop" />
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>