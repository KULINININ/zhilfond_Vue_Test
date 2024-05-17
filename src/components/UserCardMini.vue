<template>
  <div
    class="user-card-mini grid grid-cols-3 rounded-lg shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)] cursor-pointer truncate"
    :class="active ? 'bg-[#f5f5f5]' : ''"
  >
    <div class="user-card-mini__image col-span-1 p-4 border-r-2 border-gray-200">
      <img src="https://via.placeholder.com/200/92c952" alt="user" />
    </div>
    <div class="user-card-mini__info col-span-2 p-4">
      <div class="user-card-mini__name font-bold">{{ username }}</div>
      <div class="user-card-email text-gray-500">{{ email }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
})
</script>
