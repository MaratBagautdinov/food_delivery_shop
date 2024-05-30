<script lang="ts" setup>
import type { T_Subdivision } from '~/types';

defineProps<{ subdivisions: T_Subdivision[] }>()
</script>

<template>
    <div class="catalog-list">
        <div v-for="sub in subdivisions">
            <NuxtLink :to="`/catalog/${sub.slug}`">{{ sub.name }}</NuxtLink>
        </div>
    </div>
</template>

<style></style>