<script setup lang="ts">
import type { YMap } from '@yandex/ymaps3-types';
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';

//Можно использовать для различных преобразований
const map = ref<null | YMap>(null);
</script>

<template>
    <div class="yandex-map-wrap">
        <YandexMap v-model="map" :settings="{
            location: {
                center: [52.397587, 55.736263],
                zoom: 16,
            },
        }" width="100%" height="500px">
            <YandexMapDefaultSchemeLayer v-if="map" />
        </YandexMap>
    </div>
</template>

<style>
.yandex-map-wrap {
    overflow: hidden;
    border-radius: 20px;
}
</style>
