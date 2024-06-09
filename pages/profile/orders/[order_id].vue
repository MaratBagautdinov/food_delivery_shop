<script setup lang="ts">
import type { T_Order } from '~/types';

const route = useRoute()
const { data: order, error, status } = await useFetch<T_Order>(`/api/order/${route.params.order_id}`)
</script>

<template>
    <div class="section">
        <div class="section-body max-width">
            <h1>Заказ</h1>
            <div v-if="order">
                <div>{{ order.sum }}</div>
                <pre>{{ order.items }}</pre>
                <WidgetsCartForm />
            </div>
            <div v-else>Заказов не найдено. Перейдите в <NuxtLink to="/catalog">меню</NuxtLink>
            </div>
        </div>
    </div>
</template>