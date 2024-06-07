import { Model } from "sequelize"
import { File, T_Product, T_ProductDB } from "~/types"
import Product from "~/backend/models/modelProduct"

export default defineEventHandler<Promise<string>>(async (event) => {
    const body = await readBody<{ file: File, entity: "products" | "catalogs" }>(event)
    const fileName = await storeFileLocally(
        body.file.content, // the stringified version of the file
        8,            // you can add a name for the file or length of Unique ID that will be automatically generated!
        `/${body.entity}`  // the folder the file will be stored in
    )
    return `${process.env.STORAGE}/${body.entity}/${fileName}`
})
