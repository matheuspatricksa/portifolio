<template>
  <menu class="flex items-center lg:hidden">
    <Icon
      @click="menuHamburg = !menuHamburg"
      icon="line-md:menu"
      width="25"
      heigth="25"
      class="ml-5"
    />
    <div
      v-if="menuHamburg"
      class="absolute top-0 z-30 h-screen w-screen bg-black opacity-50"
    ></div>
    <Transition
      enterActiveClass="animate-menu-translate-in"
      leaveActiveClass="animate-menu-translate-out"
    >
      <div
        v-if="menuHamburg"
        class="absolute top-0 z-40 h-screen w-[50%] bg-[#1c222b]"
        v-on-click-outside="closeMenuOutside"
        :class="!isDark ? 'bg-white' : ''"
      >
        <Icon
          @click="menuHamburg = !menuHamburg"
          icon="line-md:close-small"
          width="25"
          height="25"
          class="absolute right-5 top-5"
        />
        <ul class="mt-16 flex flex-col items-center gap-5">
          <li @click="menuHamburg = !menuHamburg">
            <router-link to="/">Inicio</router-link>
          </li>
          <li @click="menuHamburg = !menuHamburg">
            <router-link to="/projetos">Projetos</router-link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matheuspatrick/">Linkedin</a>
          </li>
          <li><a href="https://github.com/bigmathdev">GitHub</a></li>
          <li><a href="mailto:contato@bigmath.dev">E-mail</a></li>
          <li>
            <router-link to="/login" @click="menuHamburg = !menuHamburg"
              >Acesso</router-link
            >
          </li>
          <li v-if="isLoggedIn">
            <button @click="signOut(), (menuHamburg = !menuHamburg)">
              Sair
            </button>
          </li>
        </ul>
        <div class="absolute bottom-5 right-5">
          <Icon
            v-if="!isDark"
            width="25"
            height="25"
            icon="line-md:sun-rising-loop"
            @click="isDark = !isDark"
          />
          <Icon
            v-else
            width="25"
            height="25"
            icon="line-md:moon-alt-loop"
            @click="isDark = !isDark"
          />
        </div>
      </div>
    </Transition>
  </menu>
</template>

<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'

import { useAuthPortifolio } from '../stores/AuthPortifolio'
import { useDarkModeStore } from '../stores/DarkModeStore'

const authPortifolio = useAuthPortifolio()
const darkMode = useDarkModeStore()

const { isLoggedIn } = storeToRefs(authPortifolio)
const { signOut } = authPortifolio

const { isDark } = storeToRefs(darkMode)

const menuHamburg = ref(false)

const closeMenuOutside = () => {
  menuHamburg.value = false
}
</script>
