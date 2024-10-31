<template>
  <span class="w-fit rounded-2xl px-2 text-sm outline outline-1">{{
    props.name
  }}</span>
</template>

<script setup>
const props = defineProps({
  name: String,
})
</script>
