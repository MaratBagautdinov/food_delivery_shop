<script setup lang="ts">
import type { T_Product } from '~/types';
const route = useRoute()
defineProps<{ product: T_Product }>()

</script>

<template>
    <div class="product-item product-item--grid">
      <pre>{{product.catalog }}</pre>
        <SharedEditButton :link="`/catalog/${route.params.catalog_slug}/${product.slug}`" />
        <NuxtLink :to="`/catalog/${route.params.catalog_slug}/${product.slug}`">
            <img class="product-img"
                :src="!!product.variants[0].photo ? product.variants[0].photo : '/entities/products/default.png'"
                alt="">
            <h3 class="product-name">{{ product.name }}</h3>
        </NuxtLink>
    </div>
</template>

<style>
.product-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #00000030;
}

.product-img {
    width: 100%;
}
</style>