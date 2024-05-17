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
  border-width: 1px;
  border-radius: 0.5rem;
  width: 100%;
}
</style>
