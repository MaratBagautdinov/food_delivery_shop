<script lang="ts" setup>
import type { T_Product, T_ProductVariant } from '~/types';

const props = defineProps<{
    variants: T_ProductVariant[],
    product: T_Product
}>()

</script>

<template>

    <div class="variant-list">
        <NuxtLink class='variant-item' v-for="variant in variants"
            :to="{ path: `/catalog/${product.Catalog.slug}/${product.slug}`, query: { variant: variant.id } }">
            <button>{{
                variant.name }} {{
                    variant.price }} руб</button>
        </NuxtLink>
    </div>
</template>
<style>
.variant-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.variant-item,
.variant-item button {
    width: 100%;
}
</style>