<template>
  <button :type="props.type" class="rounded-md bg-[#7480ff] p-3 text-white shadow-2xl hover:bg-[#646ee4]">{{ placeholder }}</button>
</template>

<script setup>
const props = defineProps(['type', 'placeholder'])
</script>