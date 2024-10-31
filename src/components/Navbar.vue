<template>
  <nav class="hidden lg:mr-4 lg:flex lg:justify-end">
    <ul class="flex items-center gap-3">
      <li
        class="cursor-pointer"
        :class="isDark ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
      >
        <router-link to="/">Início</router-link>
      </li>
      <li
        class="cursor-pointer"
        :class="isDark ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
      >
        <router-link to="projetos">Projetos</router-link>
      </li>
      <li v-if="isLoggedIn">
        <button @click="signOut">Sair</button>
      </li>
      <li
        v-else
        class="cursor-pointer"
        :class="isDark ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
      >
        <router-link to="login">Acesso</router-link>
      </li>
      <li>
        <a
          class="cursor-pointer"
          :class="isDark ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
          href="https://www.linkedin.com/in/matheuspatrick/"
        >
          <Icon width="25" height="25" icon="mdi:linkedin" />
        </a>
      </li>
      <li>
        <a
          class="cursor-pointer"
          :class="isDark ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
          href="https://github.com/bigmathdev"
        >
          <Icon width="25" height="25" icon="mdi:github" />
        </a>
      </li>
      <li
        class="cursor-pointer"
        :class="isDark ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"
      >
        <Icon
          v-if="!isDark"
          width="25"
          height="25"
          icon="line-md:sun-rising-loop"
          @click="isDark = true"
        />
        <Icon
          v-else
          width="25"
          height="25"
          icon="line-md:moon-alt-loop"
          @click="isDark = false"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { Icon } from '@iconify/vue'

import { useAuthPortifolio } from '../stores/AuthPortifolio'
import { useDarkModeStore } from '../stores/DarkModeStore'
import { storeToRefs } from 'pinia'

const authPortifolio = useAuthPortifolio()
const darkMode = useDarkModeStore()

const { isLoggedIn } = storeToRefs(authPortifolio)
const { signOut } = authPortifolio

const { isDark } = storeToRefs(darkMode)
</script>
