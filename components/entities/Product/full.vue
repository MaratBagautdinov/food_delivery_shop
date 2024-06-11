<script setup lang="ts">
import { useUserStore } from '~/store';
import type { T_Order, T_Product } from '~/types';
const route = useRoute()
const props = defineProps<{
    product: T_Product
}>()

const variant = computed(() => {
    return props.product.variants.find((p) => p.id === Number(route.query.variant))
})
</script>

<template>
    <div class="product">
        <SharedEditButton :link="`/catalog/${product.Catalog.slug}/${product.slug}`" />
        <WidgetsModal :modal-head="product.name" v-if="route.query.action">
            <EntitiesProductEditForm :product v-if="route.query.action === 'edit'" />
        </WidgetsModal>
        <h1>{{ product.Catalog.name }}: {{ product.name }}</h1>
        <div class="product-wrap">
            <div class="gallery">
                <img :src="!!variant?.photo ? variant.photo : '/entities/products/default.png'" :alt="product.name">
            </div>
            <div class="offer">
                <EntitiesProductVariantList v-if="product.variants.length > 1" :variants="product.variants"
                    :product="product" />
                <EntitiesProductCartActions v-if="variant" :variant :product_id="product.id" :isCount="true" />
                <div class="desc" v-if="product?.desc">
                    {{ product.desc }}
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.gallery {
    width: 100%;
    overflow: hidden;
    border-radius: 15px
}

.gallery img {
    max-width: 100%;
    max-height: 100%;
}

.product-wrap {
    display: grid;
    gap: 30px;
    grid-template-columns: 400px auto
}

.offer {
    display: flex;
    gap: 10px;
    flex-direction: column;
}

.varint-wrap {
    gap: 10px;
    display: flex;
    align-items: center
}

.varint-wrap .price {
    font-weight: 500;
    font-size: larger;
}

.desc {
    font-size: 16px;
    line-height: 1.2;
}
</style>