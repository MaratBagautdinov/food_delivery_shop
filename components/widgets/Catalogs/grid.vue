<script lang="ts" setup>
import type { T_Catalog } from '~/types';

defineProps<{ catalogs: T_Catalog[] }>()
</script>

<template>
    <div class="catalog-list">
        <EntitiesCatalogGrid v-for="catalog in catalogs" :catalog :key="catalog.id" />
    </div>
</template>

<style>
.catalog-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
</style>