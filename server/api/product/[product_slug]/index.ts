import { Model } from "sequelize"
import { T_Product } from "~/types"
import Product from "~/backend/models/modelProduct"

export default defineEventHandler<Promise<Model<T_Product, T_Product> | null> | null>((event) => {
    const product_slug = event.context.params?.product_slug
    if (!product_slug) return null
    let product = Product.findOne({
        where: {
            slug: event.context.params?.product_slug
        }
    }).then((p) => {
        if (!p) return null
        //  @ts-ignore
        p.variants = JSON.parse(p?.variants) ?? []

        return p
    })
    if (!product) return null
    return product
})
