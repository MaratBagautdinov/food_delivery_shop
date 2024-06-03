<script setup lang="ts">
import type { T_ViewType } from '~/types';


interface filterProps {
    viewTypes: T_ViewType<string>[]
}
const props = defineProps<filterProps>()
const viewTypeModel = defineModel('viewTypeModel', { required: true })
</script>


<template>
    <div class="filterWrap">
        <div class="filter-sort"></div>
        <div class="filter-view-type">
            <label v-for="viewType in props.viewTypes" :for="viewType.value">
                <span>{{ viewType.label }}</span>
                <input type="radio" :id="viewType.value" :value="viewType.value" name="filter-viewType"
                    v-model="viewTypeModel" />
            </label>
        </div>
    </div>
</template>

<style>
label {
    cursor: pointer;
}
</style>