<script lang="ts" setup>
import type { T_Product } from '~/types';
const route = useRoute()
defineProps<{ products: T_Product[] }>()
</script>

<template>
    <div class="products-list">
        <div class="product-item" v-for="product in products">
            <NuxtLink :to="`/catalog/${route.params.catalog_slug}/${product.slug}`">{{ product.name }}</NuxtLink>
        </div>
    </div>
</template>

<style>
.products-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.product-item {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #00000030;
}
</style>