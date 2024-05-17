<template>
  <div class="user-card">
    <div class="user-card__image">
      <img src="https://via.placeholder.com/600/92c952" alt="user" />
    </div>
    <div class="user-card__info">
      <div class="user-card__info-main">
        <div class="user-card__info-main__name">&nbsp;</div>
        <div class="user-card__info-main__email">&nbsp;</div>
        <div class="user-card__info-main__phone">&nbsp;</div>
      </div>
      <div class="user-card__info-about__title">О себе</div>
      <div class="user-card__info-about__value">&nbsp;</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin space-y-2 {
  > * {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
}
@mixin space-y-4 {
  > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
}

.user-card {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;

  &__image {
    padding: 1rem;
    grid-column: span 1 / span 1;
  }

  &__info {
    @include space-y-4;
    padding: 1rem;
    grid-column: span 1 / span 1;

    &-main {
      @include space-y-2;

      & > * {
        background-color: rgb(229 231 235);
      }
    }

    &-about {
      &__title {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
      }

      &__value {
        background-color: rgb(229 231 235);
      }
    }
  }
}
</style>
