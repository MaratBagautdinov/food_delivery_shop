<script setup lang="ts">
import type { T_Product } from '~/types';

const route = useRoute()
const router = useRouter()
const { data: subdivision, error, status } = await useFetch<T_Product[]>('/api/product', {
  onRequestError({ request, options, error }) {
    // router.push({ path: '/catalog' })
  },
})

</script>

<template>
  <h1>Catalog sub page</h1>
  <div v-if="subdivision">
    <div v-for="product in subdivision">
      <NuxtLink :to="`/catalog/${route.params.catalog_slug}/${product.slug}`">{{ product.name }}</NuxtLink>
    </div>
  </div>
  <div v-else>
    <pre>{{ error }}</pre>
  </div>
</template>