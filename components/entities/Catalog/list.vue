<script lang="ts" setup>
import type { T_Catalog } from '~/types';

defineProps<{ catalogs: T_Catalog[] }>()
</script>

<template>
    <div class="catalog-list">
        <div class="catalog-item" v-for="sub in catalogs">
            <NuxtLink :to="`/catalog/${sub.slug}`">{{ sub.name }}</NuxtLink>
        </div>
    </div>
</template>

<style></style>