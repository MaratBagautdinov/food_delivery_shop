<script lang="ts" setup>
import type { T_ProductVariant } from '~/types';

const variants = defineModel<T_ProductVariant[]>('variants')
const addVariant = () => {
    variants.value = [...variants?.value, {
        checked: true,
        id: Number(new Date),
        name: '',
        photo: '',
        price: 0,
        slug: ''
    }]
}
</script>

<template>
    <div class="varints-list">
        <EntitiesProductEditFormVariant v-for="variant in variants" :variant />
        <button class="create-variant-btn" @click="addVariant">Создать вариант</button>
    </div>
</template>
<style scoped>
.variants-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
}
</style>