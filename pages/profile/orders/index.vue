<script setup lang="ts">
import type { T_Order } from '~/types';

const { data } = await useFetch<T_Order[]>('/api/order')
</script>

<template>
  <h1>Orders page</h1>
  <div v-for="order in data">
    <div>{{ order.sum }}</div>
    <pre>{{ order.items }}</pre>
  </div>
</template>