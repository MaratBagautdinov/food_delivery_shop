<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const {
    action,
    id,
    entityname
} = route.query
defineProps<{
    modalHead: string
}>()
</script>

<template>
    <Teleport to="body">
        <div class="modal">
            <div class="modal-body-wrap">
                <div class="modal-head">
                    <div class="head-text">{{ action && action === 'edit' ? "Редактировать" : "Создать" }} {{ modalHead
                        }}</div>
                    <NuxtLink class="head-close" :to="{ path: route.path, query: { variant: route.query.variant } }">X
                    </NuxtLink>
                </div>
                <div id="modal-body">
                    <slot />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.modal {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background: #00000060;
    backdrop-filter: blur(5px);
}

.modal-body-wrap {
    position: absolute;
    z-index: 50;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 600px;
    height: 500px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
}

.modal-head {
    border-bottom: 1px solid black;
    padding: 2rem;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    width: 100%;
}

#modal-body {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    display: flex;
    flex-direction: column;
    align-items: baseline;
}
</style>
