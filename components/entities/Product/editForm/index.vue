<script setup lang="ts">
import type { T_Product } from '~/types';

const props = defineProps<{ product: T_Product }>()

const productFields = ref<T_Product>(props.product)
const route = useRoute()
const router = useRouter()

const submitHandler = async () => {
    await $fetch<T_Product>(`/api/product/${route.params.product_slug}/edit`, {
        method: 'POST',
        body: {
            product: productFields.value,
        }
    })

    navigateTo({ path: route.path, query: { variant: productFields.value.variants[0].id } })
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
        <SharedCheckedInput v-model:checked="productFields.checked" name="f_checked" />
        <EntitiesProductEditFormVariantsList v-model:variants="productFields.variants" />
        <input type="submit" class="submut" value="submit" />
    </form>
</template>
