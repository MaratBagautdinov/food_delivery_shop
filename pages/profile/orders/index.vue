<script setup lang="ts">
import { useUserStore } from '~/store';

const userStore = useUserStore()
</script>

<template>
  <div class="section">
    <div class="section-body max-width">
      <h1>Orders page</h1>
      <div class="orders-list" v-if="userStore.orders.length > 0">
        <div v-for="order in userStore.orders">
          <div>{{ order.sum }}</div>
          <pre>{{ order.items }}</pre>
        </div>
      </div>
      <div v-else>Заказов не найдено. Перейдите в <NuxtLink to="/catalog">меню</NuxtLink>
      </div>
    </div>
  </div>
</template>