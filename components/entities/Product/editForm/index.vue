<script
    setup
    lang="ts"
>
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
</script>

<template>
    <form @submit.stop.prevent="submitHandler">
        <div class="flex">
            <SharedInputText
                label="Наименование"
                name="f_name"
                v-model:value="productFields.name"
                :required="false"
            />
            <SharedCheckedInput
                v-model:checked="productFields.checked"
                name="f_checked"
            />
        </div>
        <EntitiesProductEditFormVariantsList v-model:variants="productFields.variants" />
        <SharedInputTextarea
            label="Описание"
            name="f_desc"
            v-model:value="productFields.desc"
            :required="false"
        />
        <input
            type="submit"
            class="submut"
            value="submit"
        />
    </form>
</template>
