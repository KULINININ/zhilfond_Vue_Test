<template>
  <!-- <div class="user-card">
    <div class="font-bold text-[#333333]">Выберите сотрудника, чтобы посмотреть его профиль</div>
  </div> -->
  <div class="user-card grid grid-cols-2" v-if="user">
    <div class="user-card__image col-span-1 p-4">
      <img src="https://via.placeholder.com/600/92c952" alt="user" />
    </div>
    <div class="user-card__info col-span-1 p-4 space-y-4">
      <div class="user-card__info-main">
        <div class="user-card__info-main__name font-bold">{{ user.name }}</div>
        <div class="user-card__info-main__email text-gray-500">{{ user.email }}</div>
        <div class="user-card__info-main__phone text-gray-500">{{ user.phone }}</div>
      </div>
      <div class="user-card__info-about__title text-2xl">О себе</div>
      <div class="user-card__info-about__text text-gray-500">
        {{ user }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object
  }
})
</script>
