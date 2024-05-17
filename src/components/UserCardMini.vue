<template>
  <div class="user-card-mini" :class="active ? 'bg-[#f5f5f5]' : ''">
    <div class="user-card-mini__image">
      <img src="https://via.placeholder.com/200/92c952" alt="user" />
    </div>
    <div class="user-card-mini__info">
      <div class="user-card-mini__info-name">{{ username }}</div>
      <div class="user-card-mini__info-email">{{ email }}</div>
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

<style scoped lang="scss">
.user-card-mini {
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  cursor: pointer;
  display: grid;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 120px;

  &__image {
    padding: 1rem;
    border-color: rgb(229 231 235);
    border-right-width: 2px;
    grid-column: span 1 / span 1;

    img {
      width: 100%;
      max-height: 80px;
      max-width: 80px;
    }
  }

  &__info {
    grid-column: span 2 / span 2;
    padding: 1rem;

    &-name {
      font-weight: 700;
    }

    &-email {
      color: var(--text-secondary);
    }
  }
}
</style>
