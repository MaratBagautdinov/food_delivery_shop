import { Model } from "sequelize"
import { T_Order } from "~/types"
import Order from "~/backend/models/modelOrder"
import { useRoute } from "nuxt/app"
import { useRouter } from "vue-router"
export default defineEventHandler<Promise<Model<T_Order, T_Order>[]>>(async (event) => {
    const router = useRouter()
    const order_id = event.context.params?.id
    await Order.update(
        {
            status_id: 1
        },
        {
            where: {
                id: order_id
            },
            returning: true
        }
    )
    await sendRedirect(event, `https://food-delivery-shop.vercel.app/profile/orders/${order_id}`, 301)
})
