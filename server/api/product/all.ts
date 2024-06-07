import { Model } from "sequelize"
import { T_Product, T_ProductDB } from "~/types"
import Product from "~/backend/models/modelProduct"

export default defineEventHandler<Promise<Model<T_ProductDB, T_ProductDB>[]> | null>((event) => {
    return Product.findAll().then((ps) => {
        return ps.map(p => {
            // @ts-ignore
            p.variants = JSON.parse(p?.variants) ?? []

            return p
        })
    })
})