<template>
  <div class="user-card" v-if="user">
    <div class="user-card__image">
      <img src="https://via.placeholder.com/600/92c952" alt="user" />
    </div>
    <div class="user-card__info">
      <div class="user-card__info-main">
        <div class="user-card__info-main__name">{{ user.name }}</div>
        <div class="user-card__info-main__email">
          <span class="user-card__info-main__email-title">email: </span>
          <span class="user-card__info-main__email-value">{{ user.email }}</span>
        </div>
        <div class="user-card__info-main__phone">
          <span class="user-card__info-main__phone-title">phone: </span>
          <span class="user-card__info-main__phone-value">{{ user.phone }}</span>
        </div>
      </div>
      <div class="user-card__info-about__title">О себе:</div>
      <div class="user-card__info-about__value">
        {{ user }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const user = computed(() => store.state.selectedUser)
</script>

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
    img {
      width: 100%;
    }
  }

  &__info {
    @include space-y-4;
    padding: 1rem;
    grid-column: span 1 / span 1;

    &-main {
      @include space-y-2;

      &__name {
        font-weight: 700;
      }

      &__email {
        &-title {
          font-weight: 700;
        }

        &-value {
          color: var(--text-secondary);
        }
      }

      &__phone {
        &-title {
          font-weight: 700;
        }
        &-value {
          color: var(--text-secondary);
        }
      }
    }

    &-about {
      &__title {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
      }

      &__value {
        color: var(--text-secondary);
      }
    }
  }
}
</style>
