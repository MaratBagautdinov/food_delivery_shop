<script setup lang="ts">
import WidgetsProductsGrid from '~/components/widgets/Products/grid.vue';
import WidgetsProductsList from '~/components/widgets/Products/list.vue';
import type { T_Catalog, T_Product, T_ViewType } from '~/types';
const route = useRoute()
const router = useRouter()
const { data: catalog } = await useFetch<T_Catalog>(`/api/catalog/${route.params.catalog_slug}`, {
  onRequestError({ request, options, error }) {
    router.push({ path: '/catalog' })
  },
})

const { data: products } = await useFetch<T_Product[]>(`/api/product?catalog_id=${catalog.value?.id}`, {
  onRequestError({ request, options, error }) {
    router.push({ path: '/catalog' })
  }
})
const viewTypeTemplates = {
  WidgetsProductsGrid,
  WidgetsProductsList
}
const viewTypes: T_ViewType<keyof typeof viewTypeTemplates>[] = [
  {
    label: 'Grid',
    value: 'WidgetsProductsGrid'
  },
  {
    label: 'List',
    value: 'WidgetsProductsList'
  },
]
const viewType = ref<keyof typeof viewTypeTemplates>('WidgetsProductsGrid')

</script>

<template>
  <WidgetsCrumbs :crumbs="[{
    label: 'Каталог',
    url: '/catalog'
  },
  {
    label: `${catalog?.name}`,
    url: `/catalog/${catalog?.slug}`
  }]" />
  <div class="section">
    <div class="section-body max-width" v-if="catalog">
      <!-- <WidgetsFilter v-model:viewTypeModel="viewType" :viewTypes /> -->
      <EntitiesCatalogFull :catalog :products="products ?? []" :viewType />
    </div>
  </div>
</template>

<style>
.catalog-full-img {
  width: 200px;
}
</style>