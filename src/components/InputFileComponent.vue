<template>
  <div class="flex items-center overflow-hidden rounded-md border">
    <input type="file" id="fileInput" @change="onFilesChanges" class="hidden" />
    <label for="fileInput" class="min-w-32 bg-gray-500 px-2 py-3">
      {{ props.label }}
    </label>
    <span class="truncate px-2 py-3">{{ changeName }}</span>
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
