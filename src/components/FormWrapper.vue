<template>
  <form @submit.prevent="props.submitEvent">
    <fieldset
      class="flex flex-col gap-4 rounded-2xl bg-transparent p-4 shadow-2xl backdrop-blur-sm sm:p-10"
    >
      <slot></slot>

      <ButtonComponent type="submit" :placeholder="props.placeholder" />
    </fieldset>
  </form>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue'

const props = defineProps({
  submitEvent: Function,
  placeholder: String,
})
</script>
