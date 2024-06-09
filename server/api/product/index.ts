import { Model } from "sequelize"
import { T_Catalog, T_Product } from "~/types"
import Product from "~/backend/models/modelProduct"
import Catalog from "~/backend/models/modelCatalog"
import modelCatalog from "~/backend/models/modelCatalog"

export default defineEventHandler<Promise<Model<T_Product & { catalog: T_Catalog }, T_Product & { catalog: T_Catalog }>[]> | null>(async (event) => {
    const query = getQuery(event)

    modelCatalog.hasMany(Product, { foreignKey: 'catalog_id' })
    Product.belongsTo(modelCatalog, { foreignKey: 'catalog_id' })
    return await Product.findAll({
        include: [{ model: modelCatalog, required: true }],
        where: (query.catalog_id) ? { catalog_id: query.catalog_id.toString() } : {}
    }).then((ps) => {
        return ps.map(p => {
            return {
                ...p.dataValues,
                variants: JSON.parse(p.dataValues?.variants) ?? []
            }
        })
    })
})
