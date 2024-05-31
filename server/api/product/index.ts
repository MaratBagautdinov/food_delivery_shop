import { Model } from "sequelize"
import { T_Product } from "~/types"
import Product from "~/backend/models/modelProduct"

export default defineEventHandler<Promise<Model<T_Product, T_Product>[]> | null>((event) => {
    const query = getQuery(event)

    return Product.findAll({
        where: (query.catalog_id) ? { catalog_id: query.catalog_id.toString() } : {}
    })
})
