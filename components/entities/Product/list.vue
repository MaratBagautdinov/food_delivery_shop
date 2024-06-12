<script setup lang="ts">
import type { T_Catalog, T_Order, T_Order_Item, T_OrderStatus, T_Product, T_ProductVariant } from '~/types';
const route = useRoute()
const props = defineProps<{ orderItem: T_Order_Item, order_status: T_Order['status_id'] }>()
const url = `/api/product/${props.orderItem.product_id}/${props.orderItem.variant_id}`

const { data: product } = await useLazyFetch<T_Product & { variant: T_ProductVariant, Catalog: T_Catalog }>(url)
const linkProduct = computed(() => product.value ? `/catalog/${product.value?.Catalog?.slug}/${product.value?.slug}?variant=${product.value?.variant.id}` : '/')
</script>

<template>
    <div class="product-item product-item--list" v-if="product">
        <NuxtLink :to="linkProduct" class="product-img"
            :style="{ backgroundImage: `url(${!!product.variant.photo ? product.variant.photo : '/entities/products/default.png'})` }">
        </NuxtLink>
        <h3 class="product-name">
            <NuxtLink :to="linkProduct">{{ product.name }}: <span>{{
                product.variant?.name }}</span> </NuxtLink>
            <div class="price">{{ product.variant.price }} руб</div>
        </h3>
        <!-- <EntitiesProductCartActions v-if="product.variant.id && order_status == 0" :variant="product.variant"
            :product_id="product.id" :isCount="false" /> -->
    </div>
</template>

<style scoped>
.product-item--list {
    padding: 10px;
    gap: 5px;
    display: grid;
    grid-template-columns: 100px auto;
    width: 300px;
    box-shadow: 0 0 10px 0 #00000030;
    scale: 1;
    transition: .3s;
}

.product-item--list h3 {
    margin: 0;
}

.product-item--list h3 span {
    font-weight: 400;
}

.product-img {
    height: 100px;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
}
</style>