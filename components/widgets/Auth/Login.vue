<script setup lang="ts">
import { useUserStore } from '~/store';
import type { T_User } from '~/types';
import { vMaska } from 'maska/vue'
const userStore = useUserStore()
const isUser = ref<T_User | false>(false)
const submitHandler = async () => {
    status.value = 'pending'
    $fetch<T_User | null>('/api/user/auth', {
        query: { phone: phone.value.replace(/\D/g, ''), password: password.value },
    }).then(res => {
        console.log(res);

        if (res?.id) {
            status.value = 'fullfield'
            userStore.setUser(res?.id)
        } else {
            status.value = 'rejected'
        }
    })
}
const phone = ref<string>('')
const password = ref<string>('')
const status = ref<'pending' | 'rejected' | 'fullfield'>('fullfield')
</script>

<template>
    <div class="user-auth-block">
        <form @submit.stop.prevent="submitHandler">
            <label for="f_phone">
                <span>Номер телефона</span>
                <InputMask type="tel" name="f_phone" id="f_phone" required="required" v-model.trim="phone"
                    mask="+7 (999) 999 99-99" placeholder="+7 (999) 999 99-99" />
            </label>
            <label for="f_password">
                <span>Пароль</span>
                <input type="password" name="f_password" id="f_password" v-model.trim="password"
                    @input="status = 'fullfield'">
            </label>
            <div class="status">
                <div class="pending" style="color: #1528af;" v-if="status === 'pending'">Обработка авторизации</div>
                <div class="red" style="color: red;" v-else-if="status === 'rejected'">Пользователь не найден</div>
            </div>
            <input type="submit" class="submut" value="Подтвердить" />
        </form>
    </div>
</template>