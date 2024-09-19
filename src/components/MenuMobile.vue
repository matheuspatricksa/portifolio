<template>
  <menu class="absolute z-20 flex min-h-[8%] w-full items-center lg:hidden">
    <Icon
      @click="menuHamburg = !menuHamburg"
      icon="line-md:menu"
      width="25"
      heigth="25"
      class="mx-10 cursor-pointer"
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
        :class="!darkMode ? 'bg-white' : ''"
      >
        <Icon
          @click="menuHamburg = !menuHamburg"
          icon="line-md:close-small"
          width="25"
          height="25"
          class="absolute right-5 top-5 cursor-pointer"
        />
        <ul class="flex flex-col gap-5 pl-10 pt-12">
          <li @click="menuHamburg = !menuHamburg" class="cursor-pointer">
            <router-link to="/">Inicio</router-link>
          </li>
          <li @click="menuHamburg = !menuHamburg">
            <router-link to="/projetos">Projetos</router-link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bigmath/">Linkedin</a>
          </li>
          <li><a href="https://github.com/bigmathdev">GitHub</a></li>
          <li><a href="mailto:contato@bigmath.dev">E-mail</a></li>
        </ul>
        <div class="absolute bottom-5 right-5">
          <Icon
            v-if="!darkMode"
            @click="emit('dark', true)"
            width="25"
            height="25"
            icon="line-md:sun-rising-loop"
          />
          <Icon
            v-else
            width="25"
            @click="emit('dark', false)"
            height="25"
            icon="line-md:moon-alt-loop"
          />
        </div>
      </div>
    </Transition>
  </menu>
</template>

<script setup>
import { ref } from 'vue'

import { Icon } from '@iconify/vue'
import { vOnClickOutside } from '@vueuse/components'

const menuHamburg = ref(false)

const props = defineProps({
  darkMode: Boolean,
})

const closeMenuOutside = () => {
  menuHamburg.value = false
}

const emit = defineEmits(['dark'])
</script>