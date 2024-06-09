<script setup lang="ts">
defineProps<{
    label: string
    name: string
}>()
const value = defineModel('value')
</script>
<template>
    <label :for="name">
        <span>{{ label }}</span>
        <input type="text" :name id="f_type_delivery" :id="name" v-model.trim="value" />
    </label>
</template>