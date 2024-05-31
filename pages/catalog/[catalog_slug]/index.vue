<script setup lang="ts">
import type { T_Catalog, T_Product } from '~/types';
const route = useRoute()
const router = useRouter()
const { data: catalog } = await useFetch<T_Catalog>(`/api/catalog/${route.params.catalog_slug}`, {
  onRequestError({ request, options, error }) {
    router.push({ path: '/catalog' })
  },
})

const { data: products } = await useFetch<T_Product[]>(`/api/product?catalog_id=${catalog.value?.id}`, {
  onRequestError({ request, options, error }) {
    router.push({ path: '/catalog' })
  },
})

</script>

<template>
  <div class="section">
    <div class="section-body max-width" v-if="catalog">
      <h1>Catalog sub page: {{ catalog.name }}</h1>
      <EntitiesProductsGrid :products v-if="products" />
    </div>
  </div>
</template>