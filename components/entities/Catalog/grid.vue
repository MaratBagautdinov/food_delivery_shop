<script lang="ts" setup>
import type { T_Catalog } from '~/types';

defineProps<{ catalog: T_Catalog }>()
</script>

<template>
    <NuxtLink :to="`/catalog/${catalog.slug}`" class="catalog-item" :style="{backgroundImage: `url(${catalog.photo})`}">
        <h3 class="catalog-name">{{ catalog.name }}</h3>
    </NuxtLink>
</template>

<style>
.catalog-item h3{
    color: #ffffff
}
.catalog-item {
    width: 100%;
    height: 200px;
    background-color: #000000;
    background-position: center;
    background-size: cover;
    margin: 20px 0;
    overflow: hidden;
    border-radius: 30px;
    display: flex;
    color: #ffffff;
    box-sizing: border-box;
    padding: 20px;
}
</style>