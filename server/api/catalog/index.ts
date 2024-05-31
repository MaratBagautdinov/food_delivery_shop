import { Model } from "sequelize"
import { T_Catalog } from "~/types"
import Catalog from "~/backend/models/modelCatalog"

export default defineEventHandler<Promise<Model<T_Catalog, T_Catalog>[]>>((event) => {
    return Catalog.findAll()
})

const mock = [
    {
        id: "1",
        name: "Бургер",
        slug: "burgers"
    },
    {
        id: "2",
        name: "Пицца",
        slug: "pizza"
    }
]