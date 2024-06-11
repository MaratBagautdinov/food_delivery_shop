<script setup lang="ts">

import type { T_Catalog, T_Product } from '~/types';

const { data: catalogs } = await useLazyFetch<T_Catalog[]>('/api/catalog')
const { data: products } = await useLazyFetch<T_Product[]>('/api/product/all')
</script>

<template>
  <WidgetsBanner />
  <div class="section">
    <div class="section-body max-width">
      <h2>Каталог</h2>
      <WidgetsCatalogsGrid v-if="catalogs" :catalogs />
    </div>
  </div>
  <div class="section">
    <div class="section-body max-width">
      <h2>Блюда</h2>
      <WidgetsProductsGrid v-if="products" :products />
    </div>
  </div>
</template>

<style></style>