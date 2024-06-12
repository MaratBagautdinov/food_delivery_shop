<script lang="ts" setup>
import type { T_Crumb } from '~/types';

const props = defineProps<{
    crumbs: T_Crumb[]
}>()
const crumbsFull: T_Crumb[] = [
    {
        label: 'Главная',
        url: '/'
    },
    ...props.crumbs
]
</script>
<template>
    <div class="section">
        <div class="section-body max-width">
            <ul class="flex crumbs-list">
                <li class="flex" v-for="crumb in crumbsFull" :key="crumb.label">
                    <NuxtLink :to="crumb.url">{{ crumb.label }} </NuxtLink>
                    <b>></b>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.flex.crumbs-list,
.flex.crumbs-list li {
    gap: 8px;
    padding: 0;
    margin: 0;
}

.crumbs-list {
    flex-wrap: wrap;
}

.flex.crumbs-list li a {
    transition: .2s;
    text-decoration: underline;
}

.flex.crumbs-list li a:hover {
    color: blue;
}

.flex.crumbs-list li:last-child b {
    display: none;
}
</style>