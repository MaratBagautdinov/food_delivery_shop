<script lang="ts" setup>
import { useUserStore } from '~/store';
import type { T_Order, T_Order_Item, T_orderProduct } from '~/types';
const props = defineProps<{
    order_status: T_Order['status_id']
    orderProducts: T_Order_Item[]
}>()

</script>

<template>
    <div class="products-list products-list--list" v-if="orderProducts">
        <EntitiesProductList v-for="orderItem in orderProducts" :orderItem
            :key="`${orderItem.product_id}_${orderItem.variant_id}`" :order_status />
    </div>
</template>

<style scoped>
.products-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
</style>