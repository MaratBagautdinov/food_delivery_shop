import { Model } from "sequelize"
import { T_Product } from "~/types"
import Product from "~/backend/models/modelProduct"

export default defineEventHandler<Promise<Model<T_Product, T_Product>[]> | null>(() => {
    // GET CATALOG
    return Product.findAll().then((ps) => {
        return ps.map(p => {
            // @ts-ignore
            p.variants = JSON.parse(p?.variants) ?? []

            return p
        })
    })
})