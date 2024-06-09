<script setup lang="ts">
defineProps<{
    link: string
}>()
</script>

<template>
    <NuxtLink class="btn-admin" :to="`${link}?action=create`"><button>Создать</button></NuxtLink>
</template>

<style></style>