import { Model } from "sequelize"
import { T_Product, T_ProductDB } from "~/types"
import Product from "~/backend/models/modelProduct"
import modelCatalog from "~/backend/models/modelCatalog"

export default defineEventHandler<Promise<Model<T_ProductDB, T_ProductDB> | null> | null>((event) => {
    const product_slug = event.context.params?.product_slug
    if (!product_slug) return null
    modelCatalog.hasMany(Product, { foreignKey: 'catalog_id' })
    Product.belongsTo(modelCatalog, { foreignKey: 'catalog_id' })
    let product = Product.findOne({
        include: [modelCatalog],
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
