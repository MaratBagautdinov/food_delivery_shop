import { Model } from "sequelize"
import { T_User } from "~/types"
import User from "~/backend/models/modelUser"
export default defineEventHandler<Promise<Model<T_User, T_User>[]>>((event) => {
    return User.findAll()
})