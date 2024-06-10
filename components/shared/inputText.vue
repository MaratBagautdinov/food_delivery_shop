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
        <input type="text" :required :name :id="name" v-model.trim="value" />
    </label>
</template>