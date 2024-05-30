<script lang="ts" setup>
import type { T_Link } from '~/types';


const menuNavTop: T_Link[] = [
    {
        href: "/",
        label: "Гланая"
    },
    {
        href: "/catalog",
        label: "Меню"
    },
    {
        href: "/contacts",
        label: "Контакты"
    },
]
const menuUserActions: T_Link[] = [
    {
        href: "/profile",
        label: "Профиль"
    },
    {
        href: "/profile/orders",
        label: "Заказы"
    },
]

</script>

<template>
    <header class="section">
        <div class="header-body section-body max-width">
            <div class="header-logo-wrap">
                <img src="/logo.jpg" alt="logo" srcset="">
            </div>
            <div class="header-nav-wrap">
                <nav>
                    <ul>
                        <li v-for="link in menuNavTop">
                            <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header-user-actions-wrap">
                <ul>
                    <li v-for="link in menuUserActions">
                        <NuxtLink :to="link.href">
                            <img v-if="link.icon" :src="link.icon" :alt="link.label">
                            <span v-else>{{ link.label }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<style>
.header-body {
    display: flex;
    justify-content: space-between
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
    width: 100px;
}

img {
    width: inherit;
}
</style>