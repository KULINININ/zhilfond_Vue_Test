<template>
  <input
    class="base-search"
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

<style scoped lang="scss">
.base-search {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(209 213 219);
  // width: 100%;
  font-family: inherit;
  font-size: 100%;
}
</style>
