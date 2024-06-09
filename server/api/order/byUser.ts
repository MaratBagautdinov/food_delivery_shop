import { Model } from "sequelize"
import { T_Order } from "~/types"
import Order from "~/backend/models/modelOrder"

export default defineEventHandler<Promise<Model<T_Order, T_Order>[]>>(async (event) => {
    const { user_id } = getQuery<{ user_id: number }>(event)

    return (await Order.findAll({
        where: {
            user_id
        }
    })).map(r => {
        return {
            ...r.dataValues,
            items_ids: JSON.parse(r.dataValues.items_ids),
            items: JSON.parse(r.dataValues.items)
        }
    })
})
