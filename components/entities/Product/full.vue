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
const inCartHandler = () => {
    status.value = 'pending'
    if (useUserStore().user?.id) {
        $fetch<T_Order[]>('/api/order/addProduct', {
            query: {
                user_id: useUserStore().user?.id,
                product_id: props.product.id,
                variant_id: variant.value?.id,
            }
        }).then(res => {
            console.log(res);
            useUserStore().orders = res
            status.value = 'fullfield'
        })
    }
}
const outCartHandler = () => {
    status.value = 'pending'
    $fetch('/api/order/delProduct', {
        query: {
            user_id: useUserStore().user?.id,
            product_id: props.product.id,
            variant_id: variant.value?.id,
        }
    }).then(res => {
        console.log(res);
        useUserStore().orders = res
        status.value = 'fullfield'
    })
}
const inCartCount = computed(() => {
    const newOrder = useUserStore().orders.find(o => {
        return o.status_id == 0
    })
    if (!newOrder) return 0
    return newOrder.items.reduce((prev, current) => prev + Number(current.product_id == props.product.id && current.variant_id == variant.value?.id), 0)
})
const status = ref<'pending' | 'rejected' | 'fullfield'>('fullfield')
</script>

<template>
    <div class="product">
        <SharedEditButton :link="`/catalog/${product.Catalog.slug}/${product.slug}`" />
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
                <button @click="outCartHandler" :disabled="status === 'pending' || !inCartCount">-</button>
                {{ inCartCount }}
                <button @click="inCartHandler" :disabled="status === 'pending'">+</button>
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