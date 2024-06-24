<script
    setup
    lang="ts"
>
    defineProps<{
        name: string
        required?: boolean
    }>()
    const checked = defineModel('checked')
</script>

<template>
    <label :for="name">
        <input
            type="checkbox"
            :name
            :required
            :checked="!!checked"
            :id="name"
            v-model="checked"
        >
        <span>
            <slot />
        </span>
    </label>
</template>
<style scoped>
    label {
        display: flex;
        flex-direction: row;
        gap: 10px
    }
</style>