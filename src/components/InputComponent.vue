<template>
  <div class="flex flex-col gap-2">
    <label :for="props.id">{{ props.label }}</label>
    <input
      class="w-72 rounded-md border bg-transparent px-2 py-3 max-md:w-52 max-sm:w-36"
      :type="props.type"
      :id="props.id"
      :required="props.required"
      aria-required="true"
      :placeholder="props.placeholder"
      v-model="model"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  type: String,
  id: String,
  required: Boolean,
  placeholder: String,
})

const model = defineModel()
</script>
