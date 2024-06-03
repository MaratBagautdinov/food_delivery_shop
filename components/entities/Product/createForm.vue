<script setup lang="ts">
import type { T_Catalog, T_Product } from '~/types';

const route = useRoute()
const { data: catalog } = await useFetch<T_Catalog>(`/api/catalog/${route.params.catalog_slug}`, {})
const catalog_id = catalog.value ? catalog.value.id : 1
const productFields = ref<Omit<T_Product, 'id'>>({
    checked: true,
    catalog_id,
    name: "",
    slug: "",
    variants: []
})
</script>

<template>
    <form>
        <label for="f_name">
            <input type="text" name="name" id="f_name" v-model="productFields.name">
        </label>
        <label for="f_checked">
            Включён
            <input type="checkbox" name="checked" id="f_checked" v-model="productFields.checked">
        </label>
    </form>
</template>
