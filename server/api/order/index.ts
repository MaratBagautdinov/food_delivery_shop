import { Model } from "sequelize"
import { T_Order } from "~/types"
import Order from "~/backend/models/modelOrder"

export default defineEventHandler<Promise<Model<T_Order, T_Order>[]>>((event) => {
  return Order.findAll()
})
