<template>
  <div class="flex flex-col gap-2">
    <label class="text-xs sm:text-base" :for="props.id">{{
      props.label
    }}</label>
    <input
      class="rounded-md border bg-transparent px-2 py-3 text-xs sm:text-base"
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
