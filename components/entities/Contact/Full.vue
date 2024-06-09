<script lang="ts" setup>
import { contacts } from '~/content';


</script>

<template>
    <table v-if="contacts" class="contact-list">
        <tr v-for="c in contacts" class="contact-item">
            <th class="label">{{ c.label }}</th>
            <td class="value">{{ c.value }}</td>
        </tr>
    </table>
</template>
<style>
table {
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
    width: fit-content;
    height: fit-content;
    border-radius: 6px;
}

th,
td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
    text-align: left
}
</style>