import { Model } from "sequelize"
import { T_Order } from "~/types"
import modelOrder from "~/backend/models/modelOrder"

export default defineEventHandler<Promise<Model<T_Order, T_Order> | null> | null>(async (event) => {
    const id = event.context.params?.id
    if (!id) return null
    const order = (await modelOrder.findOne({
        where: {
            id
        }
    }))?.dataValues
    return {
        ...order,
        items_ids: JSON.parse(order.items_ids),
        items: JSON.parse(order.items)
    }
})
