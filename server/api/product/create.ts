import { Model } from "sequelize"
import { T_Product, T_ProductDB } from "~/types"
import Product from "~/backend/models/modelProduct"

export default defineEventHandler<Promise<Model<T_ProductDB, T_ProductDB> | [number, never[]]>>(async (event) => {
    const body = await readBody<{ product: T_Product }>(event)
    const product = body.product
    if (!product) {
        return [0, []]
    }
    let productLast = await Product.max<number, Model<T_ProductDB, T_ProductDB>>('id')
    let productNew = await Product.create(
        {
            id: productLast + 1,
            ...product,
            variants: JSON.stringify(product.variants ?? [])
        }
    )
    return productNew;
})
