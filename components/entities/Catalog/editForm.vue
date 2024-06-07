<script setup lang="ts">
import type { T_Catalog, T_Product } from '~/types';

const props = defineProps<{ catalog: T_Catalog }>()

const catalogFields = ref<T_Catalog>(props.catalog)
const route = useRoute()
const router = useRouter()

const submitHandler = async () => {
    await $fetch<T_Product>(`/api/catalog/${route.params.product_slug}/edit`, {
        method: 'POST',
        body: {
            catalog: catalogFields.value,
        }
    })

    navigateTo({ path: route.path, query: { variant: route.query.variant } })
}
</script>

<template>
    <form @submit.stop.prevent="submitHandler">
        <label for="f_name">
            <span>Наименование</span> <input type="text" name="name" id="f_name" v-model="catalogFields.name">
        </label>
        <label for="f_slug">
            <span>Slug</span>
            <input type="text" name="slug" id="f_slug" v-model="catalogFields.slug">
        </label>
        <SharedInputFile name="f_photo" v-model:photo="catalogFields.photo" />
        <input type="submit" class="submut" value="submit" />
    </form>
</template>
