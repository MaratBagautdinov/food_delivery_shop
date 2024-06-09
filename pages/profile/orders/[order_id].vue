<script setup lang="ts">
import type { T_Order } from '~/types';

const route = useRoute()
const { data: order } = await useFetch<T_Order>(`/api/order/${route.params.order_id}`)
</script>

<template>
    <div class="section order-section">
        <div class="section-body max-width">
            <h1>Заказ № {{ order?.id }}</h1>
            <div v-if="order" class="order-wrap">
                <WidgetsProductsList :orderProducts="order.items" :order_status="order.status_id" />
            </div>
            <div v-else>Заказов не найдено. Перейдите в <NuxtLink to="/catalog">меню</NuxtLink>
            </div>
        </div>
        <WidgetsCartForm v-if="order && order.status_id === 0" />
    </div>

</template>

<style>
.section.order-section {
    display: grid;
    grid-template-columns: 70% auto;
    gap: 20px;
    align-items: baseline;
}
</style>