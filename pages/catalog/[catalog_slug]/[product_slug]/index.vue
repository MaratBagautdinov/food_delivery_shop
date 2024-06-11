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
    <WidgetsCrumbs :crumbs="[{
        label: 'Каталог',
        url: '/catalog'
    },
    {
        label: `${product?.Catalog.name}`,
        url: `/catalog/${product?.Catalog.slug}`
    },
    {
        label: `${product?.name}`,
        url: `/catalog/${product?.Catalog.slug}/${product?.slug}`
    }
    ]" />
    <div class="section">
        <div class="section-body max-width">
            <EntitiesProductFull v-if="product" :product />
            <div v-else>
                <pre>{{ error }}</pre>
            </div>
        </div>
    </div>
</template>