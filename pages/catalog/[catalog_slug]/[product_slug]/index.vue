<script setup lang="ts">
import type { T_Product } from '~/types';

const route = useRoute()
const router = useRouter()
const { data: product, error, status } = await useLazyFetch<T_Product>(`/api/product/${route.params.product_slug}`, {
    onResponseError({ request, options, error }) {
        router.push({ path: '/catalog' })
    },
    onResponse({ response: { _data } }) {
        const varParam = route.query.variant
        console.log(varParam);
        if (!varParam || !_data.variants.find((v) => v.id == varParam)) {
            const variant_id = _data.variants[0].id
            console.log(variant_id);
            router.replace({ path: route.fullPath, query: { ...route.query, variant: variant_id } })
        }
    },
})



</script>

<template>
    <WidgetsCrumbs v-if="product" :crumbs="[{
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
