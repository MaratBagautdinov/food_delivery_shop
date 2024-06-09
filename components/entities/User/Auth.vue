<script setup lang="ts">
import { useUserStore } from '~/store';
const userStore = useUserStore()
const authType = ref<'auth' | 'reg'>('auth')
</script>

<template>
    <div class="buttons">
        <button @click="authType = 'reg'">Регистрация</button>
        <button @click="authType = 'auth'">Авторизации</button>
    </div>
    <WidgetsAuthRegistration v-if="authType == 'reg'" />
    <WidgetsAuthLogin v-else />
</template>
