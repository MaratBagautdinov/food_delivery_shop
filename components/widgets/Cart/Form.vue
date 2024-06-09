<script setup lang="ts">
import type { T_Order } from '~/types';

const route = useRoute()
const router = useRouter()
const status = ref<'pending' | 'rejected' | 'fullfield'>('fullfield')
const address = ref<T_Order['address']>({
    city: '',
    entrance: '',
    floor: '',
    house: '',
    room: '',
    street: ''
})
const f_type_delivery = ref<T_Order['type']>('delivery')
watch(f_type_delivery, () => {
    console.log(f_type_delivery.value);
})
const submitHandler = () => {
    status.value = 'pending'
    $fetch<{ paymebtUrl: string, order: T_Order }>(`/api/order/${route.params.order_id}/make`, {
        query: { order_id: route.params.order_id, type: f_type_delivery.value, address: address.value },
    }).then(res => {
        console.log(res);
        if (res?.paymebtUrl) {
            navigateTo(res.paymebtUrl, { redirectCode: 301, external: true })
            status.value = 'fullfield'
        } else {
            status.value = 'rejected'
        }
    })
}
</script>

<template>
    <form @submit.stop.prevent="submitHandler">
        <label for="f_type_delivery">
            <span>Доставка</span>
            <input type="radio" name="f_type" id="f_type_delivery" value="delivery" v-model.trim="f_type_delivery"
                @input="status = 'fullfield'">
        </label>
        <label for="f_type_pick">
            <span>Самовывоз</span>
            <input type="radio" name="f_type" id="f_type_pick" value="pickup" v-model.trim="f_type_delivery"
                @input="status = 'fullfield'">
        </label>
        <div class="status">
            <div class="pending" style="color: #1528af;" v-if="status === 'pending'">Обработка оформления заказа</div>
            <div class="red" style="color: red;" v-else-if="status === 'rejected'">Пользователь не найден</div>
        </div>
        <input type="submit" class="submut" value="Перейти к оплате" />
    </form>
</template>