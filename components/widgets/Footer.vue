<script lang="ts" setup>
import { contactsList, menuNavTop, menuUserActions } from '~/content';


</script>

<template>
    <footer class="section">
        <div class="footer-body section-body max-width">
            <div class="footer-logo-wrap">
                <img src="/logo.jpg" alt="logo" srcset="">
            </div>
            <div class="footer-col footer-nav-wrap">
                <nav>
                    <ul class="menu-list">
                        <li class="menu-item" v-for="link in menuNavTop">
                            <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer-col footer-contacts-wrap">
                <ul class="menu-list">
                    <li class="menu-item" v-for="link in contactsList">
                        <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="footer-col footer-user-actions-wrap">
                <ul class="menu-list">
                    <li class="menu-item" v-for="link in menuUserActions">
                        <NuxtLink :to="link.href">
                            <img v-if="link.icon" :src="link.icon" :alt="link.label">
                            <span v-else>{{ link.label }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<style>
footer {
    margin-top: auto;
    background: #ffcc01;
    padding-top: 20px;
    padding-bottom: 20px;
}

.footer-body {
    display: flex;
    justify-content: space-between;
}

.footer-col ul {
    display: flex;
    flex-direction: column;
    gap: 20px
}


.footer-logo-wrap {
    width: 80px;
}
</style>