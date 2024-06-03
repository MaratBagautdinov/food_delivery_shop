<script setup lang="ts">
import type { T_Catalog, T_Product } from '~/types';

const props = defineProps<{ catalog: T_Catalog }>()

const productFields = ref<T_Catalog>(props.catalog)
</script>

<template>
    <form>
        <label for="f_name">
            <span>Наименование</span> <input type="text" name="name" id="f_name" v-model="productFields.name">
        </label>
        <label for="f_slug">
            <span>Slug</span>
            <input type="text" name="slug" id="f_slug" v-model="productFields.slug">
        </label>
    </form>
</template>
