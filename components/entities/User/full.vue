<script setup lang="ts">
import { useUserStore } from '~/store';
const userStore = useUserStore()

</script>

<template>
    <div class="section">
        <div class="section-body max-width">
            <div class="user-info" v-if="userStore.$state.user">
                <h2 class="name">Имя: {{ userStore.$state.user.name }}</h2>
                <div class="phone">Номер: {{ userStore.$state.user.phone }}</div>
                <NuxtLink to="/profile/orders" class="orders-link">Заказы: {{ userStore.$state.orders.length }}
                </NuxtLink>
                <button @click="userStore.exitUser">Выйти</button>
            </div>
            <WidgetsAuthFull v-else />
            <pre>{{ userStore.$state.user }}</pre>
        </div>
    </div>
</template>