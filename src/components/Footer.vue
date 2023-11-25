<script setup>
defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <footer>{{ msg }}</footer>
</template>

<style scoped></style>