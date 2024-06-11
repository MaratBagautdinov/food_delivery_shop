<script setup lang="ts">
import type { T_Product } from '~/types';
const route = useRoute()
const props = defineProps<{ product: T_Product }>()
const variant = computed(() => {
    return props.product.variants.find((p) => p.id === Number(route.query.variant))
})
</script>

<template>
    <div class="product-item product-item--grid">
        <SharedEditButton :link="`/catalog/${product.Catalog.slug}/${product.slug}`" />
        <NuxtLink :to="`/catalog/${product.Catalog.slug}/${product.slug}`">
            <div class="product-img"
                :style="{ backgroundImage: `url(${!!product.variants[0].photo ? product.variants[0].photo : '/entities/products/default.png'})` }">
            </div>
            <h3 class="product-name">{{ product.name }}</h3>
            <EntitiesProductVariantList :variants="product.variants" :product="product" />
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
    height: 250px;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
}
</style>