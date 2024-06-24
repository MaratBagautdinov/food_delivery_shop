<script
    setup
    lang="ts"
>
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
            navigateTo({ path: route.path, query: {} })
        }
    }

</script>

<template>
    <form @submit.stop.prevent="submitHandler">
        <label for="f_name">
            <input
                type="text"
                name="f_name"
                id="f_name"
                v-model.trim="productFields.name"
            >
        </label>
        <label for="f_slug">
            <input
                type="text"
                name="f_slug"
                id="f_slug"
                v-model.trim="productFields.slug"
            >
        </label>
        <SharedCheckedInput
            v-model:checked="productFields.checked"
            name="f_checked"
        >
            {{ productFields.checked ?
                ("Включён")
                : ("Выключен") }}
        </SharedCheckedInput>
        <EntitiesProductEditFormVariantsList v-model:variants="productFields.variants" />
        <input
            type="submit"
            class="submut"
            value="Создать товар"
        />
    </form>
</template>
