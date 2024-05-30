<script setup lang="ts">
import type { T_User } from '~/types';

const { data: user } = await useFetch<T_User[]>('/api/user')
</script>

<template>
    <div class="section">
        <div class="section-body max-width">
            <h1>Profile page</h1>
            <pre>{{ user }}</pre>
        </div>
    </div>
</template>