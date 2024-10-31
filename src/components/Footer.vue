<template>
  <footer
    class="flex items-center justify-center px-4 text-center text-xs"
    :class="isDark ? 'text-gray-400' : 'text-gray-600'"
  >
    Copyright © 2024 bigmath.dev. Todos os direitos reservados. Powered by:
    Matheus Patrick
  </footer>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useDarkModeStore } from '../stores/DarkModeStore'

const darkMode = useDarkModeStore()
const { isDark } = storeToRefs(darkMode)
</script>
