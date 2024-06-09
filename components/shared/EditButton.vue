<script setup lang="ts">
import { useUserStore } from '~/store';

defineProps<{
    link: string
}>()
const isAdmin = computed(() => useUserStore().user?.name === 'ADMIN')
</script>

<template>
    <NuxtLink class="btn-admin" v-if="isAdmin" :to="`${link}?action=edit`"><button>Редактировать</button></NuxtLink>
</template>

<style></style>