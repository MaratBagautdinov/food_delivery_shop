<script setup lang="ts">
import WidgetsProductsGrid from '~/components/widgets/Products/grid.vue';
import WidgetsProductsList from '~/components/widgets/Products/list.vue';
import type { T_Catalog, T_Product, T_ViewType } from '~/types';
const route = useRoute()
const router = useRouter()
const viewTypeTemplates = {
    WidgetsProductsGrid,
    WidgetsProductsList
}
const props = defineProps<{
    catalog: T_Catalog
    products: T_Product[]
    viewType: keyof typeof viewTypeTemplates
}>()

</script>

<template>
    <div class="buttons">
        <SharedEditButton :link="route.path" />
        <SharedCreateButton :link="route.path" />
    </div>
    <div class="catalog-banner" :style="{backgroundImage: `url(${catalog.photo})`}">
        <h1>{{ catalog.name }}</h1>
    </div>
    <WidgetsModal :modalHead="catalog.name" v-if="route.query.action">
        <EntitiesCatalogEditForm :catalog v-if="route.query.action === 'edit'" />
        <EntitiesProductCreateForm v-if="route.query.action === 'create'" />
    </WidgetsModal>
    <component :is="viewTypeTemplates[viewType]" :products v-if="products" />
</template>
<style>
.catalog-banner {
    width: 100%;
    height: 200px;
    background-color: #000000;
    background-position: center;
    background-size: cover;
    margin: 20px 0;
    overflow: hidden;
    border-radius: 30px;
    display: flex;
    align-items:center;
    color: #ffffff;
    box-sizing: border-box;
    padding-left: 100px;
}
</style>