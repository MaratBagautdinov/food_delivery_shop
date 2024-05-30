<script setup lang="ts">
import type { T_Subdivision } from '~/types';

const { data: subdivisions } = await useFetch<T_Subdivision[]>('/api/catalog')
</script>

<template>
  <div class="section">
    <div class="section-body max-width">
      <h1>Catalog page</h1>
      <EntitiesCatalogGrid :subdivisions v-if="subdivisions" />
      <span class="emptyList" v-else>Каталог пуст</span>
    </div>
  </div>
</template>