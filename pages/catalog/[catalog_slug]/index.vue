<script setup lang="ts">
import type { T_Product } from '~/types';

const router = useRouter()
const { data: products, error, status } = await useFetch<T_Product[]>('/api/product', {
  onRequestError({ request, options, error }) {
    router.push({ path: '/catalog' })
  },
})

</script>

<template>
  <div class="section">
    <div class="section-body max-width">
      <h1>Catalog sub page</h1>
      <EntitiesProductsGrid :products v-if="products" />
      <div v-else>
        <pre>{{ error }}</pre>
      </div>
    </div>
  </div>
</template>