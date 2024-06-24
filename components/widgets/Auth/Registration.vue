<script
    setup
    lang="ts"
>
    import { useUserStore } from '~/store';
    import type { T_User } from '~/types';
    import { vMaska } from 'maska/vue'
    const userStore = useUserStore()
    const isUser = ref<T_User | false>(false)
    const errorCode = ref<number>(3)
    const errorText = computed(() => {
        return {
            0: 'Ошибка регистрации',
            1: 'Ошибка регистрации',
            2: 'Пользователь с таким номером занят',
            3: ''
        }[errorCode.value]
    })
    const submitHandler = async () => {
        status.value = 'pending'
        $fetch<T_User | [number, T_User]>('/api/user/create', {
            method: 'POST',
            body: { name: name.value, phone: phone.value.replace(/\D/g, ''), password: password.value },
        }).then(res => {
            console.log(res);

            if (!!res?.id) {
                status.value = 'fullfield'
                userStore.setUser(res?.id)
            } else {
                errorCode.value = res[0]
                status.value = 'rejected'
            }
        })
    }
    const name = ref<string>('')
    const phone = ref<string>('')
    const password = ref<string>('')
    const ver = ref<boolean>(false)
    const status = ref<'pending' | 'rejected' | 'fullfield'>('fullfield')
</script>

<template>
    <div class="user-auth-block">
        <form @submit.stop.prevent="submitHandler">
            <label for="f_name">
                <span>Имя</span>
                <input
                    type="text"
                    name="f_name"
                    id="f_name"
                    required="true"
                    v-model.trim="name"
                />
            </label>
            <label for="f_phone">
                <span>Номер телефона</span>
                <InputMask
                    type="tel"
                    name="f_phone"
                    id="f_phone"
                    required="required"
                    v-model.trim="phone"
                    mask="+7 (999) 999 99-99"
                    placeholder="+7 (999) 999 99-99"
                />
            </label>
            <label for="f_password">
                <span>Пароль</span>
                <input
                    type="password"
                    name="f_password"
                    id="f_password"
                    required="true"
                    v-model.trim="password"
                    @input="status = 'fullfield'"
                >
            </label>
            <shared-checked-input
                name="f_read"
                v-model:checked="ver"
                :required="true"
            >
                вы принимаете <NuxtLink to="/user-agreement">пользовательское соглашение</NuxtLink>
            </shared-checked-input>
            <div class="status">
                <div
                    class="pending"
                    style="color: #1528af;"
                    v-if="status === 'pending'"
                >Обработка авторизации</div>
                <div
                    class="red"
                    style="color: red;"
                    v-else-if="status === 'rejected'"
                >{{ errorText }}</div>
            </div>
            <input
                type="submit"
                class="submut"
                value="Подтвердить"
            />
        </form>
    </div>
</template>
<style scoped>
    a {
        text-decoration: underline;
        color: blue;
    }
</style>