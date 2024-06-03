<script setup lang="ts">
import type { T_Product } from '~/types';
const route = useRoute()
const props = defineProps<{
    product: T_Product
}>()

const variant = route.query.variant ? props.product.variants.find((p) => p.id === Number(route.query.variant)) : null

</script>

<template>
    <div class="product">
        <SharedEditButton :link="route.path" />
        <WidgetsModal :modal-head="product.name" v-if="route.query.edit">
            <EntitiesProductEditForm :product />
        </WidgetsModal>
        <h2>Name: {{ product.name }}</h2>
        <div class="offer">
            <div class="varint-wrap" v-if="variant">
                <div class="varints" v-if="product.variants.length > 1">
                    <div v-for="variant in product.variants">
                        <NuxtLink v-if="variant.checked" :to="{ path: product.slug, query: { variant: variant.id } }">{{
                            variant.name }} {{
                                variant.price }} руб</NuxtLink>
                    </div>
                </div>
                <div class="price" v-else>
                    {{ variant.price }} руб
                </div>
                <div class="gallery">
                    <img :src="!!variant.photo ? variant.photo : '/entities/products/default.png'" :alt="product.name">
                </div>
            </div>
        </div>
    </div>
</template>