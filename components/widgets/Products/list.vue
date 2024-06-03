<script lang="ts" setup>
import type { T_Product } from '~/types';
const route = useRoute()
defineProps<{ products: T_Product[] }>()
</script>

<template>
    <div class="products-list products-list--list">
        <EntitiesProductList v-for="product in products" :product />
    </div>
</template>

<style scoped>
.products-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}
</style>