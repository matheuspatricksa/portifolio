<template>
  <footer>{{ props.msg }}</footer>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
})
</script>