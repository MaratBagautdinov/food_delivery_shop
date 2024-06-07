<script setup lang="ts">
const props = defineProps<{
    name: string
}>()
const photo = defineModel<string>('photo')
const { handleFileInput, files } = useFileStorage()
watch(files.value, async () => {
    const newFile = files.value[0]
    if (!newFile) {
        console.error(files.value);
        console.error("FILE NOT UPLOAD");
        return
    }
  photo.value = await $fetch<string>(`/api/files/upload`, {
        method: 'POST',
        body: {
            file: newFile
        }
    })
})
</script>
<template>
    <label :for="name">
        <img class="file_img" v-if="photo" :src="photo" :alt="name">
        <input type="file" :name="name" :id="name" @input="handleFileInput" accept="image/png, image/gif, image/jpeg">
    </label>
</template>
<style>
.file_img {
    height: 70px;
}
</style>