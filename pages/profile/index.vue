<script setup lang="ts">
import { useUserStore } from '~/store';

const userStore = useUserStore()
</script>

<template>
    <div class="section">
        <div class="section-body max-width">
            <h1>Профиль</h1>
            <EntitiesUserFull v-if="userStore.user?.id" />
            <EntitiesUserAuth v-else />
        </div>
    </div>
</template>