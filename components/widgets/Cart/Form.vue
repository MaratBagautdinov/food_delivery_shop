<script setup lang="ts">
import type { T_Order } from '~/types';

const route = useRoute()
const status = ref<'pending' | 'rejected' | 'fullfield'>('fullfield')
const address = ref<T_Order['address']>({
    city: 'Набережные Челны',
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
const props = defineProps<{
    paymentUrl: string
}>()
const submitHandler = () => {
    navigateTo(props.paymentUrl, { redirectCode: 301, external: true })
}
</script>

<template>
    <form @submit.stop.prevent="submitHandler">
        <div class="f_type_delivery-wrap">
            <h4>Способ доставки</h4>
            <div class="buttons">
                <label for="f_type_delivery">
                    <span>Доставка</span>
                    <input type="radio" name="f_type" id="f_type_delivery" value="delivery"
                        v-model.trim="f_type_delivery" @input="status = 'fullfield'">
                </label>
                <label for="f_type_pick">
                    <span>Самовывоз</span>
                    <input type="radio" name="f_type" id="f_type_pick" value="pickup" v-model.trim="f_type_delivery"
                        @input="status = 'fullfield'">
                </label>
            </div>
        </div>
        <div class="f_addres-wrap" v-if="f_type_delivery === 'delivery'">
            <h4>Адрес</h4>
            <SharedInputText label="Улица" name="f_address_street" :required="true" v-model:value="address.street" />
            <SharedInputText label="Дом" name="f_address_house" :required="true" v-model:value="address.house" />
            <SharedInputText label="Подъезд" name="f_address_entrance" :required="true"
                v-model:value="address.entrance" />
            <SharedInputText label="Квартира" name="f_address_room" :required="true" v-model:value="address.room" />
        </div>
        <div class="status">
            <div class="pending" style="color: #1528af;" v-if="status === 'pending'">Обработка оформления заказа</div>
            <div class="red" style="color: red;" v-else-if="status === 'rejected'">Ошибка оформления заказа</div>
        </div>
        <input type="submit" class="submut" value="Перейти к оплате" />
    </form>
</template>
<style scoped>
form {
    background: #ffcc01;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 20px;
}

form h4 {
    margin-top: 0;
}
</style>