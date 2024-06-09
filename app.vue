<script setup lang="ts">
import { useUserStore } from './store';


useUserStore().setUser(Number(localStorage.getItem('user_id') ?? ""))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>