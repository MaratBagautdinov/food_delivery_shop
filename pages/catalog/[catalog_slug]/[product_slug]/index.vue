<script setup lang="ts">
import type { T_Product } from '~/types';

const route = useRoute()
const router = useRouter()
const { data: product, error, status } = await useFetch<T_Product>(`/api/product/${route.params.product_slug}`, {
    onRequestError({ request, options, error }) {
        router.push({ path: '/catalog' })
    },
})
if (!route.params.variant) {
    router.push({ path: product?.value?.slug, query: { variant: product?.value?.variants[0].id } })
}
</script>

<template>
    <h1>Product page</h1>
    <div v-if="product" class="product">
        <h2>Name: {{ product.name }}</h2>
        <div class="offer">
            <div class="varints" v-if="product.variants.length > 1">
                <div v-for="variant in product.variants">
                    <NuxtLink :to="{ path: product.slug, query: { variant: variant.id } }">{{ variant.name }} {{
                        variant.price }} руб</NuxtLink>
                </div>
            </div>
            <div class="price" v-else>
                {{ product.variants[0].price }} руб
            </div>
        </div>
    </div>
    <div v-else>
        <pre>{{ error }}</pre>
    </div>
</template>