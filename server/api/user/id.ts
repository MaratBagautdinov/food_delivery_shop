import { Model } from "sequelize"
import { T_User } from "~/types"
import User from "~/backend/models/modelUser"
export default defineEventHandler<Promise<Model<T_User, T_User> | null>>(async (event) => {
    const { id } = getQuery<{ id: number }>(event)
    return await User.findOne({
        where: {
            id
        }
    })
})