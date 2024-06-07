<script setup lang="ts">
import type { T_ProductVariant } from '~/types';

const props = defineProps<{
    variant: T_ProductVariant
}>()
</script>

<template>
    <div class="variant-item">
        <label :for="`f_variants[${variant.id}][name]`">
            <input type="text" :name="`f_variants[${variant.id}][name]`" :id="`f_variants[${variant.id}][name]`"
                v-model="variant.name">
        </label>
        <label :for="`f_variants[${variant.id}][price]`">
            <input type="text" :name="`f_variants[${variant.id}][price]`" :id="`f_variants[${variant.id}][price]`"
                v-model="variant.price">
        </label>
        <SharedInputFile :name="`f_variants[${variant.id}][photo]`" v-model:photo="variant.photo" />
        <label for="f_variants[][checked]">
            Включён
            <input type="checkbox" :checked="variant.checked" :name="`f_variants[${variant.id}][checked]`"
                :id="`f_variants[${variant.id}][checked]`" v-model="variant.checked">
        </label>
    </div>
</template>

<style>
.variant-item {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
}
</style>