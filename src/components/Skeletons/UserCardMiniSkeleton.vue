<template>
  <div class="user-card-mini">
    <div class="user-card-mini__image">
      <img src="https://via.placeholder.com/200/92c952" />
    </div>
    <div class="user-card-mini__info">
      <div class="user-card-mini__info-name">{{}}</div>
      <div class="user-card-mini__info-email">{{}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.user-card-mini {
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  cursor: pointer;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  display: grid;

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
