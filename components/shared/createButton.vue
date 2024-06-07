<script setup lang="ts">
defineProps<{
    link: string
}>()
</script>

<template>
    <NuxtLink :to="`${link}?action=create`">create</NuxtLink>
</template>

<style></style>