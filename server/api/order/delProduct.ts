import { Model } from "sequelize"
import { T_Order, T_Order_Item, T_ProductVariant } from "~/types"
import Order from "~/backend/models/modelOrder"
import modelProduct from "~/backend/models/modelProduct"
import { delOneItem, updateCart } from "~/utils"
export default defineEventHandler<Promise<Model<T_Order, T_Order>[]>>(async (event) => {
    const { user_id, product_id, variant_id } = getQuery<{
        user_id: number,
        product_id: number,
        variant_id: number
    }>(event)
    const isOrder = (await Order.findOne({
        where: {
            user_id,
            status_id: 0
        }
    }))?.dataValues
    if (!isOrder) return "Cart not founded"
    console.log({ isOrder });

    const items = delOneItem(JSON.parse(isOrder.items), {
        product_id,
        variant_id
    })
    const newData = updateCart(items, user_id, '')
    console.log({ newData });
    await Order.update(
        newData,
        {
            where: {
                id: isOrder.id
            },
            returning: true
        }
    )
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
