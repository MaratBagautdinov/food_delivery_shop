<script setup lang="ts">
import { useUserStore } from '~/store';

const userStore = useUserStore()
</script>

<template>
  <div class="section">
    <div class="section-body max-width">
      <h1>Заказы</h1>
      <table class="orders-list" v-if="userStore.orders.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>СТАТУС</th>
            <th>СУММА</th>
            <th>ТОВАРЫ (шт)</th>
            <th></th>
          </tr>
        </thead>
        <EntitiesOrderRow v-for="order in userStore.orders" :order />
      </table>
      <div v-else>Заказов не найдено. Перейдите в <NuxtLink to="/catalog">меню</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style>
.orders-list {
  width: 100%;
}
</style>