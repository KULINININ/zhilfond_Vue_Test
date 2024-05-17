<template>
  <div class="user-layout">
    <div class="user-layout__header">
      <div class="user-layout__header-logo">Жилфонд</div>
      <div class="user-layout__header-user">Пользователь</div>
    </div>
    <div class="user-layout__content">
      <UserEmploeesView />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserEmploeesView from '@/views/UserEmploeesView.vue'
</script>

<style scoped lang="scss">
.user-layout {
  height: 80%;
  margin: 2.5rem auto 2.5rem auto;
  width: 90%;
  padding: 0 2.5rem 0 2.5rem;

  &__header {
    display: flex;
    justify-content: space-between;

    &-logo {
      color: #e31f24;
      font-weight: 700;
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    &-user {
      color: var(--text-secondary);
    }
  }

  &__content {
    margin-top: 2.5rem;
    height: 100%;
  }
}
</style>
