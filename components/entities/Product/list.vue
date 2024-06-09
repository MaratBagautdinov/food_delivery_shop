<script setup lang="ts">
import type { T_Catalog, T_Order, T_Order_Item, T_OrderStatus, T_Product, T_ProductVariant } from '~/types';
const route = useRoute()
const props = defineProps<{ orderItem: T_Order_Item, order_status: T_Order['status_id'] }>()
const url = `/api/product/${props.orderItem.product_id}/${props.orderItem.variant_id}`

const { data: product } = await useFetch<T_Product & { variant: T_ProductVariant, Catalog: T_Catalog }>(url)
</script>

<template>
    <div class="product-item product-item--list" v-if="product">
        <NuxtLink :to="`/catalog/${product?.Catalog?.slug}/${product.slug}`" class="product-img"
            :style="{ backgroundImage: `url(${!!product.variants[0].photo ? product.variants[0].photo : '/entities/products/default.png'})` }">
        </NuxtLink>
        <h3 class="product-name">
            <NuxtLink :to="`/catalog/${product?.Catalog?.slug}/${product.slug}`">{{ product.name }}: {{
                product.variant?.name }}</NuxtLink>
            <div class="price">{{ product.variant.price }} руб</div>
        </h3>
        <EntitiesProductCartActions v-if="product.variant.id && order_status == 0" :variant="product.variant"
            :product_id="product.id" :isCount="false" />
    </div>
</template>

<style scoped>
.product-item--list {
    display: grid;
    grid-template-columns: 100px 200px auto
}

.product-item--list h3 {
    margin: 0;
}

.product-img {
    height: 100px
}
</style>