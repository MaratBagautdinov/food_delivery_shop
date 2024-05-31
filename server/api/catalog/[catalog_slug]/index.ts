import { Model } from "sequelize"
import { T_Catalog } from "~/types"
import Catalog from "~/backend/models/modelCatalog"

export default defineEventHandler<Promise<Model<T_Catalog, T_Catalog> | null> | null>((event) => {
    const catalog_slug = event.context.params?.catalog_slug
    if (!catalog_slug) return null
    return Catalog.findOne({
        where: {
            slug: event.context.params?.catalog_slug
        }
    })
})
