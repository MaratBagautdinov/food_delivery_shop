import { Model } from "sequelize"
import { T_Order, T_Order_Item, T_ProductVariant } from "~/types"
import Order from "~/backend/models/modelOrder"
import modelProduct from "~/backend/models/modelProduct"
import sequelize from "~/backend/sequelize"
import { updateCart } from "~/utils"
const uniqueArray = (array: any[]) => Array.from(new Set(array))
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
    console.log({ isOrder });
    const productOffer = (await modelProduct.findOne({
        where: {
            id: product_id,
        }
    }))?.dataValues
    console.log({ productOffer });
    const variant: T_ProductVariant = JSON.parse(productOffer?.variants ?? "").find(v => {
        return variant_id == v.id
    })
    console.log({ variant });

    const updateItems = (oldItems: T_Order_Item[], productOffer: { price: number, product_id: number, variant_id: number }): T_Order_Item[] => {
        return [...oldItems, productOffer]
    }
    if (!!isOrder) {
        const items =
            updateItems(JSON.parse(isOrder.items), {
                price: variant.price,
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
    } else {
        let orderLast = await Order.max<number, Model<T_Order, T_Order>>('id')
        await Order.create({
            id: orderLast + 1,
            address: '',
            items: JSON.stringify(
                updateItems([], {
                    price: variant.price,
                    product_id,
                    variant_id
                })
            ),
            items_ids: JSON.stringify([product_id]),
            status_id: 0,
            sum: 0,
            type: 'delivery',
            user_id,
        })
    }

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
