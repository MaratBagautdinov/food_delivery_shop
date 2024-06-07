import { Model } from "sequelize"
import { T_Product } from "~/types"
import Product from "~/backend/models/modelProduct"
import Catalog from "~/backend/models/modelCatalog"

export default defineEventHandler<Promise<Model<T_Product, T_Product>[]> | null>((event) => {
    const query = getQuery(event)

    return Product.findAll({
        where: (query.catalog_id) ? { catalog_id: query.catalog_id.toString() } : {}
    }).then((ps) => {
        return ps.map(p => {
            let catalog = Catalog.findOne({
                where: {
                    id: p.catalog_id
                }
            })
            console.log(catalog)
            // @ts-ignore
            p.variants = JSON.parse(p?.variants) ?? []

            return {
                ...p,
                variants: JSON.parse(p?.variants) ?? [],
                catalog
            }
        })
    })
})
