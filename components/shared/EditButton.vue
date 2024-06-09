<script setup lang="ts">
import { useUserStore } from '~/store';

defineProps<{
    link: string
}>()
const isAdmin = computed(() => useUserStore().user?.name === 'ADMIN')
</script>

<template>
    <NuxtLink v-if="isAdmin" :to="`${link}?action=edit`">edit</NuxtLink>
</template>

<style></style>