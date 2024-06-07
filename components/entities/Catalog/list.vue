<script lang="ts" setup>
import type { T_Catalog } from '~/types';

defineProps<{ catalog: T_Catalog }>()
</script>

<template>
    <div class="catalog-item">
        list
        <NuxtLink :to="`/catalog/${catalog.slug}`">{{ catalog.name }}</NuxtLink>
    </div>
</template>

<style></style>