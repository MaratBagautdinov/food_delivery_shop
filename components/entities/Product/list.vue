<script lang="ts" setup>
import type { T_Product } from '~/types';
const route = useRoute()
defineProps<{ product: T_Product }>()
</script>

<template>
    <div class="product-item product-item--list">
        <SharedEditButton :link="`/catalog/${product.Catalog.slug}/${product.slug}`" />
        <NuxtLink :to="`/catalog/${product.Catalog.slug}/${product.slug}`">{{ product.name }}</NuxtLink>
    </div>
</template>

<style></style>