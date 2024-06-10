import { Model } from "sequelize"
import { T_Order } from "~/types"
import modelOrder from "~/backend/models/modelOrder"
import { payment } from "../payment"

export default defineEventHandler<Promise<Model<T_Order, T_Order> | null> | null>(async (event) => {
    const id = event.context.params?.id
    if (!id) return null
    const order = (await modelOrder.findOne({
        where: {
            id
        }
    }))?.dataValues
    if (!order) return null
    let paymentUrl: string = ''
    try {
        paymentUrl = order.status_id == 0 ? (await payment('YOO', order)) : ''
    } catch (e) {
        console.log(e);
    }
    return {
        ...order,
        items_ids: JSON.parse(String(order.items_ids)),
        items: JSON.parse(String(order.items)),
        paymentUrl
    }
})
