import { Model } from "sequelize"
import { T_Order, T_Order_Item, T_ProductVariant } from "~/types"
import Order from "~/backend/models/modelOrder"
import modelProduct from "~/backend/models/modelProduct"
import { updateCart } from "~/utils"
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

    const updateItems = (oldItems: T_Order_Item[], productOffer: { product_id: number, variant_id: number }): T_Order_Item[] => {
        const index = oldItems.findIndex(i => (i.product_id == productOffer.product_id && i.variant_id == productOffer.variant_id))
        let ii: T_Order_Item[] = []
        if (index > -1) {
            ii = oldItems.splice(index, 1)
        }
        console.log({ oldItems, ii, index });

        return oldItems
    }

    const items = updateItems(JSON.parse(isOrder.items), {
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
