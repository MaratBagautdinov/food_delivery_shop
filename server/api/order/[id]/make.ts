import { Model } from "sequelize"
import { T_Addres, T_Order, T_Order_Item, T_ProductVariant } from "~/types"
import Order from "~/backend/models/modelOrder"
import modelProduct from "~/backend/models/modelProduct"
import { updateCart } from "~/utils"
import { robokassaApi } from "../payment"
export default defineEventHandler<Promise<Model<T_Order, T_Order>[]>>(async (event) => {
    const { order_id, address, type } = getQuery<{
        order_id: number
        address: T_Addres
        type: T_Order['type']
    }>(event)
    const isOrder = (await Order.findOne({
        where: {
            id: order_id
        }
    }))?.dataValues

    if (!isOrder) return "Cart not founded"
    console.log({ isOrder });


    const newData = isOrder.address
    console.log({ newData });
    await Order.update(
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
    )
    // Required parameters.
    const outSum = isOrder.sum;
    const invDesc = 'Оформление доставки';

    // Optional options.
    const options = {
        invId: isOrder.id, // Your custom order ID
        email: 'marat.bagautdinov522mail.ru', // E-Mail of the paying user
        outSumCurrency: 'RUB', // Transaction currency
        isTest: process.env.ROBOKASSA_TEST, // Whether to use test mode for this specific transaction
        userData: { // You could pass any additional data, which will be returned to you later on
            user_id: isOrder.user_id
        }
    };
    const paymebtUrl = robokassaApi.generatePaymentUrl(outSum, invDesc, options)
    return {
        paymebtUrl,
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
