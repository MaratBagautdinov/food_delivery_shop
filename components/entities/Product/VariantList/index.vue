<script lang="ts" setup>
import type { T_Product, T_ProductVariant } from '~/types';

const props = defineProps<{
    variants: T_ProductVariant[],
    product: T_Product
}>()
const variantsChecked = computed(() => {
    return props.variants.filter((v) => v.checked)
})
</script>

<template>
    <div class="variant-list">
        <EntitiesProductVariantListItem v-for="variant in variantsChecked" :variant :product />
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