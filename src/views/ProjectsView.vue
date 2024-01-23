<script setup>

const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})

</script>

<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-xl text-center font-bold lg:text-4xl">Projetos</h1>
    <div class="flex flex-col gap-2">
      <h2 class="text-lg font-bold">Estático</h2>
      <ul class="md:flex md:gap-5">
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/treine-me/">Treine-me</a></li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/static-login-form/">Login</a></li>
      </ul>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-lg font-bold">Consumo de API</h2>
      <ul class="md:flex md:gap-5">
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/weather/">Weather (Recente)</a></li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/store/">Store</a></li>
      </ul>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-lg font-bold">Mobile First e Responsividade</h2>
      <ul class="md:flex md:gap-5">
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/space-cream-responsive-element/">Space Cream</a></li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/responsive-element/">Elementos Responsivos</a></li>
      </ul>
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-lg font-bold">Diversos</h2>
      <ul class="md:flex md:gap-5">
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/focus-timer/">Focus Timer - Pomodoro</a></li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/form-event/">Formulário Customizado</a></li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/simple-color-flipper/hexadecimal.html">Color flipper</a></li>
        <li class="cursor-pointer" :class="darkMode ? 'hover:text-[#ff8ff5]' : 'hover:text-gray-200'"><a href="https://bigmathdev.github.io/band-members/">Band Members</a></li>
      </ul>
    </div>
  </div>
</template>

<style></style>