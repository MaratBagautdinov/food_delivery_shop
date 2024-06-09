<script lang="ts" setup>
import { useUserStore } from '~/store';
import type { T_Order, T_Product, T_ProductVariant } from '~/types';


const props = defineProps<{
    variant: T_ProductVariant,
    product_id: T_Product['id']
    isCount?: boolean
}>()


const inCartHandler = () => {
    status.value = 'pending'
    if (useUserStore().user?.id) {
        $fetch<T_Order[]>('/api/order/addProduct', {
            query: {
                user_id: useUserStore().user?.id,
                product_id: props.product_id,
                variant_id: props.variant?.id,
            }
        }).then(res => {
            console.log(res);
            useUserStore().orders = res
            status.value = 'fullfield'
        })
    } else {
        navigateTo("/profile")
    }
}
const outCartHandler = () => {
    status.value = 'pending'
    $fetch('/api/order/delProduct', {
        query: {
            user_id: useUserStore().user?.id,
            product_id: props.product_id,
            variant_id: props.variant?.id,
        }
    }).then(res => {
        console.log(res);
        useUserStore().orders = res
        status.value = 'fullfield'
    })
}
const inCartCount = computed(() => {
    if (!props.isCount) return ""
    const newOrder = useUserStore().orders.find(o => {
        return o.status_id == 0
    })
    if (!newOrder) return 0
    return newOrder.items.reduce((prev, current) => prev + Number(current.product_id == props.product_id && current.variant_id == props.variant?.id), 0)
})
const status = ref<'pending' | 'rejected' | 'fullfield'>('fullfield')
</script>

<template>
    <div class="varint-wrap">
        <button @click="outCartHandler" :disabled="status === 'pending' || !inCartCount">-</button>
        {{ inCartCount }}
        <button @click="inCartHandler" :disabled="status === 'pending'">+</button>
        <div class="price">
            {{ variant.price }} руб
        </div>
    </div>
</template>

<style></style>