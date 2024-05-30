<script setup lang="ts">
import type { T_Order } from '~/types';

const { data } = await useFetch<T_Order[]>('/api/order')
</script>

<template>
  <div class="section">
    <div class="section-body max-width">
      <h1>Orders page</h1>
      <div v-for="order in data">
        <div>{{ order.sum }}</div>
        <pre>{{ order.items }}</pre>
      </div>
    </div>
  </div>
</template>