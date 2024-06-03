<script setup lang="ts">
import axios from 'axios';
import type { T_Product } from '~/types';

const props = defineProps<{ product: T_Product }>()

const productFields = ref<T_Product>(props.product)
const route = useRoute()
const router = useRouter()

const submitHandler = async () => {
    console.log('edit');

    await $fetch<T_Product>(`/api/product/${route.params.product_slug}/edit`, {
        method: 'POST',
        body: {
            product: productFields.value
        }
    })
}

const uploadImage = (e: Event) => {
    // @ts-ignore
    let img = (e.target).files[0]
    let fd = new FormData()

    fd.append('image', img)
    console.log(fd);

    // axios.post('/upload-image', fd)
    //     .then(resp => {
    //         this.imagePath = resp.data.path
    //     })
}



</script>

<template>
    <form @submit.stop.prevent="submitHandler">
        <label for="f_name">
            <input type="text" name="f_name" id="f_name" v-model.trim="productFields.name">
        </label>
        <label for="f_checked">
            Включён
            <input type="checkbox" name="f_checked" :checked="product.checked" id="f_checked"
                v-model.trim="productFields.checked">
        </label>
        <div class="varints-list">
            <div class="variant-item" v-for="variant in productFields.variants">
                <label :for="`f_variants[${variant.id}][name]`">
                    <input type="text" :name="`f_variants[${variant.id}][name]`" :id="`f_variants[${variant.id}][name]`"
                        v-model="variant.name">
                </label>
                <label :for="`f_variants[${variant.id}][name]`">
                    <img v-if="variant.photo" :src="variant.photo">
                    <input type="file" :name="`f_variants[${variant.id}][photo]`"
                        :id="`f_variants[${variant.id}][photo]`" @change="uploadImage"
                        accept="image/png, image/gif, image/jpeg">
                </label>
                <label for="f_variants[][checked]">
                    Включён
                    <input type="checkbox" :checked="variant.checked" :name="`f_variants[${variant.id}][checked]`"
                        :id="`f_variants[${variant.id}][checked]`" v-model="variant.checked">
                </label>
            </div>
        </div>
        <input type="submit" class="submut" value="submit" />
    </form>
</template>
<style>
.variant-item {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
}
</style>