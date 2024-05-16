<template>
  <input
    class="search-card__input border rounded-lg p-3 w-full"
    type="text"
    :value="props.value"
    @input="emit('update:value', $event.target.value)"
    placeholder="Введите id или username"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:value'])
</script>
