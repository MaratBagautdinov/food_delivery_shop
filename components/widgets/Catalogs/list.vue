<script lang="ts" setup>
import type { T_Catalog } from '~/types';

defineProps<{ catalogs: T_Catalog[] }>()
</script>

<template>
    <div class="catalog-list">
        <EntitiesCatalogList v-for="catalog in catalogs" :catalog :key="catalog.id" />
    </div>
</template>

<style></style>