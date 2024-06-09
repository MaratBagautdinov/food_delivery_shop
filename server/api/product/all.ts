import { Model } from "sequelize"
import { T_Catalog, T_Product } from "~/types"
import Product from "~/backend/models/modelProduct"
import modelCatalog from "~/backend/models/modelCatalog"
export default defineEventHandler<Promise<Model<T_Product, T_Product>[]> | null>(() => {

    modelCatalog.hasMany(Product, { foreignKey: 'catalog_id' })
    Product.belongsTo(modelCatalog, { foreignKey: 'catalog_id' })
    return Product.findAll({
        include: [{ model: modelCatalog, required: true }]
    }).then((ps) => {
        const res = ps.map(p => {
            return {
                ...p.dataValues,
                variants: JSON.parse(p.dataValues?.variants) ?? []
            }
        })
        return res
    })
})