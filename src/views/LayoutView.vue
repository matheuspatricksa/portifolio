<template>
  <div class="grid grid-rows-[10vh_80vh_10vh]">
    <Navbar />
    <MenuMobile />
    <div class="overflow-auto sm:flex sm:justify-center">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import MenuMobile from '@/components/MenuMobile.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style></style>
