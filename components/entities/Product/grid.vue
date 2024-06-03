<script setup lang="ts">
import type { T_Product } from '~/types';
const route = useRoute()
defineProps<{ product: T_Product }>()

</script>

<template>
    <div class="product-item product-item--grid">
        <SharedEditButton :link="`/catalog/${route.params.catalog_slug}/${product.slug}`" />
        <NuxtLink :to="`/catalog/${route.params.catalog_slug}/${product.slug}`">{{ product.name }}</NuxtLink>
    </div>
</template>

<style>
.product-item {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #00000030;
}
</style>