<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import { vOnClickOutside } from '@vueuse/components'


const menuHamburg = ref(false)

const props = defineProps({
  darkMode: Boolean
})

const closeMenuOutside = () => {
  menuHamburg.value = false
}

const emit = defineEmits(['dark'])

</script>

<template>
  <menu class="absolute z-20 w-full min-h-[8%] flex items-center lg:hidden">
    <Icon @click="menuHamburg = !menuHamburg" icon="line-md:menu" width="25" heigth="25" class="mx-10 cursor-pointer" />
    <div v-if="menuHamburg" class="absolute z-30 w-screen h-screen bg-black opacity-50 top-0"></div>
    <Transition enterActiveClass="animate-menu-translate-in" leaveActiveClass="animate-menu-translate-out">
      <div v-if="menuHamburg" class="bg-[#1c222b] h-screen w-[50%] absolute z-40 top-0" v-on-click-outside="closeMenuOutside"
        :class="!darkMode ? 'bg-white' : ''">
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
          <Icon v-if="!darkMode" @click="emit('dark', true)" width="25" height="25" icon="line-md:sun-rising-loop" />
          <Icon v-else width="25" @click="emit('dark', false)" height="25" icon="line-md:moon-alt-loop" />
        </div>
      </div>
    </Transition>
  </menu>
</template>

<style scoped></style>