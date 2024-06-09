<script setup lang="ts">
defineProps<{
    name: string
}>()
const checked = defineModel('checked')
</script>

<template>
    <label :for="name">
        <span>{{ checked ? "Включён" : "Выключен" }}</span>
        <input type="checkbox" :name :checked="!!checked" :id="name" v-model="checked">
    </label>
</template>
<style scoped>
label {
    display: flex;
    flex-direction: row;
    gap: 10px
}
</style>