<script lang="ts" setup>
import type { T_Subdivision } from '~/types';

defineProps<{ subdivisions: T_Subdivision[] }>()
</script>

<template>
    <div class="catalog-list">
        <div class="catalog-item" v-for="sub in subdivisions">
            <NuxtLink :to="`/catalog/${sub.slug}`">{{ sub.name }}</NuxtLink>
        </div>
    </div>
</template>

<style>
.catalog-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.catalog-item {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #00000030;
}
</style>