import {Model} from "sequelize"
import {T_Addres, T_Order, T_Order_Item, T_ProductVariant} from "~/types"
import Order from "~/backend/models/modelOrder"
import {payment} from "../payment"

export default defineEventHandler<Promise<Model<T_Order, T_Order>[]>>(async (event) => {
    const { address, type} = getQuery<{
        order_id: number
        address: T_Addres
        type: T_Order['type']
    }>(event)
    const order_id = event.context.params?.id
    const isOrder = (await Order.findOne({
        where: {
            id: order_id
        }
    }))?.dataValues

    if (!isOrder) return "Cart not founded"
    console.log({isOrder});

    const paymentUrl = payment('ROBO', isOrder)
    if (!paymentUrl) {
        return {
            paymentUrl: '',
            order: null
        }
    }
    return `<a href="${paymentUrl}">pay</a>`
    return {
        paymentUrl,
        order: (await Order.update(
            {
                address: JSON.stringify(address),
                type,
                status_id: 1
            },
            {
                where: {
                    id: isOrder.id
                },
                returning: true
            }
        ))[1]
    };
})
