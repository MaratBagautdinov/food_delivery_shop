<script setup lang="ts">
import type { T_Order } from '~/types';

const props = defineProps<{
    order: T_Order
}>()
const status = getStatusProps(props.order.status_id)
const style = { Background: status?.color }

</script>

<template>
    <tr class="orders-item">
        <td>{{ order.id }}</td>
        <td :style="{backgroundColor: status?.color}" >{{ status?.label }}</td>
        <td>{{ order.sum }}</td>
        <td>{{ order.items.length }}</td>
        <td>
            <NuxtLink :to="`/profile/orders/${order.id}`"><button>Подробнее</button></NuxtLink>
        </td>
    </tr>
</template>
