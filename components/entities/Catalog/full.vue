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
    <SharedEditButton :link="route.path" />
    <SharedCreateButton :link="route.path" />
    <WidgetsModal :modalHead="catalog.name" v-if="route.query.action">
        <EntitiesCatalogEditForm :catalog v-if="route.query.action === 'edit'" />
        <EntitiesProductCreateForm v-if="route.query.action === 'create'" />
    </WidgetsModal>
    <component :is="viewTypeTemplates[viewType]" :products v-if="products" />
</template>