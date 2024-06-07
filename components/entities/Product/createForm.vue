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
const submitHandler = async () => {
    const { id } = await $fetch<T_Product>(`/api/product/create`, {
        method: 'POST',
        body: {
            product: productFields.value,
        }
    })
    if (id) {
        navigateTo({ path: route.path, query: { variant: route.query.variant } })
    }
}

const addVariant = () => {
    productFields.value.variants.push({
        checked: true,
        id: Number(new Date),
        name: '',
        photo: '',
        price: 0,
        slug: ''
    })
}
</script>

<template>
    <form @submit.stop.prevent="submitHandler">
        <label for="f_name">
            <input type="text" name="f_name" id="f_name" v-model.trim="productFields.name">
        </label>
        <label for="f_slug">
            <input type="text" name="f_slug" id="f_slug" v-model.trim="productFields.slug">
        </label>
        <label for="f_checked">
            Включён
            <input type="checkbox" name="f_checked" :checked="productFields.checked" id="f_checked"
                v-model.trim="productFields.checked">
        </label>
        <div class="varints-list">
            <EntitiesProductEditFormVariant v-for="variant in productFields.variants" :variant />
            <div class="create-variant-btn" @click="addVariant">Создать вариант</div>
        </div>
        <input type="submit" class="submut" value="Создать товар" />
    </form>
</template>
