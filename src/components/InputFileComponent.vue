<template>
  <div class="flex items-center overflow-hidden rounded-md border">
    <input type="file" id="fileInput" @change="onFilesChanges" class="hidden" />
    <label
      for="fileInput"
      class="bg-gray-400 px-2 py-3 text-xs text-white sm:text-base"
    >
      {{ props.label }}
    </label>
    <span
      class="w-44 truncate px-2 py-3 text-center text-xs sm:w-80 sm:text-base"
      >{{ changeName }}</span
    >
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps(['label'])
const emit = defineEmits(['image'])

const nameInput = ref('')

const changeName = computed(() => {
  return nameInput.value ? nameInput.value : 'Nenhum arquivo encontrado'
})

const onFilesChanges = (event) => {
  nameInput.value = event.target.files[0].name
  emit('image', event.target.files[0])
}
</script>
