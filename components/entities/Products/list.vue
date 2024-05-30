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

<style></style>