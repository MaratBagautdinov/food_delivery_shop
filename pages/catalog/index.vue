<script setup lang="ts">
import type { T_Catalog } from '~/types';

const { data: catalogs } = await useFetch<T_Catalog[]>('/api/catalog')
</script>

<template>
  <div class="section">
    <div class="section-body max-width">
      <h1>Catalog page</h1>
      <WidgetsCatalogsGrid :catalogs v-if="catalogs" />
      <span class="emptyList" v-else>Каталог пуст</span>
    </div>
  </div>
</template>