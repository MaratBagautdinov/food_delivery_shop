<template>
    <NuxtLink class='variant-item'
        :to="{ path: `/catalog/${product.Catalog.slug}/${product.slug}`, query: { variant: variant.id } }">
        <button :class="classActive">{{
            variant.name }} {{
                variant.price }} руб</button>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { T_Product, T_ProductVariant } from '~/types';
const classActive = computed(() => String(props.variant.id) == useRoute().query.variant ? 'active' : '')
const props = defineProps<{
    product: T_Product,
    variant: T_ProductVariant
}>()
</script>

<style></style>