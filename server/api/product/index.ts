import { Model } from "sequelize"
import { T_Product, T_ProductDB } from "~/types"
import Product from "~/backend/models/modelProduct"

export default defineEventHandler<Promise<Model<T_ProductDB, T_ProductDB>[]> | null>((event) => {
    const query = getQuery(event)

    return Product.findAll({
        where: (query.catalog_id) ? { catalog_id: query.catalog_id.toString() } : {}
    })
})
