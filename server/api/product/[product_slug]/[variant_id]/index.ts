import { Model } from "sequelize"
import { T_Catalog, T_Product, T_ProductDB, T_ProductVariant } from "~/types"
import Product from "~/backend/models/modelProduct"
import modelCatalog from "~/backend/models/modelCatalog"

export default defineEventHandler<Promise<Model<T_ProductDB, T_ProductDB> & { variant: T_ProductVariant, Catalog: T_Catalog } | null> | null>((event) => {
    const product_slug = event.context.params?.product_slug
    const variant_id = event.context.params?.variant_id
    if (!product_slug || !variant_id) return null
    modelCatalog.hasMany(Product, { foreignKey: 'catalog_id' })
    Product.belongsTo(modelCatalog, { foreignKey: 'catalog_id' })
    let product = Product.findOne({
        where: {
            id: product_slug
        }
    }).then(({ dataValues }) => {

        if (!dataValues) return ({ dataValues })
        //  @ts-ignore
        const variants: T_ProductVariant[] = JSON.parse(String(dataValues?.variants)) ?? []
        const variant: T_ProductVariant | undefined = variants.find(v => String(v.id) == variant_id)
        return {
            ...dataValues,
            variants,
            variant
        }
    })
    if (!product) return { product }
    return product
})
