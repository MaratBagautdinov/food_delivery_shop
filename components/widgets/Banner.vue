<script lang="ts" setup>
import { banners } from '~/content';


</script>

<template>
    <div class="section">
        <div class="section-body max-width">
            <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
                :effect="'creative'" :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                }" :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }">
                <SwiperSlide v-for="slide in banners" :key="slide">
                    <div class="swiper-item" :style="{ backgroundImage: `url(${slide})` }"></div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
<style>
.swiper {
    border-radius: 20px;
    overflow: hidden;
}

.swiper-item {
    height: 500px;
    background-color: aliceblue;
    border-radius: 20px;
    overflow: hidden;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: center;
    background-position: center;
    background-size: cover;
    cursor: pointer;
}
</style>