<script
    setup
    lang="ts"
>
    import type { T_ProductVariant } from '~/types';

    const props = defineProps<{
        variant: T_ProductVariant
    }>()
</script>

<template>
    <div class="variant-item">
        <SharedInputFile
            :name="`f_variants[${variant.id}][photo]`"
            v-model:photo="variant.photo"
        />
        <label :for="`f_variants[${variant.id}][name]`">
            <input
                type="text"
                :name="`f_variants[${variant.id}][name]`"
                :id="`f_variants[${variant.id}][name]`"
                v-model="variant.name"
            >
        </label>
        <label :for="`f_variants[${variant.id}][price]`">
            <input
                type="number"
                :name="`f_variants[${variant.id}][price]`"
                :id="`f_variants[${variant.id}][price]`"
                v-model="variant.price"
            >
        </label>
        <SharedCheckedInput
            v-model:checked="variant.checked"
            :name="`f_variants[${variant.id}][checked]`"
        >
            {{ variant.checked ?
                ("Включён")
                : ("Выключен") }}
        </SharedCheckedInput>
    </div>
</template>
<style scoped>
    .variant-item {
        display: flex;
        gap: 10px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid black;
    }
</style>
