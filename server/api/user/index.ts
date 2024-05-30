import { Model } from "sequelize"
import { actions } from "~/backend/store"
import { T_User } from "~/types"

export default defineEventHandler<Promise<Model<T_User, T_User>[]>>((event) => {
    return actions.fetchUsers()
})