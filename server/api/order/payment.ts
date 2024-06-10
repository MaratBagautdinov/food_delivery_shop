// 1. CREATING NEW INSTANCE
import robokassa from 'node-robokassa';
import YooKassa from 'yookassa';
import { T_Order } from "~/types";

export const payment = async (type: 'ROBO' | 'YOO', order: T_Order) => {
    let paymentUrl = ''
    switch (type) {
        case "ROBO": {
            const key = {
                // REQUIRED OPTIONS:
                merchantLogin: process.env.ROBOKASSA_NAME,
                hashingAlgorithm: process.env.ROBOKASSA_HASH,
                password1: process.env.ROBOKASSA_PASS1,
                password2: process.env.ROBOKASSA_PASS2,

                // OPTIONAL CONFIGURATION
                testMode: process.env.ROBOKASSA_TEST, // Whether to use test mode globally
                resultUrlRequestMethod: 'GET' // HTTP request method selected for "ResultURL" requests
            }
            console.log(key)
            const robokassaApi = new robokassa.RobokassaHelper(key);
            paymentUrl = robokassaApi.generatePaymentUrl(order.sum, 'Custom transaction description message', {
                invId: order.id, // Your custom order ID
                email: 'marat.bagautdinov522mail.ru', // E-Mail of the paying user
                outSumCurrency: 'RUB', // Transaction currency
                isTest: process.env.ROBOKASSA_TEST, // Whether to use test mode for this specific transaction
                userData: { // You could pass any additional data, which will be returned to you later on
                    user_id: order.user_id
                }
            })
            break
        }
        case
            "YOO"
            :
            {
                const yooKassaApi = new YooKassa({
                    shopId: process.env.YOOKASSA_SHOP_ID,
                    secretKey: process.env.YOOKASSA_SECRET_KEY
                });

                paymentUrl = (await yooKassaApi.createPayment({
                    amount: {
                        value: String(order.sum) + ".00",
                        currency: "RUB"
                    },
                    payment_method_data: {
                        type: "bank_card"
                    },
                    confirmation: {
                        type: "redirect",
                        return_url: `https://food-delivery-shop.vercel.app/api/order/${order.id}/payment-confirm`
                    },
                    description: "Заказ №" + order.id
                })).confirmation.confirmation_url;
                break
            }
    }
    return paymentUrl
}

