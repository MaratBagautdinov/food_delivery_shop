import { Model } from "sequelize"
import { T_Catalog } from "~/types"
import Catalog from "~/backend/models/modelCatalog"

export default defineEventHandler<Promise<Model<T_Catalog, T_Catalog>[]>>((event) => {
    return Catalog.findAll()
})
