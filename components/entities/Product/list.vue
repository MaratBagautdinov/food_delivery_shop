<script lang="ts" setup>
import type { T_Product } from '~/types';
const route = useRoute()
defineProps<{ product: T_Product }>()
</script>

<template>
    <div class="product-item product-item--list">
        <SharedEditButton :link="`/catalog/${route.params.catalog_slug}/${product.slug}`" />
        <NuxtLink :to="`/catalog/${route.params.catalog_slug}/${product.slug}`">{{ product.name }}</NuxtLink>
    </div>
</template>

<style></style>