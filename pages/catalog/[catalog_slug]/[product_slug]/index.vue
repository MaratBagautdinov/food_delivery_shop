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
    navigateTo({ path: product?.value?.slug, query: { ...route.query, variant: product?.value?.variants[0].id } })
}

</script>

<template>
    <div class="section">
        <div class="section-body max-width">
            <h1>Товар</h1>
            <EntitiesProductFull v-if="product" :product />
            <div v-else>
                <pre>{{ error }}</pre>
            </div>
        </div>
    </div>
</template>