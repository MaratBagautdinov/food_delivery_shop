import { Model } from "sequelize"
import { T_Catalog } from "~/types"
import Catalog from "~/backend/models/modelCatalog"

export default defineEventHandler<Promise<[number, Model<T_Catalog, T_Catalog>[]]>>(async (event) => {
    const body = await readBody<{ catalog: T_Catalog }>(event)
    const catalog = body.catalog
    console.log(catalog);

    if (!catalog) {
        return [0, []]
    }

    let catalogNew = await Catalog.update(
        {
            name: catalog.name,
            slug: catalog.slug,
            photo: catalog.photo
        },
        {
            where: {
                id: catalog.id
            },
            returning: true
        }
    )
    return catalogNew;
})
