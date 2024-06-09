import { Model } from "sequelize"
import { T_User } from "~/types"
import modelUser from "~/backend/models/modelUser"

export default defineEventHandler<Promise<Model<T_User, T_User> | [number, T_User[]]>>(async (event) => {
    const { user } = await readBody<{ user: Omit<T_User, 'id'> }>(event)
    if (!user) {
        return [0, []]
    }
    const isUser = await modelUser.findOne({
        where: {
            phone: user.phone
        }
    })
    if (isUser?.dataValues) {
        return [2, [isUser.dataValues]]
    }
    let userLast = await modelUser.max<number, Model<T_User, T_User>>('id')
    return await modelUser.create(
        {
            id: userLast + 1,
            name: user.name,
            password: user.password,
            phone: user.phone
        }
    );
})
