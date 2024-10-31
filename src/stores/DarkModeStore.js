import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDarkModeStore = defineStore('DarkMode', () => {
  const isDark = ref(false)

  const defineTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches == true) {
      isDark.value = false
    } else {
      isDark.value = true
    }
  }

  return {
    isDark,
    defineTheme,
  }
})
