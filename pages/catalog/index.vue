<script setup lang="ts">
import type { T_Subdivision } from '~/types';


const { data } = await useFetch<T_Subdivision[]>('/api/catalog')
</script>

<template>
  <h1>Catalog page</h1>
  <div v-for="sub in data">
    <NuxtLink :to="`/catalog/${sub.slug}`">{{ sub.name }}</NuxtLink>
  </div>
</template>