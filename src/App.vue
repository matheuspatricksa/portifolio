<script setup>
import Navbar from './components/Navbar.vue';
import { Icon } from '@iconify/vue';
</script>

<template>
  <header>
    <Navbar>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700">Início</li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700">Projetos</li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700">Currículo</li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700"><Icon width="25" height="25" icon="mdi:linkedin" /></li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700"><Icon width="25" height="25" icon="mdi:github" /></li>
      <li class="font-inter cursor-pointer text-gray-500 hover:text-gray-700"><Icon width="25" height="25" icon="mdi:instagram" /></li>
    </Navbar>
  </header>
</template>

<style>
</style>