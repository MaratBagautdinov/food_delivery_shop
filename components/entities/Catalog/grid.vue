<script lang="ts" setup>
import type { T_Catalog } from '~/types';

defineProps<{ catalog: T_Catalog }>()
</script>

<template>
    <div class="catalog-item">
        <SharedEditButton :link="`/catalog/${catalog.slug}`" />
        <NuxtLink :to="`/catalog/${catalog.slug}`">
            <span class="catalog-photo"><img :src="catalog.photo ?? '/entities/products/default.png'" alt=""></span>
            <span class="catalog-name">{{ catalog.name }}</span>
        </NuxtLink>
    </div>
</template>

<style>
.catalog-item {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #00000030;
}
</style>