<script setup lang="ts">
defineProps<{
    label: string
    name: string
    required?: boolean
}>()
const value = defineModel('value')
</script>
<template>
    <label :for="name">
        <span>{{ label }}</span>
        <textarea :required :name :id="name" v-model.trim="value" />
    </label>
</template>