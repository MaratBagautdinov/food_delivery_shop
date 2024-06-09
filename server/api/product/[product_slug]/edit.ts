import { Model } from "sequelize"
import { T_Product, T_ProductDB } from "~/types"
import Product from "~/backend/models/modelProduct"

export default defineEventHandler<Promise<[number, Model<T_ProductDB, T_ProductDB>[]]>>(async (event) => {
    const body = await readBody<{ product: T_Product }>(event)
    const product = body.product
    if (!product) {
        return [0, []]
    }

    let productNew = await Product.update(
        {
            checked: product.checked,
            name: product.name,
            slug: product.slug,
            variants: JSON.stringify(product.variants ?? [])
        },
        {
            where: {
                id: product.id
            },
            returning: true
        }
    )
    return productNew;
})
