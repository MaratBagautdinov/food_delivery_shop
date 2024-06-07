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

    navigateTo({ path: route.path, query: { variant: route.query.variant } })
}

</script>

<template>
    <form @submit.stop.prevent="submitHandler">
        <label for="f_name">
            <input type="text" name="f_name" id="f_name" v-model.trim="productFields.name">
        </label>
        <label for="f_checked">
            Включён
            <input type="checkbox" name="f_checked" :checked="productFields.checked" id="f_checked"
                v-model.trim="productFields.checked">
        </label>
        <div class="varints-list">
            <EntitiesProductEditFormVariant v-for="variant in productFields.variants" :variant />
        </div>
        <input type="submit" class="submut" value="submit" />
    </form>
</template>
