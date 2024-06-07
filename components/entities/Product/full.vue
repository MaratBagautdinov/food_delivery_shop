<script setup lang="ts">
import type { T_Product } from '~/types';
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
        <SharedEditButton :link="route.path" />
        <WidgetsModal :modal-head="product.name" v-if="route.query.action">
            <EntitiesProductEditForm :product v-if="route.query.action === 'edit'" />
        </WidgetsModal>
        <h2>Name: {{ product.name }}</h2>
        <div class="offer">
            <div class="variant-list" v-if="product.variants.length > 1">
                <div clsss='variant-item' v-for="variant in product.variants">
                    <NuxtLink v-if="variant.checked" :to="{ path: product.slug, query: { variant: variant.id } }">{{
                        variant.name }} {{
                            variant.price }} руб</NuxtLink>
                </div>
            </div>
            <div class="varint-wrap" v-if="variant">
                <div class="price">
                    {{ variant.price }} руб
                </div>
                <div class="gallery">
                    <img :src="!!variant.photo ? variant.photo : '/entities/products/default.png'" :alt="product.name">
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.gallery {
    width: 500px;
    height: 400px;
}

.gallery img {
    max-width: 100%;
    max-height: 100%;
}
</style>