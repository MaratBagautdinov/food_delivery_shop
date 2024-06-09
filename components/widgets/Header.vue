<script lang="ts" setup>
import { menuNavTop, menuUserActions } from '~/content';
import { useUserStore } from '~/store';
const userStore = useUserStore()
const cart = computed(() => userStore.orders.find(o => o.status_id == 0))


const sum = computed(() => {
    return Number(cart.value?.items.reduce((prev, current) => { return prev + current.price }, 0))
})

</script>

<template>
    <header class="section">
        <div class="header-body section-body max-width">
            <div class="header-logo-wrap">
                <img src="/logo.jpg" alt="logo" srcset="">
            </div>
            <div class="header-nav-wrap">
                <nav>
                    <ul class="menu-list">
                        <li class="menu-item" v-for="link in menuNavTop">
                            <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header-user-actions-wrap">
                <ul class="menu-list">
                    <li class="menu-item" v-for="link in menuUserActions">
                        <NuxtLink :to="link.href">
                            <img v-if="link.icon" :src="link.icon" :alt="link.label">
                            <span v-else>{{ link.label }}</span>
                        </NuxtLink>
                    </li>
                    <li class="menu-item">
                        <NuxtLink :to="`/profile/orders/${cart?.id}`">
                            <span>Корзина: {{ sum }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<style>
header {
    background: #ffcc01;
}

.header-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-nav-wrap ul {
    display: flex;
    flex-direction: row;
    gap: 20px
}

.header-user-actions-wrap ul {
    display: flex;
    flex-direction: row;
    gap: 20px
}

.header-logo-wrap {
    width: 80px;
}

img {
    width: inherit;
}

.menu-item a {
    background-color: rgb(240, 241, 217);
    border-radius: 5px;
    padding: 6px 16px;
    font-size: 18px;
    transition: .2s
}

.menu-item:hover a {
    background-color: rgb(255, 255, 255)
}
</style>