<script setup lang="ts">
defineProps<{
    link: string
}>()
</script>

<template>
    <NuxtLink :to="`${link}?edit=1`">edit</NuxtLink>
</template>

<style></style>